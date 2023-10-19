import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { Text } from '../Text/Text';
import type { TextLength } from '../../types';

const containerStyles = cva(
  'px-2 bg-neutral-500 rounded-2xl flex-col justify-center items-center inline-flex dark:bg-danger-500 cursor-pointer',
  {
    variants: {
      size: {
        small: 'h-4',
        medium: 'h-8',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
);

export type ButtonProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof containerStyles> &
  TextLength;

export const Button = ({ size, className, textLength = 30 }: ButtonProps) => (
  <div className={twMerge(containerStyles({ size, className }))}>
    <Text size="tiny" textLength={textLength} />
  </div>
);
