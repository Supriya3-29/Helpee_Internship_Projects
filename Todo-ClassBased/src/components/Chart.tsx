import { Component } from 'react'
import useTodoStore from '../store/todoStore';
import { statusArr } from './AddTodo';
import type { ApexOptions } from 'apexcharts';
import { Card, Empty } from 'antd';
import ReactApexChart from 'react-apexcharts';

export default class Chart extends Component {
    tasks = useTodoStore.getState().tasks;

    render() {
        const chartLabels = statusArr.slice(1);
        const chartSeries = chartLabels.map((_, index) =>
            this.tasks.filter(todo => todo.status === index + 1).length
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
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Card
                title="Task Status Chart"
                style={{ width: '90%', maxWidth: 500, marginTop: 10}}
            >
                {this.tasks.length > 0 ? (
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
            </div>
        )
    }
}
