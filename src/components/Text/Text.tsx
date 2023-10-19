import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import type { TextLength } from '../../types';

const containerStyles = cva('rounded-full', {
  variants: {
    variant: {
      light: 'bg-neutral-50',
      dark: 'bg-neutral-400',
    },
    size: {
      tiny: 'h-1',
      small: 'h-2',
      medium: 'h-4',
      large: 'h-6',
    },
  },
  defaultVariants: {
    size: 'small',
    variant: 'light',
  },
});

export type TextProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof containerStyles> &
  TextLength;

export const Text = ({ size, variant, textLength, className }: TextProps) => (
  <div
    className={twMerge(containerStyles({ size, variant, className }))}
    style={{ width: (textLength as number) * 4 }}
  />
);
