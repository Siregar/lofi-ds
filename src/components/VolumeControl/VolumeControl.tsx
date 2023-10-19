import { twMerge } from 'tailwind-merge';
import { Diamond } from '../Icon/Diamond';
import { ProgressBar } from '../ProgressBar/ProgressBar';

export type VolumeControl = {
  className?: string;
};

export const VolumeControl = ({ className }: VolumeControl) => (
  <div className={twMerge(`flex gap-1 items-center ${className}`)}>
    <Diamond className="cursor-pointer fill-neutral-400 hover:fill-white w-3 h-3" />
    <Diamond className="cursor-pointer fill-neutral-400 hover:fill-white w-3 h-3" />
    <Diamond className="cursor-pointer fill-neutral-400 hover:fill-white w-3 h-3" />
    <Diamond className="cursor-pointer fill-neutral-400 hover:fill-white w-3 h-3" />
    <ProgressBar className="w-20" isRounded />
    <Diamond className="cursor-pointer fill-neutral-400 hover:fill-white w-3 h-3" />
  </div>
);
