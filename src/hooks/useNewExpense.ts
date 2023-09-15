import { useState } from 'react';
import { Expense } from '../models/expense';
import { format } from 'date-fns';
import uuid from 'react-uuid';

const defaultExpense: Expense = {
  id: '',
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
      id: uuid(),
    }));
  };

  return {
    expense,
    resetValues,
    changeHandler,
  };
};
