import { format } from 'date-fns';

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
import { useNewExpense } from '../hooks/useNewExpense';
import { Expense, ExpenseCategory } from '../models/expense';

interface Props {
  onNewExpense: (expense: Expense) => void;
}

export const NewExpenseForm = (props: Props) => {
  const { expense, changeHandler, resetValues } = useNewExpense();

  const onClickAddExpense = () => {
    props.onNewExpense(expense);
    resetValues();
  };
  return (
    <Card>
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
        onChange={(event) => changeHandler({ amount: Number(event.target.value) })}
      />
      <Select
        value={expense.category}
        className="mt-1"
        defaultValue={expense.category}
        onValueChange={(event) => changeHandler({ category: event })}
      >
        {Object.values(ExpenseCategory).map((category) => (
          <SelectItem key={category} value={category}>
            {category}
          </SelectItem>
        ))}
      </Select>
      <DatePicker
        value={new Date(expense.date)}
        className="mt-1"
        onValueChange={(event) =>
          changeHandler({
            date: format(new Date(event!.toString()), 'MM/dd/yyyy'),
          })
        }
      />
      <Button className="mt-3" style={{ width: '100%' }} onClick={onClickAddExpense}>
        Add Expense
      </Button>
    </Card>
  );
};
