// Chart.tsx
import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const data = [
  {
    id: 'Maximum of focus',
    color: 'hsl(348, 100%, 61%)',
    data: [
      { x: 'Aug', y: 30 },
      { x: 'Sep', y: 60 },
      { x: 'Oct', y: 20 },
      { x: 'Nov', y: 45 },
    ],
  },
  {
    id: 'Min or lack of focus',
    color: 'hsl(240, 100%, 70%)',
    data: [
      { x: 'Aug', y: 25 },
      { x: 'Sep', y: 40 },
      { x: 'Oct', y: 30 },
      { x: 'Nov', y: 35 },
    ],
  },
];

export const Chart: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">Focusing</h1>
          <span className="text-sm font-thin text-[#7e7f81]">
            Productivity analytics
          </span>
        </div>
        <div>
          <select className="border p-2 rounded-2xl text-sm text-[#7e7f81]">
            <option>Range: Last Month</option>
            <option>Range: This Month</option>
            <option>Range: Last 3 Months</option>
          </select>
        </div>
      </div>
      <div className="relative border border-gray-300 p-4 rounded-lg shadow-lg bg-white h-[320px]">
        <ResponsiveLine
          data={data}
          margin={{ top: 20, right: 20, bottom: 40, left: 20 }}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', min: 0, max: 80, stacked: false }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 0,
            tickPadding: 12,
            tickRotation: 0,
            legend: '',
            legendOffset: 32,
            legendPosition: 'middle'
          }}
          axisLeft={null}
          enableGridX={false}
          enableGridY={false}
          colors={{ datum: 'color' }}
          pointSize={8}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          enableArea={false}
          useMesh={true}
          legends={[]}
        />

        {/* Week 8 Label */}
        <div className="absolute left-[38%] top-[38%] flex flex-col items-center">
          <div className="bg-white px-3 py-1 rounded-full shadow text-xs font-medium">
            Week 8
          </div>
          <span className="text-xs text-gray-400">Unbalanced</span>
        </div>

        <div className="text-right text-sm mt-2 font-light text-[#7e7f81]">
          41% Avg. Concen.
        </div>
      </div>
    </div>
  );
};