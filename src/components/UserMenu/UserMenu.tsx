import { Dropdown } from '../Dropdown/Dropdown';
import { User } from '../Icon/User';

export const UserMenu = () => (
  <div className="inline-flex bg-neutral-900 hover:bg-neutral-700 rounded-full cursor-pointer">
    <User className="p-0.5" />
    <Dropdown textLength={20} />
  </div>
);
