import React from "react";
import { Img, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

const Messages = () => {
  const { fps, durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();

  const messageOneOpacity =
    frame < 30 ? frame / durationInFrames : 1;

  const messageTwoOpacity =
    frame < 60 && frame > 30
      ? frame / durationInFrames
      : 1;

  return (
    <div className="flex-1 w-full pt-20 flex flex-col gap-10">
      <div
        className="w-[80%] mr-auto"
        style={{
          opacity: messageOneOpacity,
        }}
      >
        <Img src={staticFile("msg-1.png")} className="w-full" />
      </div>

      <div
        className="w-[80%] ml-auto mr-7"
        style={{
          opacity: frame > 30 ? messageTwoOpacity : 0,
        }}
      >
        <Img src={staticFile("msg-2.png")} className="w-full" />
      </div>
    </div>
  );
};

export default Messages;
