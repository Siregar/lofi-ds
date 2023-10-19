import { type VariantProps, cva } from 'class-variance-authority';
import { Text } from '../Text/Text';

const iconStyles = cva('h-4 fill-neutral-400 group-hover:fill-neutral-50', {
  variants: {
    isActive: {
      true: 'fill-neutral-50',
      false: 'fill-neutral-400',
    },
  },
});

export type NavItemProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof iconStyles> & {
    iconSlot?: React.ComponentType<any>;
    isActive?: boolean;
  };

export const NavItem = ({ iconSlot: Icon, isActive = false }: NavItemProps) => {
  return (
    <div className="flex items-center justify-center w-40 h-8 gap-2 px-4 py-2 bg-neutral-600 border-neutral-300 cursor-pointer group">
      {Icon ? <Icon className={iconStyles({ isActive })} /> : null}
      <Text
        textLength={32}
        variant={isActive ? 'light' : 'dark'}
        className="group-hover:bg-neutral-50"
      />
    </div>
  );
};
