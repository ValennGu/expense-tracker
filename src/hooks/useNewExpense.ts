import { useState } from 'react';
import { Expense } from '../models/expense';
import { format } from 'date-fns';

const defaultExpense: Expense = {
  id: 0,
  amount: 0,
  title: '',
  category: 'Home',
  date: format(new Date(), 'MM/dd/yyyy'),
};

export const useNewExpense = () => {
  const [expense, setExpense] = useState<Expense>(defaultExpense);
  const resetValues = () => setExpense(defaultExpense);

  const changeHandler = (partialExpense: Partial<Expense>) => {
    setExpense((prev) => ({
      ...prev,
      ...partialExpense,
    }));
  };

  return {
    expense,
    resetValues,
    changeHandler,
  };
};
