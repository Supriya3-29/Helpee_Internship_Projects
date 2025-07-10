import type { ApexOptions } from 'apexcharts'
import React, { useState } from 'react'
import Chart from 'react-apexcharts';

interface SeriesData {
    name: string;
    data: number[];
  }

const LineChart: React.FC = () => {
    const[chartOptions, _setChartOPtions] = useState<ApexOptions>({
        chart: {id: 'basic-line'},
        xaxis: { categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]},
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
                type='line'
                width="500"/>
            </div>
          </div>
        </div>
  )
}

export default LineChart
