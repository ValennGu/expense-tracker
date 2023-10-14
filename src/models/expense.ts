export type Expense = {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
};

export enum ExpenseCategory {
  Mortgage = 'Mortgage',
  Home = 'Home',
  Groceries = 'Groceries',
  Gym = 'Gym',
  Gas = 'Gas',
  Services = 'Services',
  Extra = 'Extra',
}
