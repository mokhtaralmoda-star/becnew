import { readFileSync } from 'node:fs';
import { afterEach, describe, expect, it } from 'vitest';

const script = readFileSync('public/ref/ref.js', 'utf8');
const chatSource = script.slice(script.indexOf('  var chatBox = null;'), script.indexOf('  function text(el)'));

afterEach(() => { document.body.innerHTML = ''; });

describe('Support chat send readiness', () => {
  for (const lang of ['ar', 'en']) {
    it(`enables sending only for a non-empty message (${lang})`, () => {
      new Function('lang', `${chatSource}\nopenChat();`)(lang);
      const input = document.querySelector<HTMLInputElement>('#ref-chat input');
      const button = document.querySelector<HTMLButtonElement>('#ref-chat .rc-send');
      if (!input || !button) throw new Error('Chat controls missing');
      expect(button.disabled).toBe(true);
      input.value = lang === 'ar' ? 'مرحبا' : 'Hello';
      input.dispatchEvent(new Event('input'));
      expect(button.disabled).toBe(false);
      input.value = '   ';
      input.dispatchEvent(new Event('input'));
      expect(button.disabled).toBe(true);
      input.value = '';
      input.dispatchEvent(new Event('input'));
      expect(button.disabled).toBe(true);
    });
  }
});