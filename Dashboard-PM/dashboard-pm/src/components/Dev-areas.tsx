// Dev-areas.tsx

import { IoIosArrowForward } from "react-icons/io";

export const DevAreas = () => {
  const areas = [
    { name: "Sport Skills", percent: 71 },
    { name: "Blogging", percent: 92 },
    { name: "Leadership", percent: 33 },
    { name: "Meditation", percent: 56 },
    { name: "Philosophy", percent: 79 },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col">
        <h1 className="font-normal text-xl">Developed areas</h1>
        <span className="text-sm font-thin text-[#7e7f81]">
          Most common areas of interests
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {areas.map((area, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center gap-5"
          >
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-between">
                <span className="text-sm font-normal">{area.name}</span>
                <span className="text-xs font-semibold text-[#7e7f81]">
                  {area.percent}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: `${area.percent}%` }}
                ></div>
              </div>
            </div>
            <IoIosArrowForward className="text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
};
