"use client";
import { Button } from "@repo/ui/button";
import { TextInput } from "@repo/ui/textInput"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
const [roomID,setroomID]=useState<string>("")
  const router=useRouter()
  const handleJoinRoom = () => {

    if (roomID) {
      router.push(`/chat/${roomID}`);
    } else {
      alert("Please enter a Room ID");
    }
  };
  return (
<div style={{display:"flex",flexDirection:"column",gap:"10px",alignItems:"center",justifyContent:"center",height:"100vh"}}>
<TextInput placeholder={"Enter the RoomID"} value={roomID} onChange={(e)=>setroomID(e.target.value)}/>
  <Button  className={"bg-blue-500 text-white px-4 py-2 rounded"} onClick={handleJoinRoom} >Join Room</Button>
</div>
  );
}
