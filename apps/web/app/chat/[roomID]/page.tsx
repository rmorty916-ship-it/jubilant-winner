import { Button } from '@repo/ui/button'
import { TextInput } from '@repo/ui/textInput'
import React from 'react'

const ChatRoom = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"10px",alignItems:"center",justifyContent:"space-between",height:"95vh"}} 

    >
        <div>Chat Room</div>
        <div style={{width:"100%",display:"flex",flexDirection:"row",gap:"10px",alignItems:"center",justifyContent:"center"}}>
        <TextInput/>
        <Button>Send</Button>
        </div>
    </div>
  )
}

export default ChatRoom