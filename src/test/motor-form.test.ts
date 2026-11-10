import { readFileSync } from 'node:fs';
import { afterEach, describe, expect, it, vi } from 'vitest';

const script = readFileSync('public/ref/ref.js', 'utf8');

afterEach(() => {
  vi.useRealTimers();
  document.body.innerHTML = '';
});

describe('Captured Motor form readiness', () => {
  for (const lang of ['ar', 'en']) {
    for (const size of ['', '-t', '-m']) {
      it(`requires all fields and consent without submitting (${lang}${size})`, () => {
        vi.useFakeTimers();
        const file = `motor-${lang}${size}.html`;
        document.body.innerHTML = readFileSync(`public/ref/${file}`, 'utf8');
        new Function('location', script)({ pathname: `/ref/${file}`, origin: window.location.origin });
        const form = document.querySelector('form[data-ref-form]');
        if (!(form instanceof HTMLFormElement)) throw new Error('Motor form missing');
        const button = form.querySelector('button.bg-newYellow');
        const consent = form.querySelector('input[type=checkbox]');
        if (!(button instanceof HTMLButtonElement) || !(consent instanceof HTMLInputElement)) throw new Error('Controls missing');
        expect(button.disabled).toBe(true);
        const fields = Array.from(form.querySelectorAll<HTMLInputElement>('input[type=number]'));
        ['1058529940', '5444444444', '7426'].forEach((value, index) => {
          const field = fields[index];
          if (!field) throw new Error('Numeric field missing');
          field.value = value;
          field.dispatchEvent(new Event('input', { bubbles: true }));
        });
        expect(button.disabled).toBe(true);
        consent.checked = true;
        consent.dispatchEvent(new Event('change', { bubbles: true }));
        expect(button.disabled).toBe(false);
        const submit = vi.fn();
        form.addEventListener('submit', submit);
        button.click();
        expect(submit).not.toHaveBeenCalled();
        expect(form.querySelector<HTMLElement>('[role=status]')?.hidden).toBe(false);
        if (size === '-m') {
          const consentControl = consent.closest('mat-checkbox');
          if (!(consentControl instanceof HTMLElement)) throw new Error('Consent wrapper missing');
          consentControl.style.display = 'none';
          consent.checked = false;
          consent.dispatchEvent(new Event('change', { bubbles: true }));
          expect(button.disabled).toBe(false);
        }
        const vehicle = fields[1];
        if (!vehicle) throw new Error('Vehicle field missing');
        vehicle.value = '';
        vehicle.dispatchEvent(new Event('input', { bubbles: true }));
        expect(button.disabled).toBe(true);
      });
    }
  }

  it('enables the button only for a 10-digit identity starting with 1 or 2', () => {
    vi.useFakeTimers();
    document.body.innerHTML = readFileSync('public/ref/motor-ar.html', 'utf8');
    new Function('location', script)({ pathname: '/ref/motor-ar.html', origin: window.location.origin });
    const form = document.querySelector('form[data-ref-form]');
    if (!(form instanceof HTMLFormElement)) throw new Error('Motor form missing');
    const button = form.querySelector('button.bg-newYellow');
    const consent = form.querySelector('input[type=checkbox]');
    const identity = form.querySelector('input[placeholder="رقم الهوية / الإقامة"]');
    if (!(button instanceof HTMLButtonElement) || !(consent instanceof HTMLInputElement) || !(identity instanceof HTMLInputElement))
      throw new Error('Controls missing');
    const fields = Array.from(form.querySelectorAll<HTMLInputElement>('input[type=number]'));
    fields.forEach((field) => {
      if (field === identity) return;
      field.value = '5444444444';
      field.dispatchEvent(new Event('input', { bubbles: true }));
    });
    consent.checked = true;
    consent.dispatchEvent(new Event('change', { bubbles: true }));
    const setIdentity = (value: string) => {
      identity.value = value;
      identity.dispatchEvent(new Event('input', { bubbles: true }));
    };
    setIdentity('5555555555'); // starts with 5
    expect(button.disabled).toBe(true);
    setIdentity('105852994'); // only 9 digits
    expect(button.disabled).toBe(true);
    setIdentity('10585299405'); // an 11th digit is rejected while typing
    expect(identity.value).toBe('1058529940');
    expect(button.disabled).toBe(false);
    setIdentity('1058529940'); // starts with 1 and its check digit is correct
    expect(button.disabled).toBe(false);
    setIdentity('2058529948'); // starts with 2 and its check digit is correct
    expect(button.disabled).toBe(false);
    setIdentity('1058529941'); // right length and start, wrong check digit
    expect(button.disabled).toBe(true);
    setIdentity('64533333333333333333333333333333'); // does not start with 1 or 2: rejected entirely
    expect(identity.value).toBe('');
    expect(button.disabled).toBe(true);
  });

  it('blocks keystrokes that would break the 10-digit rule or the 1/2 start', () => {
    vi.useFakeTimers();
    document.body.innerHTML = readFileSync('public/ref/motor-ar.html', 'utf8');
    new Function('location', script)({ pathname: '/ref/motor-ar.html', origin: window.location.origin });
    const form = document.querySelector('form[data-ref-form]');
    if (!(form instanceof HTMLFormElement)) throw new Error('Motor form missing');
    const identity = form.querySelector('input[placeholder="رقم الهوية / الإقامة"]');
    if (!(identity instanceof HTMLInputElement)) throw new Error('Identity field missing');
    const press = (key: string) => {
      const event = new KeyboardEvent('keydown', { key, cancelable: true, bubbles: true });
      identity.dispatchEvent(event);
      return event.defaultPrevented;
    };
    expect(press('5')).toBe(true); // a first digit other than 1 or 2 cannot be typed
    expect(press('a')).toBe(true); // letters cannot be typed
    expect(press('1')).toBe(false); // 1 is allowed as a first digit
    identity.value = '1058529940';
    expect(press('7')).toBe(true); // an 11th digit cannot be typed
    expect(press('Backspace')).toBe(false); // deleting stays possible
  });

  it('shows an inline error for an invalid identity and hides it once valid', () => {
    vi.useFakeTimers();
    document.body.innerHTML = readFileSync('public/ref/motor-ar.html', 'utf8');
    new Function('location', script)({ pathname: '/ref/motor-ar.html', origin: window.location.origin });
    const form = document.querySelector('form[data-ref-form]');
    if (!(form instanceof HTMLFormElement)) throw new Error('Motor form missing');
    const identity = form.querySelector('input[placeholder="رقم الهوية / الإقامة"]');
    if (!(identity instanceof HTMLInputElement)) throw new Error('Identity field missing');
    const box = form.querySelector<HTMLElement>('.ref-id-error');
    if (!box) throw new Error('Error banner missing');
    expect(box.hidden).toBe(true);
    identity.value = '6546546546';
    identity.dispatchEvent(new Event('input', { bubbles: true }));
    expect(box.hidden).toBe(false);
    expect(box.textContent).toBe('رقم الهوية / الإقامة غير صحيحة');
    expect(identity.classList.contains('ref-id-invalid')).toBe(true);
    identity.value = '1'; // first digits alone never show the error
    identity.dispatchEvent(new Event('input', { bubbles: true }));
    expect(box.hidden).toBe(true);
    identity.dispatchEvent(new Event('blur')); // not even when leaving the field
    expect(box.hidden).toBe(true);
    identity.value = '5'; // a wrong first digit is rejected quietly
    identity.dispatchEvent(new Event('input', { bubbles: true }));
    expect(identity.value).toBe('');
    expect(box.hidden).toBe(true);
    identity.value = '105852994'; // 9 digits: still typing
    identity.dispatchEvent(new Event('input', { bubbles: true }));
    expect(box.hidden).toBe(true);
    identity.value = '1058529941'; // last digit wrong: error appears now
    identity.dispatchEvent(new Event('input', { bubbles: true }));
    expect(box.hidden).toBe(false);
    identity.value = '1058529940';
    identity.dispatchEvent(new Event('input', { bubbles: true }));
    expect(box.hidden).toBe(true);
    expect(identity.classList.contains('ref-id-invalid')).toBe(false);
  });

  it('accepts any 10 digits in the facilities commercial registration field without a check digit', () => {
    vi.useFakeTimers();
    document.body.innerHTML = readFileSync('public/ref/medical-ar.html', 'utf8');
    new Function('location', script)({ pathname: '/ref/medical-ar.html', origin: window.location.origin });
    const form = document.querySelector('form[data-ref-form]');
    if (!(form instanceof HTMLFormElement)) throw new Error('Facilities form missing');
    const button = form.querySelector('button[type=submit]');
    const consent = form.querySelector('input[type=checkbox]');
    const cr = form.querySelector('input[placeholder="السجل التجاري/ الرقم الموحد"]');
    if (!(button instanceof HTMLButtonElement) || !(consent instanceof HTMLInputElement) || !(cr instanceof HTMLInputElement))
      throw new Error('Controls missing');
    const box = form.querySelector<HTMLElement>('.ref-id-error');
    if (!box) throw new Error('Error banner missing');
    expect(box.textContent).toBe('السجل التجاري/ الرقم الموحد غير صحيح');
    const fields = Array.from(form.querySelectorAll<HTMLInputElement>('input[type=number]'));
    fields.forEach((field) => {
      if (field === cr) return;
      field.value = '8099';
      field.dispatchEvent(new Event('input', { bubbles: true }));
    });
    consent.checked = true;
    consent.dispatchEvent(new Event('change', { bubbles: true }));
    cr.value = '54353454353453454354534534543534'; // 32 digits: only the first 10 are kept
    cr.dispatchEvent(new Event('input', { bubbles: true }));
    expect(cr.value).toBe('5435345435');
    expect(button.disabled).toBe(false);
    expect(box.hidden).toBe(true);
    cr.value = '123456789'; // 9 digits
    cr.dispatchEvent(new Event('input', { bubbles: true }));
    expect(button.disabled).toBe(true);
    expect(box.hidden).toBe(true); // no error while the number is still incomplete
    cr.dispatchEvent(new Event('blur'));
    expect(box.hidden).toBe(true); // leaving the field early does not show the error either
    // 7001234567 fails the identity check digit: the CR field must still accept it.
    cr.value = '7001234567';
    cr.dispatchEvent(new Event('input', { bubbles: true }));
    expect(button.disabled).toBe(false);
    expect(box.hidden).toBe(true);
    cr.value = 'abcdefghij'; // letters are never entered
    cr.dispatchEvent(new Event('input', { bubbles: true }));
    expect(cr.value).toBe('');
    expect(button.disabled).toBe(true);
  });

  it('lets a commercial registration start with any digit but never exceeds 10', () => {
    vi.useFakeTimers();
    document.body.innerHTML = readFileSync('public/ref/medical-ar.html', 'utf8');
    new Function('location', script)({ pathname: '/ref/medical-ar.html', origin: window.location.origin });
    const form = document.querySelector('form[data-ref-form]');
    if (!(form instanceof HTMLFormElement)) throw new Error('Facilities form missing');
    const cr = form.querySelector('input[placeholder="السجل التجاري/ الرقم الموحد"]');
    if (!(cr instanceof HTMLInputElement)) throw new Error('Commercial registration field missing');
    const press = (key: string) => {
      const event = new KeyboardEvent('keydown', { key, cancelable: true, bubbles: true });
      cr.dispatchEvent(event);
      return event.defaultPrevented;
    };
    expect(press('7')).toBe(false); // a CR may start with 7
    expect(press('a')).toBe(true); // letters cannot be typed
    cr.value = '7001234567';
    expect(press('7')).toBe(true); // an 11th digit cannot be typed
    expect(press('Backspace')).toBe(false); // deleting stays possible
  });

  it('applies the same digits-only rule to the English facilities field', () => {
    vi.useFakeTimers();
    document.body.innerHTML = readFileSync('public/ref/medical-en.html', 'utf8');
    new Function('location', script)({ pathname: '/ref/medical-en.html', origin: window.location.origin });
    const form = document.querySelector('form[data-ref-form]');
    if (!(form instanceof HTMLFormElement)) throw new Error('English facilities form missing');
    const button = form.querySelector('button[type=submit]');
    const consent = form.querySelector('input[type=checkbox]');
    const cr = form.querySelector('input[placeholder="Company CR or Company Unified Number"]');
    if (!(button instanceof HTMLButtonElement) || !(consent instanceof HTMLInputElement) || !(cr instanceof HTMLInputElement))
      throw new Error('Controls missing');
    const fields = Array.from(form.querySelectorAll<HTMLInputElement>('input[type=number]'));
    fields.forEach((field) => {
      if (field === cr) return;
      field.value = '8099';
      field.dispatchEvent(new Event('input', { bubbles: true }));
    });
    consent.checked = true;
    consent.dispatchEvent(new Event('change', { bubbles: true }));
    cr.value = '7001234567'; // starts with 7 and fails the identity check digit
    cr.dispatchEvent(new Event('input', { bubbles: true }));
    expect(cr.value).toBe('7001234567');
    expect(button.disabled).toBe(false);
    cr.value = '700123456'; // 9 digits
    cr.dispatchEvent(new Event('input', { bubbles: true }));
    expect(button.disabled).toBe(true);
  });

  it('requires the Ministry of Interior check digit on identity fields', () => {
    vi.useFakeTimers();
    document.body.innerHTML = readFileSync('public/ref/motor-ar.html', 'utf8');
    new Function('location', script)({ pathname: '/ref/motor-ar.html', origin: window.location.origin });
    const form = document.querySelector('form[data-ref-form]');
    if (!(form instanceof HTMLFormElement)) throw new Error('Motor form missing');
    const button = form.querySelector('button.bg-newYellow');
    const consent = form.querySelector('input[type=checkbox]');
    const identity = form.querySelector('input[placeholder="رقم الهوية / الإقامة"]');
    if (!(button instanceof HTMLButtonElement) || !(consent instanceof HTMLInputElement) || !(identity instanceof HTMLInputElement))
      throw new Error('Controls missing');
    const box = form.querySelector<HTMLElement>('.ref-id-error');
    if (!box) throw new Error('Error banner missing');
    const fields = Array.from(form.querySelectorAll<HTMLInputElement>('input[type=number]'));
    fields.forEach((field) => {
      if (field === identity) return;
      field.value = '5444444444';
      field.dispatchEvent(new Event('input', { bubbles: true }));
    });
    consent.checked = true;
    consent.dispatchEvent(new Event('change', { bubbles: true }));
    // 1058529940: doubled positions 1,3,5,7,9 (2+1+1+9+8) plus the rest total 40, divisible by 10.
    identity.value = '1058529940';
    identity.dispatchEvent(new Event('input', { bubbles: true }));
    expect(button.disabled).toBe(false);
    expect(box.hidden).toBe(true);
    // Only the last digit changed: the format still passes but the check digit does not.
    identity.value = '1058529941';
    identity.dispatchEvent(new Event('input', { bubbles: true }));
    expect(identity.value).toBe('1058529941');
    expect(button.disabled).toBe(true);
    expect(box.hidden).toBe(false);
  });

  it.each(['travel-ar.html', 'helpers-ar.html'])('applies the same identity rule on %s', (file) => {
    vi.useFakeTimers();
    document.body.innerHTML = readFileSync(`public/ref/${file}`, 'utf8');
    new Function('location', script)({ pathname: `/ref/${file}`, origin: window.location.origin });
    const form = document.querySelector('form[data-ref-form]');
    if (!(form instanceof HTMLFormElement)) throw new Error('Form missing');
    const button = form.querySelector('button.bg-newYellow');
    const consent = form.querySelector('input[type=checkbox]');
    if (!(button instanceof HTMLButtonElement) || !(consent instanceof HTMLInputElement)) throw new Error('Controls missing');
    expect(button.disabled).toBe(true);
    const fields = Array.from(
      form.querySelectorAll<HTMLInputElement>('input[type=number], input[type=text], input:not([type])'),
    );
    const identity = fields.find((field) => /هوية|iqama|national id/i.test(field.placeholder));
    if (!identity) throw new Error('Identity field missing');
    fields.forEach((field) => {
      if (field === identity) return;
      field.value = '5444444444';
      field.dispatchEvent(new Event('input', { bubbles: true }));
    });
    consent.checked = true;
    consent.dispatchEvent(new Event('change', { bubbles: true }));
    identity.value = '5555555555'; // starts with 5
    identity.dispatchEvent(new Event('input', { bubbles: true }));
    expect(button.disabled).toBe(true);
    identity.value = '105852994'; // only 9 digits
    identity.dispatchEvent(new Event('input', { bubbles: true }));
    expect(button.disabled).toBe(true);
    identity.value = '1058529940';
    identity.dispatchEvent(new Event('input', { bubbles: true }));
    expect(button.disabled).toBe(false);
  });
});