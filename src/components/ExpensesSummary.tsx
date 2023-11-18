import { BarList, Card } from '@tremor/react';
import { ExpensesCategoryAnalyticsData } from '../models/expenses-category-analytics-data';
import { ExpenseCategory } from '../models/expense';
import { useExpenses } from '../hooks/useExpenses';
import { getAmountsByCategory } from '../utils/getAmountsByCategory';

export const ExpensesSummary = () => {
  const { expenses } = useExpenses();

  const amountsByCategory = getAmountsByCategory(expenses);

  const data: ExpensesCategoryAnalyticsData[] = [
    {
      name: ExpenseCategory.Mortgage,
      value: amountsByCategory.Mortgage,
      color: 'amber',
    },
    {
      name: ExpenseCategory.Home,
      value: amountsByCategory.Home,
      color: 'blue',
    },
    {
      name: ExpenseCategory.Groceries,
      value: amountsByCategory.Groceries,
      color: 'emerald',
    },
    {
      name: ExpenseCategory.Gas,
      value: amountsByCategory.Gas,
      color: 'teal',
    },
    {
      name: ExpenseCategory.Gym,
      value: amountsByCategory.Gym,
      color: 'fuchsia',
    },
    {
      name: ExpenseCategory.Services,
      value: amountsByCategory.Services,
      color: 'orange',
    },
    {
      name: ExpenseCategory.Extra,
      value: amountsByCategory.Extra,
      color: 'red',
    },
  ];

  return (
    <Card>
      <BarList data={data} className="mt-2" />
    </Card>
  );
};
