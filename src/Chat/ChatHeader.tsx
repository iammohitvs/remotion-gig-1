import { ArrowLeft, Upload, Volume2 } from "lucide-react";
import React from "react";
import { Img, staticFile } from "remotion";

const ChatHeader = () => {
  return (
    <div className="py-3 bg-gray-100 w-full pt-20 px-10 flex flex-row justify-between items-center">
      <div className="flex flex-row gap-10 items-center">
        <ArrowLeft size={60} />
        <Img
          src={staticFile("user-avatar.png")}
          className="w-40 h-40 rounded-full"
        />
        <div className="flex flex-col gap-5 items-start">
          <p className="font-bold text-5xl">Nate</p>
          <div className="flex flex-row gap-3 items-center">
            <div className="w-5 h-5 rounded-full bg-green-500" />
            <p className="text-4xl font-semibold text-green-500">Online</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-10">
        <Volume2 size={60} />
        <Upload size={60} />
      </div>
    </div>
  );
};

export default ChatHeader;
