import { Divider, Text } from '@tremor/react';
import { SidebarItem } from './SidebarItem';
import { useSidebar } from './useSidebar';

export const Sidebar = () => {
  const { items, selected, setSelected } = useSidebar();

  return (
    <>
      {items.map((item) => (
        <SidebarItem
          item={item}
          onClick={() => setSelected(item.id)}
          isSelected={selected === item.id}
        ></SidebarItem>
      ))}
      <Divider />
      <Text color="teal">No rights reserved for this shit</Text>
    </>
  );
};
