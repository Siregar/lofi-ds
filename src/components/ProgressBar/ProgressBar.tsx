import { twMerge } from 'tailwind-merge';

export type ProgressBarProps = {
  className?: string;
  isRounded?: boolean;
};

export const ProgressBar = ({
  className,
  isRounded = false,
}: ProgressBarProps) => (
  <div
    className={twMerge(
      `w-40 ${
        isRounded ? 'rounded-full' : ''
      } ${className} cursor-pointer group h-2 relative overflow-hidden`
    )}
  >
    <div className="h-2 w-full absolute bg-neutral-500"></div>
    <div
      className={`${
        isRounded ? 'rounded-full' : ''
      } h-2 w-2/3 absolute bg-white group-hover:bg-success-500`}
    />
  </div>
);
