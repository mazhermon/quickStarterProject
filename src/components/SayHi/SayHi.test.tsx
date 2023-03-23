import { render, screen } from '@testing-library/react';
import { SayHi } from '.';

import { axe } from 'jest-axe';

describe('Hello', () => {
  it('should render the Hello component', () => {
    render(<SayHi />);
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Maz Hermon tech test starter',
      }),
    ).toBeInTheDocument();
  });

  it('should have no obvious a11y fails', async () => {
    const { container } = render(<SayHi />);
    const axeResult = await axe(container);
    expect(axeResult).toHaveNoViolations();
  });
});
