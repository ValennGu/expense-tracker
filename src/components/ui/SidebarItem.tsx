import { Flex, Icon, Text } from '@tremor/react';
import { PropsWithChildren } from 'react';
import { SidebarItemOption } from './useSidebar';

interface Props {
  item: SidebarItemOption;
  isSelected: boolean;
  onClick: (title: string) => void;
}

export const SidebarItem = (props: PropsWithChildren & Props) => {
  return (
    <Flex
      className="mb-2 ml-2"
      justifyContent="start"
      style={{ cursor: 'pointer' }}
      onClick={() => props.onClick(props.item.title)}
    >
      <Icon size="md" icon={props.item.icon} color={props.isSelected ? 'blue' : 'gray'} />
      <Text color={props.isSelected ? 'blue' : 'gray'} className="ml-2">
        {props.item.title}
      </Text>
    </Flex>
  );
};
