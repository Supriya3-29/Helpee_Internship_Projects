import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const UpdateChart: React.FC = () => {
  const [options] = useState<ApexOptions>({
    labels: ['A', 'B', 'C', 'D', 'E'],
    legend: { position: 'bottom' },
  });

  const [series, setSeries] = useState<number[]>([44, 55, 41, 17, 15]);

  // Function to update chart data with random values
  const updateChartData = () => {
    const newSeries = series.map(() => Math.floor(Math.random() * 100) + 10); // Random values between 10 and 100
    setSeries(newSeries);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Donut Chart</h2>
        <Chart options={options} series={series} type="donut" width="380" />
      </div>

      <button
        onClick={updateChartData}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Update Chart Data
      </button>
    </div>
  );
};

export default UpdateChart;
