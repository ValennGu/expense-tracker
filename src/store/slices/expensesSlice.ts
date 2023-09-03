import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Expense } from '../../models/expense';

type ExpensesState = {
  expenses: Expense[];
};

const initialState: ExpensesState = {
  expenses: [],
};

export const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.expenses = [...state.expenses, action.payload];
    },
  },
});

export const { addExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
