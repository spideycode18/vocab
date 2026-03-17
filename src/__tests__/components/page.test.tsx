import { describe, it, expect } from 'vitest';
import { render } from '../test-utils';
import { screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home page', () => {
  it('render', () => {
    render(<Home />);
    expect(screen.getByText(/Documentation/)).toBeInTheDocument();
  });
});
