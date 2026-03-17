import { describe, it, expect, vi } from 'vitest';
import { render } from '../test-utils';
import RootLayout from '@/app/layout';

vi.mock('next/font/google', () => ({
  Geist: () => ({ variable: '--font-geist-sans' }),
  Geist_Mono: () => ({ variable: '--font-geist-mono' }),
}));

describe('RootLayout', () => {
  it('sets lang="en" on html element', () => {
    render(
      <RootLayout>
        <span />
      </RootLayout>,
    );
    expect(document.documentElement.lang).toBe('en');
  });
});
