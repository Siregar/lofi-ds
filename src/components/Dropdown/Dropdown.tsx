import { CaretDown } from '../Icon/CaretDown';
import { Text } from '../Text/Text';
import type { TextLength } from '../../types';

export type DropdownProps = TextLength;

export const Dropdown = ({ textLength = 20 }: DropdownProps) => (
  <div className="inline-flex items-center justify-center p-2">
    <Text size="small" textLength={textLength} className="bg-neutral-50" />
    <CaretDown className="h-2 fill-neutral-50" />
  </div>
);
