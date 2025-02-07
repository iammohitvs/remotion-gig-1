import React from 'react'
import { Img, staticFile } from "remotion";

const ChatHeader = () => {
  return (
    <div className='py-3 bg-gray-100 w-full pt-10'>
      <Img src={staticFile("header-image.png")} className='w-full' />
    </div>
  );
}

export default ChatHeader