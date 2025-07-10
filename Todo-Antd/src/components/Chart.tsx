import ReactApexChart from 'react-apexcharts';
import { Card, Empty } from 'antd';
import { statusArr } from './AddTodo';
import useTodoStore, { type Task } from '../store/todoStore';
import type { ApexOptions } from 'apexcharts';

export const Chart = () => {
  const tasks = useTodoStore((state) => state.tasks) as Task[];

  const chartLabels = statusArr.slice(1);
  const chartSeries = chartLabels.map((_, index) =>
    tasks.filter(todo => todo.status === index + 1).length
  );

  const chartOptions: ApexOptions = {
    chart: { type: 'pie' },
    labels: chartLabels,
    legend: { position: 'bottom' },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: { width: 300 },
        legend: { position: 'bottom' }
      }
    }]
  };

  return (
    <Card
      title="Task Status Chart"
      style={{ width: '90%', maxWidth: 500, marginTop: 10 }}
    >
      {tasks.length > 0 ? (
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type="pie"
          width="100%"
          height={320}
        />
      ) : (
        <Empty description="No tasks to display" />
      )}
    </Card>
  );
};
