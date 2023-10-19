import { twMerge } from 'tailwind-merge';
import { Cover } from '../../../components/Cover/Cover';
import { CaretRight } from '../../../components/Icon/CaretRight';
import { Diamond } from '../../../components/Icon/Diamond';
import { ProgressBar } from '../../../components/ProgressBar/ProgressBar';
import { SongTitle } from '../../../components/SongTitle/SongTitle';

export type MiniSongControlBarProps = {
  className?: string;
};

export const MiniSongControlBar = ({ className }: MiniSongControlBarProps) => (
  <>
    <div
      className={twMerge(
        `flex bg-neutral-600 justify-between items-center p-2 ${className}`
      )}
    >
      <div className="flex items-center gap-2">
        <Cover size="tiny" />
        <SongTitle textLength={20} />
      </div>
      <div className="flex">
        <Diamond className="fill-neutral-400" />
        <CaretRight className="fill-neutral-50" />
      </div>
    </div>
    <ProgressBar className="w-full" />
  </>
);
