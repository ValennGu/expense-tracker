import {
  Badge,
  Button,
  Card,
  Flex,
  Table,
  TableBody,
  TableHead,
  TableHeaderCell,
  TableCell,
  TableRow,
  Text,
} from '@tremor/react';
import { Expense, ExpenseCategory } from '../models/expense';
import { XIcon } from '@heroicons/react/outline';
import { getBadgeColor } from '../utils/getBadgeColor';
import { useExpenses } from '../hooks/useExpenses';

export const ExpensesList = () => {
  const { expenses, removeExpense } = useExpenses();

  const onClickDelete = (expense: Expense) => removeExpense(expense);

  const ordExpenses = [...expenses].sort(
    (a, b) => new Date(a.date).getDate() - new Date(b.date).getDate(),
  );

  return (
    <Card style={{ overflow: 'scroll', maxHeight: '99vh' }}>
      <Table>
        <TableHead>
          <TableHeaderCell>Title</TableHeaderCell>
          <TableHeaderCell>
            <Flex justifyContent="end">Date</Flex>
          </TableHeaderCell>
          <TableHeaderCell>Category</TableHeaderCell>
          <TableHeaderCell>
            <Flex justifyContent="end">Amount</Flex>
          </TableHeaderCell>
          <TableHeaderCell>
            <Flex justifyContent="end">Actions</Flex>
          </TableHeaderCell>
        </TableHead>
        <TableBody>
          {ordExpenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell>
                <Flex justifyContent="start" alignItems="center">
                  {expense.title}
                </Flex>
              </TableCell>
              <TableCell>
                <Flex justifyContent="end">
                  <Text>{expense.date}</Text>
                </Flex>
              </TableCell>
              <TableCell>
                <Badge
                  color={getBadgeColor(
                    ExpenseCategory[expense.category as keyof typeof ExpenseCategory],
                  )}
                >
                  {expense.category}
                </Badge>
              </TableCell>
              <TableCell>
                <Flex justifyContent="end">
                  <Text>{expense.amount.toFixed(2)} €</Text>
                </Flex>
              </TableCell>
              <TableCell>
                <Flex justifyContent="end">
                  <Button
                    size="xs"
                    variant="light"
                    icon={XIcon}
                    tooltip="Delete"
                    onClick={() => onClickDelete(expense)}
                  />
                </Flex>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
