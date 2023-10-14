import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Expense, ExpenseCategory } from '../../models/expense';
import { getAmountsByCategory, getTotalAmount } from '../../utils/getAmountsByCategory';

type ExpensesState = {
  expenses: Expense[];
  monthlyIncome: number;
  monthlyOutcome: number;
  amountByCategory: Record<ExpenseCategory, number>;
};

const initialState: ExpensesState = {
  expenses: [],
  monthlyIncome: 2500.0,
  monthlyOutcome: 0.0,
  amountByCategory: {
    [ExpenseCategory.Mortgage]: 0,
    [ExpenseCategory.Home]: 0,
    [ExpenseCategory.Groceries]: 0,
    [ExpenseCategory.Gym]: 0,
    [ExpenseCategory.Gas]: 0,
    [ExpenseCategory.Services]: 0,
    [ExpenseCategory.Extra]: 0,
  },
};

export const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addMultipleExpenses: (state, action: PayloadAction<Expense[]>) => {
      state.expenses = [...action.payload];
      state.amountByCategory = getAmountsByCategory([...state.expenses]);
      state.monthlyOutcome = getTotalAmount([...action.payload]);
    },
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.expenses = [...state.expenses, action.payload];
      state.amountByCategory = getAmountsByCategory([...state.expenses]);
      state.monthlyOutcome = getTotalAmount([...state.expenses]);
    },
    deleteExpense: (state, action: PayloadAction<Expense>) => {
      state.expenses = [...state.expenses.filter((expense) => expense.id !== action.payload.id)];
      state.amountByCategory = getAmountsByCategory([...state.expenses]);
      state.monthlyOutcome = getTotalAmount([...state.expenses]);
    },
  },
});

export const { addMultipleExpenses, addExpense, deleteExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
