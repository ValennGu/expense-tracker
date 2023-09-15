import { db } from '../database/firestore';
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import { Expense } from '../models/expense';
import { useEffect, useState } from 'react';

const monthlyExpensesRef = collection(db, 'monthlyExpenses');
const monthRef = doc(monthlyExpensesRef, 'september');

export const useMonthlyExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    const getExpenses = async () => {
      const data = (await getDoc(monthRef)).data() ?? [];
      setExpenses(data as Expense[]);
    };

    getExpenses();
  }, []);

  const addExpenseToDB = async (expense: Expense) => {
    await updateDoc(monthRef, { expenses: arrayUnion(expense) });
  };

  return {
    expenses,
    addExpenseToDB,
  };
};
