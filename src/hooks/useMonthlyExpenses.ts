import { DocumentReference, arrayRemove, arrayUnion, getDoc, updateDoc } from 'firebase/firestore';
import { Expense } from '../models/expense';
import { useEffect, useState } from 'react';

export const useMonthlyExpenses = (monthReference: DocumentReference) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    const getExpenses = async () => {
      const data =
        ((await getDoc(monthReference)).data() as {
          expenses: Expense[];
        }) ?? [];
      setExpenses(data.expenses as Expense[]);
    };

    getExpenses();
  }, [monthReference]);

  const addExpenseToDB = async (expense: Expense) => {
    await updateDoc(monthReference, { expenses: arrayUnion(expense) });
  };

  const deleteExpenseFromDB = async (expense: Expense) => {
    await updateDoc(monthReference, { expenses: arrayRemove(expense) });
  };

  return {
    expensesFromDB: expenses,
    addExpenseToDB,
    deleteExpenseFromDB,
  };
};
