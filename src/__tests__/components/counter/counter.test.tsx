import { render } from '@/__tests__/test-utils';
import Counter from '@/app/counter/page';
import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Counter', () => {
  it('render', () => {
    render(<Counter />);
    expect(screen.getByText(/0/)).toBeInTheDocument();
  });

  it('increase', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    const addBtn = screen.getByRole('button', { name: /Add/ });
    await user.click(addBtn);
    expect(screen.getByText(/1/)).toBeInTheDocument();
  });

  it('decrease', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    const minusBtn = screen.getByRole('button', { name: /Plus/ });
    await user.click(minusBtn);
    expect(screen.getByText(/-1/)).toBeInTheDocument();
  });
});
