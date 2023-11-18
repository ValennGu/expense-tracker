import { useContext } from 'react';
import { ExpensesContext } from '../providers/ExpensesContextProvider';
import { Expense } from '../models/expense';

export const useExpenses = () => {
  const ctx = useContext(ExpensesContext);

  const addExpense = (expense: Expense) => ctx.addExpense(expense);
  const removeExpense = (expense: Expense) => ctx.removeExpense(expense);
  const changeYear = (newYear: string) => ctx.changeYear(newYear);
  const changeMonth = (newMonth: string) => ctx.changeMonth(newMonth);

  return {
    expenses: ctx.expenses,
    months: ctx.months,
    income: ctx.income,
    outcome: ctx.outcome,
    addExpense,
    removeExpense,
    changeYear,
    changeMonth,
  };
};
