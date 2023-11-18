import { Card, Flex, Metric, ProgressBar, Text } from '@tremor/react';
import { getPercentage } from '../utils/getPercentage';
import { useExpenses } from '../hooks/useExpenses';

export const ExpensesTotal = () => {
  const { income, outcome } = useExpenses();
  const percentageValue = getPercentage(income, outcome);
  const progressbarColor = percentageValue < 79 ? 'blue' : percentageValue < 85 ? 'orange' : 'red';

  return (
    <Card>
      <Flex alignItems="end">
        <Metric>{outcome.toFixed(2)} €</Metric>
        <Text>
          {percentageValue.toFixed(2)}% &bull; {income.toFixed(2)} €
        </Text>
      </Flex>
      <ProgressBar value={percentageValue} color={progressbarColor} className="mt-3" />
      <Flex className="mt-3">
        <Text>Savings</Text>
        <Text>
          {(100 - percentageValue).toFixed(2)}% &bull; {(income - outcome).toFixed(2)} €
        </Text>
      </Flex>
    </Card>
  );
};
