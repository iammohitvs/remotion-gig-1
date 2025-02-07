import React from 'react'
import ChatHeader from './ChatHeader'
import MessageBox from './MessageBox'
import Heart from './Heart'
import TopBar from './TopBar'
import BottomBar from './BottomBar'
import Messages from './Messages'

const Chat = () => {
  return (
    <div className='bg-white w-full h-full flex flex-col justify-between items-center'>
      <TopBar />

      <ChatHeader />

      <Messages />

      <MessageBox />

      <Heart />

      <BottomBar />
    </div>
  )
}

export default Chat