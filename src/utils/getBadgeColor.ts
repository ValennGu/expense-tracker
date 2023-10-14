import { Color } from '@tremor/react';
import { ExpenseCategory } from '../models/expense';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const exhaustiveMatchGuard = (_: never): never => {
  throw new Error('Should not have reached here');
};

export function getBadgeColor(category: ExpenseCategory): Color {
  switch (category) {
    case ExpenseCategory.Mortgage:
      return 'amber';
    case ExpenseCategory.Home:
      return 'blue';
    case ExpenseCategory.Groceries:
      return 'emerald';
    case ExpenseCategory.Gas:
      return 'teal';
    case ExpenseCategory.Gym:
      return 'fuchsia';
    case ExpenseCategory.Services:
      return 'orange';
    case ExpenseCategory.Extra:
      return 'red';
    default:
      // "category" always throws an error when not all the cases of the enum are instantiated.
      return exhaustiveMatchGuard(category);
  }
}
