import { DatePickerValue } from '@tremor/react';

export type Expense = {
  id: number;
  title: string;
  amount: number;
  category: string;
  date: DatePickerValue;
};
