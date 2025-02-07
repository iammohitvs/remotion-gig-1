import React from "react";
import { Img, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

const Messages = () => {
  const { fps, durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();

  const messageOneOpacity = frame < 30 ? frame / durationInFrames : 1;

  const messageTwoOpacity =
    frame < 60 && frame > 30 ? frame / durationInFrames : 1;

  return (
    <div className="flex-1 w-full pt-20 flex flex-col gap-10">
      <div
        className="w-[80%] mr-auto ml-10"
        style={{
          opacity: messageOneOpacity,
        }}
      >
        <div className="flex flex-row gap-10 items-end justify-start">
          <Img
            src={staticFile("user-avatar.png")}
            className="w-30 h-30 rounded-full"
          />
          <p className="text-5xl bg-gray-200 p-14 rounded-4xl rounded-bl-none">
            This is some sample text. This text can be edited!
          </p>
        </div>
      </div>

      <div
        className="w-[80%] ml-auto mr-10"
        style={{
          opacity: frame > 30 ? messageTwoOpacity : 0,
        }}
      >
        <p className="text-5xl bg-blue-600 text-white p-14 rounded-4xl rounded-bl-none">
          This is some sample text. This text can be edited!
        </p>
      </div>
    </div>
  );
};

export default Messages;
