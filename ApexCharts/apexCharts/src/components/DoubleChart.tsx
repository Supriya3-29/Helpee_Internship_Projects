import { useState } from 'react';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const DonutChart = () => {
  const [options, _setOptions] = useState<ApexOptions>({
    labels: ['A', 'B', 'C', 'D', 'E'],
    legend: {
      position: 'bottom',
    },
  });

  const [series, _setSeries] = useState<number[]>([44, 55, 41, 17, 15]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">Donut Chart</h2>
        <Chart options={options} series={series} type="donut" width="380" />
      </div>
    </div>
  );
};

export default DonutChart;
