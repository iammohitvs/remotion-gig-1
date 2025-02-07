import React from "react";

const Heart = () => {
  return (
    <div className="absolute -bottom-52 z-10">
      <div className="flex flex-row -mb-72">
        <div className="bg-purple-100 w-[800px] h-[800px] rounded-full"></div>
        <div className="bg-purple-100 w-[800px] h-[800px] rounded-full -ml-32"></div>
      </div>
      <div className="bg-purple-100 w-full h-[500px]"></div>
    </div>
  );
};

export default Heart;
