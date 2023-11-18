import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { Expense } from '../models/expense';
import { fetchFBExpenses, addFBExpense, removeFBExpense, fetchFBMonths } from './fetchExpenses';
import { getTotalAmount } from '../utils/getAmountsByCategory';

export interface ExpensesContextType {
  expenses: Expense[];
  months: string[];
  income: number;
  outcome: number;
  addExpense: (e: Expense) => void;
  removeExpense: (e: Expense) => void;
  changeYear: (y: string) => void;
  changeMonth: (m: string) => void;
}

const initialValue: ExpensesContextType = {
  expenses: [],
  months: [],
  income: 0,
  outcome: 0,
  addExpense: () => {},
  removeExpense: () => {},
  changeYear: () => {},
  changeMonth: () => {},
};

const useFetchExpenses = (year: string, month: string) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [income, setIncome] = useState<number>(0);
  const [months, setMonths] = useState<string[]>([]);

  useEffect(() => {
    fetchFBMonths(year).then(setMonths);
    fetchFBExpenses(year, month).then((data) => {
      setExpenses(data.expenses);
      setIncome(Number(data.income));
    });
  }, [year, month]);

  return { expenses, months, income, setExpenses, setMonths };
};

export const ExpensesContext = createContext<ExpensesContextType>(initialValue);

export const ExpensesContextProvider = ({ children }: PropsWithChildren) => {
  const [year, setYear] = useState('2023');
  const [month, setMonth] = useState('october');

  const { expenses, months, income, setExpenses } = useFetchExpenses(year, month);

  const outcome = getTotalAmount(expenses);

  const addExpense = (expense: Expense) => {
    addFBExpense(year, month, expense);
    setExpenses([...expenses, expense]);
  };

  const removeExpense = (expense: Expense) => {
    removeFBExpense(year, month, expense);
    setExpenses(expenses.filter((e) => e !== expense));
  };

  const changeYear = (newYear: string) => setYear(newYear);
  const changeMonth = (newMonth: string) => setMonth(newMonth);

  const contextValue: ExpensesContextType = {
    ...initialValue,
    expenses,
    months,
    income,
    outcome,
    addExpense,
    removeExpense,
    changeYear,
    changeMonth,
  };
  return <ExpensesContext.Provider value={contextValue}>{children}</ExpensesContext.Provider>;
};
