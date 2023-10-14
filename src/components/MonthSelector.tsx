import { Card, Select, SelectItem } from '@tremor/react';

interface Props {
  onYearChange: (year: string) => void;
  onMonthChange: (month: string) => void;
}

export const MonthSelector = (props: Props) => {
  return (
    <Card>
      <Select
        className="mt-1"
        onValueChange={(event) => props.onYearChange(event)}
        defaultValue="2023" // TODO: Should be shared with the hook that makes the request
        disabled
      >
        <SelectItem value="2022">2022</SelectItem>
        <SelectItem value="2023">2023</SelectItem>
      </Select>
      <Select
        className="mt-1"
        onValueChange={(event) => props.onMonthChange(event)}
        defaultValue="october" // TODO: Should be shared with the hook that makes the request
      >
        <SelectItem value="august">August</SelectItem>
        <SelectItem value="september">September</SelectItem>
        <SelectItem value="october">October</SelectItem>
      </Select>
    </Card>
  );
};

/**
 * This Select should be populated with all documents available
 * on Firestore.
 */
