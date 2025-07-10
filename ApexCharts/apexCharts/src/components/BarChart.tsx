import type { ApexOptions } from 'apexcharts'
import React, { useState } from 'react'
import Chart from 'react-apexcharts';

interface SeriesData {
    name: string;
    data: number[];
  }

const BarChart:React.FC = () => {
    const[chartOptions, _setChartOptions] = useState<ApexOptions>({
        chart: { id: 'basic-bar' },
        xaxis: { categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999] },
        // yaxis: {
        //     title: { text: 'Sales (in units)' },
        //     min: 0
        // },
        // dataLabels: { enabled: true },
        // colors: ['#FF5733'], // Custom bar color
        // grid: { show: true },
        // tooltip: { enabled: true },
        // title: { text: 'Annual Sales', align: 'center' }
      })
    
      const[chartSeries, _setChartSeries] = useState<SeriesData[]>([
        {
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        }
      ])
      return (
        <div className="p-5 bg-gray-100">
            <div className="flex justify-center">
                <div className="border border-gray-300 p-4 rounded-lg shadow-lg">
                    <Chart 
                    options={chartOptions}
                    series={chartSeries}
                    type='bar'
                    width="500"/>
                </div>
            </div>
        </div>
      )
    }

export default BarChart
