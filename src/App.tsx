import { Button } from '@tremor/react';
import { useAppDispatch } from './store/store-hooks';
import { addExpense } from './store/slices/expensesSlice';
import './App.css';
import { Expense } from './models/expense';
import { ExpensesList } from './components/ExpensesList';

function App() {
  const dispatch = useAppDispatch();

  const clickAddExpense = () => {
    const newExpense: Expense = {
      id: 0,
      title: 'Cafe',
      amount: 10.0,
      category: 'Groceries',
    };

    dispatch(addExpense(newExpense));
  };

  return (
    <>
      <Button size="xs" onClick={clickAddExpense}>
        Add Expense
      </Button>
      <ExpensesList />
    </>
  );
}

export default App;
