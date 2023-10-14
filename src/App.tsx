import './App.css';
import { ExpensesList } from './components/ExpensesList';
import { NewExpenseForm } from './components/NewExpenseForm';
import { Expense } from './models/expense';
import { useMonthlyExpenses } from './hooks/useMonthlyExpenses';
import { useAppDispatch, useAppSelector } from './store/store-hooks';
import { useEffect, useState } from 'react';
import { addMultipleExpenses, addExpense, deleteExpense } from './store/slices/expensesSlice';
import { Col, Flex, Grid } from '@tremor/react';
import { ExpensesSummary } from './components/ExpensesSummary';

import { db } from './database/firestore';
import { CollectionReference, DocumentReference, collection, doc } from 'firebase/firestore';
import { MonthSelector } from './components/MonthSelector';
import { ExpensesTotal } from './components/ExpensesTotal';

const initialYearRef = collection(db, '2023');
const initialMonthRef = doc(initialYearRef, 'october');

function App() {
  const [yearRef, setYearRef] = useState<CollectionReference>(initialYearRef);
  const [monthRef, setMonthRef] = useState<DocumentReference>(initialMonthRef);

  const dispatch = useAppDispatch();

  const expenses = useAppSelector((state) => state.expenses.expenses);
  const monthlyIncome = useAppSelector((state) => state.expenses.monthlyIncome);
  const monthlyOutcome = useAppSelector((state) => state.expenses.monthlyOutcome);
  const amountByCategory = useAppSelector((state) => state.expenses.amountByCategory);

  const { expensesFromDB, addExpenseToDB, deleteExpenseFromDB } = useMonthlyExpenses(monthRef);

  const onMonthChangeHandler = (month: string) => {
    const newMonthRef = doc(yearRef, month);
    setMonthRef(newMonthRef);
  };

  const onYearChangeHandler = (year: string) => {
    const newYearRef = collection(db, year);
    const newMonthRef = doc(newYearRef, 'october');
    setYearRef(newYearRef);
    setMonthRef(newMonthRef);
  };

  useEffect(() => {
    dispatch(addMultipleExpenses(expensesFromDB));
  }, [expensesFromDB, dispatch]);

  const newExpenseHandler = (newExpense: Expense) => {
    dispatch(addExpense(newExpense));
    addExpenseToDB(newExpense);
  };

  const deleteExpenseHandler = (expense: Expense) => {
    dispatch(deleteExpense(expense));
    deleteExpenseFromDB(expense);
  };

  return (
    <Grid numItems={5} className="gap-2">
      <Col numColSpan={1}>
        <Flex className="mb-2">
          <NewExpenseForm onNewExpense={newExpenseHandler} />
        </Flex>
      </Col>
      <Col numColSpan={3}>
        <ExpensesList expenses={expenses} onDeleteExpense={deleteExpenseHandler} />
      </Col>
      <Col numColSpan={1}>
        <Flex className="mb-2">
          <MonthSelector onYearChange={onYearChangeHandler} onMonthChange={onMonthChangeHandler} />
        </Flex>
        <Flex className="mb-2">
          <ExpensesTotal income={monthlyIncome} outcome={monthlyOutcome} />
        </Flex>
        <Flex className="mb-2">
          <ExpensesSummary amountByCategory={amountByCategory} />
        </Flex>
      </Col>
    </Grid>
  );
}

export default App;
