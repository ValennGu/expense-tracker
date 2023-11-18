import './App.css';
import { ExpensesList } from './components/ExpensesList';
import { NewExpenseForm } from './components/NewExpenseForm';
import { Col, Flex, Grid } from '@tremor/react';
import { ExpensesSummary } from './components/ExpensesSummary';

import { MonthSelector } from './components/MonthSelector';
import { ExpensesTotal } from './components/ExpensesTotal';
import { ExpensesContextProvider } from './providers/ExpensesContextProvider';

function App() {
  return (
    <ExpensesContextProvider>
      <Grid numItems={7} className="gap-2">
        <Col numColSpan={2}>
          <Flex className="mb-2">
            <NewExpenseForm />
          </Flex>
          <Flex className="mb-2">
            <ExpensesTotal />
          </Flex>
          <Flex className="mb-2">
            <ExpensesSummary />
          </Flex>
        </Col>
        <Col numColSpan={4}>
          <ExpensesList />
        </Col>
        <Col numColSpan={1}>
          <MonthSelector />
        </Col>
      </Grid>
    </ExpensesContextProvider>
  );
}

export default App;
