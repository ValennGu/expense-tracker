import './App.css';
import { ExpensesList } from './components/ExpensesList';
import { NewExpenseForm } from './components/NewExpenseForm';

function App() {
  return (
    <>
      <NewExpenseForm />
      <ExpensesList />
    </>
  );
}

export default App;
