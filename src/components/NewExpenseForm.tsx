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
import { useAppDispatch } from '../store/store-hooks';
import { addExpense } from '../store/slices/expensesSlice';
import { useNewExpense } from '../hooks/useNewExpense';
import { useSaveToFirestore } from '../hooks/useSaveToFirestore';

export const NewExpenseForm = () => {
  const { expense, changeHandler, resetValues } = useNewExpense();
  const { saveExpense } = useSaveToFirestore();
  const dispatch = useAppDispatch();

  const onClickAddExpense = () => {
    dispatch(addExpense(expense));
    saveExpense(expense);
    resetValues();
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
        <SelectItem value="Mortgage">Mortgage</SelectItem>
        <SelectItem value="Home">Home</SelectItem>
        <SelectItem value="Groceries">Groceries</SelectItem>
        <SelectItem value="Gym">Gym</SelectItem>
        <SelectItem value="Gas">Gas</SelectItem>
        <SelectItem value="Services">Services</SelectItem>
        <SelectItem value="Extra">Extra</SelectItem>
      </Select>
      <DatePicker
        value={new Date()}
        className="mt-1"
        onValueChange={(event) =>
          changeHandler({
            date: format(new Date(event!.toString()), 'MM/dd/yyyy'),
          })
        }
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
