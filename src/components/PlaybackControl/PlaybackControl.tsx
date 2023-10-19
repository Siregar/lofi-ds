import { CaretRight } from '../Icon/CaretRight';
import { Diamond } from '../Icon/Diamond';
import { ProgressBar } from '../ProgressBar/ProgressBar';

export const PlaybackControl = () => (
  <div className="inline-flex flex-col items-center gap-1">
    <div className="flex gap-1 items-center">
      <Diamond className="cursor-pointer fill-success-500 w-3 h-3" />
      <Diamond className="cursor-pointer fill-neutral-400 hover:fill-white w-3 h-3" />
      <CaretRight className="cursor-pointer fill-white w-4 h-4" />
      <Diamond className="cursor-pointer fill-neutral-400 hover:fill-white w-3 h-3" />
      <Diamond className="cursor-pointer fill-success-500 w-3 h-3" />
    </div>
    <ProgressBar className="w-40" isRounded />
  </div>
);
