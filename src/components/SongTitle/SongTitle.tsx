import { Text } from '../Text/Text';
import type { TextLength } from '../../types';
import { Heart } from '../Icon/Heart';

export type SongTitleProps = TextLength & {
  hasLike?: boolean;
};

export const SongTitle = ({ textLength, hasLike }: SongTitleProps) => (
  <div className="inline-flex flex-row gap-x-2">
    <div className="grid gap-y-1">
      <Text variant="light" textLength={textLength} />
      <Text variant="dark" textLength={(textLength as number) * 1.66} />
    </div>
    {hasLike && <Heart className="fill-neutral-400 hover:fill-white h-5 w-4" />}
  </div>
);
