import { Expense, ExpenseCategory } from '../models/expense';

export function getAmountsByCategory(
  expenses: Expense[],
): Record<ExpenseCategory, number> {
  return {
    [ExpenseCategory.Mortgage]: parseFloat(
      getTotalAmount(
        expenses.filter((exp) => exp.category === ExpenseCategory.Mortgage),
      ).toFixed(2),
    ),
    [ExpenseCategory.Home]: parseFloat(
      getTotalAmount(
        expenses.filter((exp) => exp.category === ExpenseCategory.Home),
      ).toFixed(2),
    ),
    [ExpenseCategory.Groceries]: parseFloat(
      getTotalAmount(
        expenses.filter((exp) => exp.category === ExpenseCategory.Groceries),
      ).toFixed(2),
    ),
    [ExpenseCategory.Gym]: parseFloat(
      getTotalAmount(
        expenses.filter((exp) => exp.category === ExpenseCategory.Gym),
      ).toFixed(2),
    ),
    [ExpenseCategory.Gas]: parseFloat(
      getTotalAmount(
        expenses.filter((exp) => exp.category === ExpenseCategory.Gas),
      ).toFixed(2),
    ),
    [ExpenseCategory.Services]: parseFloat(
      getTotalAmount(
        expenses.filter((exp) => exp.category === ExpenseCategory.Services),
      ).toFixed(2),
    ),
    [ExpenseCategory.Extra]: parseFloat(
      getTotalAmount(
        expenses.filter((exp) => exp.category === ExpenseCategory.Extra),
      ).toFixed(2),
    ),
  };
}

export function getTotalAmount(expenses: Expense[]) {
  return expenses.reduce(
    (sum: number, expense: Expense) => sum + expense.amount,
    0,
  );
}
