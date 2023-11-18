import { ChartSquareBarIcon, CollectionIcon } from '@heroicons/react/outline';
import { useState } from 'react';

enum MenuItem {
  Expenses = 'expenses',
  Savings = 'savings',
}

export interface SidebarItemOption {
  id: MenuItem;
  title: string;
  icon: typeof CollectionIcon | typeof ChartSquareBarIcon;
}

export const useSidebar = () => {
  const [selected, setSelected] = useState('expenses');

  const items: SidebarItemOption[] = [
    { id: MenuItem.Expenses, title: 'Expenses', icon: CollectionIcon },
    { id: MenuItem.Savings, title: 'Savings Chart', icon: ChartSquareBarIcon },
  ];

  return {
    items,
    selected,
    setSelected,
  };
};
