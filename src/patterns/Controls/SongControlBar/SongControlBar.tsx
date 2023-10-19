import { SongTitle } from '../../../components/SongTitle/SongTitle';
import { VolumeControl } from '../../../components/VolumeControl/VolumeControl';
import { PlaybackControl } from '../../../components/PlaybackControl/PlaybackControl';

export const SongControlBar = () => (
  <div className="bg-neutral-600 border-t-2 border-t-neutral-700 p-2 grid grid-cols-3 items-center">
    <SongTitle hasLike textLength={20} />
    <PlaybackControl />
    <VolumeControl className="justify-end" />
  </div>
);
