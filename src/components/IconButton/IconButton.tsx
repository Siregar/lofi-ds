import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const containerStyles = cva(
  'rounded-2xl flex-col justify-center items-center inline-flex cursor-pointer',
  {
    variants: {
      variant: {
        basic: 'bg-white',
        primary: 'bg-success-500',
        secondary: 'bg-neutral-900',
      },
    },
    defaultVariants: {
      variant: 'basic',
    },
  }
);

const iconStyles = cva('h-4 w-4', {
  variants: {
    variant: {
      basic: 'fill-neutral-900',
      primary: 'fill-neutral-900',
      secondary: 'fill-white',
    },
    size: {
      small: 'm-1',
      medium: 'm-2',
    },
  },
  defaultVariants: {
    size: 'medium',
    variant: 'basic',
  },
});

export type IconButtonProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof containerStyles> &
  VariantProps<typeof iconStyles> & {
    iconSlot: React.ComponentType<any>;
  };

export const IconButton = ({
  size,
  iconSlot: Icon,
  variant,
  className,
}: IconButtonProps) => (
  <div className={twMerge(containerStyles({ variant, className }))}>
    <Icon className={iconStyles({ size, variant })} />
  </div>
);
