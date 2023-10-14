import { Card, Flex, Metric, ProgressBar, Text } from '@tremor/react';
import { getPercentage } from '../utils/getPercentage';

interface Props {
  income: number;
  outcome: number;
}

export const ExpensesTotal = (props: Props) => {
  const percentageValue = getPercentage(props.income, props.outcome);
  const progressbarColor = percentageValue < 79 ? 'blue' : percentageValue < 85 ? 'orange' : 'red';

  return (
    <Card>
      <Flex alignItems="end">
        <Metric>{props.outcome.toFixed(2)} €</Metric>
        <Text>
          {percentageValue.toFixed(2)}% &bull; {props.income.toFixed(2)} €
        </Text>
      </Flex>
      <ProgressBar value={percentageValue} color={progressbarColor} className="mt-3" />
      <Flex className="mt-3">
        <Text>Savings</Text>
        <Text>
          {(100 - percentageValue).toFixed(2)}% &bull; {(props.income - props.outcome).toFixed(2)} €
        </Text>
      </Flex>
    </Card>
  );
};
