import { Mic, SendHorizonal } from "lucide-react";
import React from "react";

const MessageBox = () => {
  return (
    <div className="w-full p-12 z-20 mb-20">
      <div className="w-full flex flex-row justify-between rounded-full bg-white p-15">
        <p className="text-gray-600 text-6xl font-sans tracking-tightf">Write your message</p>

        <div className="flex fles-row gap-8">
          <Mic size={64} className="text-gray-500"/>
          <SendHorizonal size={64} className="text-blue-700" fill="#1447e6" />
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
