import { BarList, Card } from '@tremor/react';

import { ExpensesCategoryAnalyticsData } from '../models/expenses-category-analytics-data';
import { ExpenseCategory } from '../models/expense';

interface Props {
  amountByCategory: Record<ExpenseCategory, number>;
}

export const ExpensesSummary = (props: Props) => {
  const data: ExpensesCategoryAnalyticsData[] = [
    {
      name: ExpenseCategory.Mortgage,
      value: props.amountByCategory.Mortgage,
      color: 'amber',
    },
    {
      name: ExpenseCategory.Home,
      value: props.amountByCategory.Home,
      color: 'blue',
    },
    {
      name: ExpenseCategory.Groceries,
      value: props.amountByCategory.Groceries,
      color: 'emerald',
    },
    {
      name: ExpenseCategory.Gas,
      value: props.amountByCategory.Gas,
      color: 'teal',
    },
    {
      name: ExpenseCategory.Gym,
      value: props.amountByCategory.Gym,
      color: 'fuchsia',
    },
    {
      name: ExpenseCategory.Services,
      value: props.amountByCategory.Services,
      color: 'orange',
    },
    {
      name: ExpenseCategory.Extra,
      value: props.amountByCategory.Extra,
      color: 'red',
    },
  ];

  return (
    <Card>
      <BarList data={data} className="mt-2" />
    </Card>
  );
};
