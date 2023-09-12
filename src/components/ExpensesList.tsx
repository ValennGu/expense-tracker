import { Badge, Card, List, ListItem, Title } from '@tremor/react';
import { useAppSelector } from '../store/store-hooks';
import { useDocument } from '../hooks/useDocument';

export const ExpensesList = () => {
  const expenses = useAppSelector((state) => state.expenenses.expenses);
  const { data } = useDocument('september');

  console.log(data);

  return (
    <Card className="max-w-xs">
      <Title>Expenses</Title>
      <List>
        {expenses.map((expense) => (
          <ListItem key={expense.id}>
            <span>
              {expense.title} <Badge color="green">{expense.category}</Badge>
            </span>
            <span>{expense.amount.toFixed(2)} €</span>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};
