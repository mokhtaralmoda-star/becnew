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
        ['1555555555', '5444444444', '7426'].forEach((value, index) => {
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
    setIdentity('155555555'); // only 9 digits
    expect(button.disabled).toBe(true);
    setIdentity('15555555555'); // 11 digits
    expect(button.disabled).toBe(true);
    setIdentity('1555555555'); // starts with 1
    expect(button.disabled).toBe(false);
    setIdentity('2555555555'); // starts with 2
    expect(button.disabled).toBe(false);
  });
});