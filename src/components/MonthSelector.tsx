import { Card, Select, SelectItem } from '@tremor/react';
import { useExpenses } from '../hooks/useExpenses';

export const MonthSelector = () => {
  const { months, changeYear, changeMonth } = useExpenses();

  return (
    <Card>
      <Select
        className="mt-1"
        onValueChange={(event) => {
          changeYear(event);
          changeMonth('october');
        }}
        defaultValue="2023"
        disabled
      >
        <SelectItem value="2023">2023</SelectItem>
      </Select>
      <Select className="mt-1" onValueChange={(event) => changeMonth(event)} defaultValue="october">
        {months.map((month) => {
          return (
            <SelectItem value={month} key={month}>
              {month[0].toLocaleUpperCase() + month.slice(1)}
            </SelectItem>
          );
        })}
      </Select>
    </Card>
  );
};
