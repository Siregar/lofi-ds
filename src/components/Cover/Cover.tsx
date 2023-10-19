import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { Image } from '../Icon/Image';

const containerStyles = cva('flex justify-center bg-neutral-300 items-center', {
  variants: {
    size: {
      tiny: 'w-6 h-6 p-1',
      small: 'w-10 h-10',
      medium: 'w-32 h-20',
      large: 'w-40 h-40',
    },
  },
  defaultVariants: {
    size: 'small',
  },
});

export type CoverProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof containerStyles>;

export const Cover = ({ size, className }: CoverProps) => (
  <div className={twMerge(containerStyles({ size, className }))}>
    <Image className="fill-neutral-500 stroke-neutral-500" />
  </div>
);
