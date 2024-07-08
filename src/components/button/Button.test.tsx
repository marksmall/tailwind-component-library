import { describe, expect, it, vi } from 'vitest';

import { render, screen, userEvent } from '@/utils/renderers';

import { Button, ButtonProps } from './Button';

describe('Button Component', () => {
  const defaultProps: ButtonProps = {
    variant: 'primary',
    size: 'medium',
    rounded: 'none',
    bgColor: '',
    onClick: vi.fn(),
    disabled: false,
    children: 'Click Me',
  };

  const renderButton = (props: Partial<ButtonProps> = {}) =>
    render(<Button {...defaultProps} {...props} />);

  it('should render the button with correct text', () => {
    renderButton();

    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('should render children correctly', () => {
    renderButton({ children: <span>Test Child</span> });

    expect(screen.getByRole('button', { name: /test child/i })).toBeInTheDocument();
  });

  it.each([
    {
      type: 'primary' as const,
      value: 'bg-primary-500 text-white hover:bg-primary-300 active:bg-primary-700',
    },
    {
      type: 'secondary' as const,
      value: 'bg-secondary-500 text-white hover:bg-secondary-300 active:bg-secondary-700',
    },
  ])('should apply the correct styles for the $type variant', ({ type, value }) => {
    renderButton({ variant: type });

    expect(screen.getByRole('button', { name: /click me/i })).toHaveClass(value);
  });

  it.each([
    {
      type: 'large' as const,
      value: 'px-6 py-4 text-base',
    },
    {
      type: 'medium' as const,
      value: 'px-5 py-3 text-sm',
    },
    {
      type: 'small' as const,
      value: 'px-4 py-2 text-xs',
    },
  ])('should apply the correct styles for the $type size', ({ type, value }) => {
    renderButton({ size: type });

    expect(screen.getByRole('button', { name: /click me/i })).toHaveClass(value);
  });

  it('should apply rounded styles when rounded prop is true', () => {
    renderButton({ rounded: 'full' });

    expect(screen.getByRole('button', { name: /click me/i })).toHaveClass('rounded-full');
  });

  it('should apply disabled styles and prevents click event', async () => {
    const user = userEvent.setup();

    const onClick = vi.fn();

    renderButton({ disabled: true, onClick });

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveClass('opacity-50 cursor-not-allowed');
    expect(button).toBeDisabled();

    await user.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('should call onClick handler when clicked', async () => {
    const user = userEvent.setup();

    const onClick = vi.fn();

    renderButton({ onClick });

    await user.click(screen.getByRole('button', { name: /click me/i }));
    expect(onClick).toHaveBeenCalled();
  });

  it('should apply custom background color', () => {
    renderButton({ bgColor: 'red' });

    expect(screen.getByRole('button', { name: /click me/i })).toHaveStyle({
      'background-color': 'rgb(255, 0, 0)',
    });
  });
});
