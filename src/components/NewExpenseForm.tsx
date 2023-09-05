import {
  Button,
  Card,
  DatePicker,
  NumberInput,
  Select,
  SelectItem,
  TextInput,
  Title,
} from '@tremor/react';
import { CurrencyDollarIcon } from '@heroicons/react/solid';
import { useAppDispatch } from '../store/store-hooks';
import { Expense } from '../models/expense';
import { addExpense } from '../store/slices/expensesSlice';
import { useState } from 'react';

const defaultExpense: Expense = {
  id: 0,
  amount: 0,
  title: '',
  category: 'Home',
  date: new Date(),
};

export const NewExpenseForm = () => {
  const [expense, setExpense] = useState<Expense>(defaultExpense);
  const dispatch = useAppDispatch();

  const changeHandler = (partialExpense: Partial<Expense>) => {
    setExpense((prev) => ({
      ...prev,
      ...partialExpense,
    }));
  };

  // TODO: adding an expense should set the form to it's initial value.
  const onClickAddExpense = () => {
    dispatch(addExpense(expense));
    setExpense(defaultExpense);
  };

  return (
    <Card className="max-w-xs">
      <Title>New Expense</Title>
      <TextInput
        value={expense.title}
        className="mt-3"
        placeholder="Expense name ..."
        onChange={(event) => changeHandler({ title: event.target.value })}
      />
      <NumberInput
        value={expense.amount}
        className="mt-1"
        icon={CurrencyDollarIcon}
        placeholder="Amount..."
        min={0}
        onChange={(event) =>
          changeHandler({ amount: Number(event.target.value) })
        }
      />
      <Select
        value={expense.category}
        className="mt-1"
        defaultValue={expense.category}
        onValueChange={(event) => changeHandler({ category: event })}
      >
        <SelectItem value="Home">Home</SelectItem>
        <SelectItem value="Groceries">Groceries</SelectItem>
      </Select>
      <DatePicker
        value={expense.date}
        className="mt-1"
        onValueChange={(event) => changeHandler({ date: event })}
      />
      <Button
        className="mt-3"
        style={{ width: '100%' }}
        onClick={onClickAddExpense}
      >
        Add Expense
      </Button>
    </Card>
  );
};
