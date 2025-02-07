import { BatteryFull, Wifi } from "lucide-react";
import React from "react";

const TopBar = () => {
  return (
    <div className="bg-grey-100 py-3 px-10 flex flex-row justify-between absolute inset-0 w-full pb-10">
      <p className="text-4xl font-bold">16:05</p>

      <div className="flex flew-row gap-5">
        <Wifi size={50} color="black" />
        <BatteryFull size={50} color="black" />
      </div>
    </div>
  );
};

export default TopBar;
