// RoomHandler.tsx
'use client'
import React from 'react';
import { useState } from 'react';
import MyCollaborativeCanvas from "@/app/MyCollaborativeCanvas";
import ExitIcon from '@/app/exitIcon/page';
import logo from '../logo/logo.png';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { Button } from '@/Components/ui/button';
export default function RoomHandler() {
  const [showForm, setShowForm] = useState(true);
  const [roomId, setRoomId] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  const handleButtonClick = () => {
    setShowForm(true);

  };

  const BackHandleClick = () => {
    setShowForm(true);
    setRoomId(null);
    setInputValue('');

  }

  const HomeHandleClick = () => {
    // setShowForm(true);
    setRoomId(null);
    setInputValue('');
    router.push('/');
  }

  const handleJoinRoom = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const roomId = (e.target as any).elements.roomId.value;
    setRoomId(roomId);
    setShowForm(false);
  };

  const handleCreateRoom = () => {
    const roomId = Math.random().toString(36).substring(7);
    setRoomId(roomId);
    setShowForm(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex items-center justify-center h-screen  bg-[#3b3c45] pt-16">
      <div className="mr-60 opacity-40">
        <Image width={512} height={512} src={logo} alt="Logo" />
      </div>
      <div className="relative flex flex-col items-start justify-center p-20 bg-[#6e6f75] border-0 border-gray-300 rounded-lg shadow-lg space-y-6 space-x-2">

        <button onClick={HomeHandleClick} className="absolute top-5 left-5 p-2 text-[#ffff00] rounded-md hover:bg-[#3b3c45] transition-colors duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>

        </button>
        {showForm && (<form onSubmit={handleJoinRoom}>
          <input
            className="w-full p-2 mb-4 border-0 bg-[#3b3c45] text-white rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Enter Room ID....."
            name="roomId"
            value={inputValue}
            onChange={handleInputChange}
            required
          />
          <button type="submit"
            className="w-full relative flex text-white items-center justify-center p-2 bg-[#3b3c45] hover:bg-[#2b2c35] rounded-lg border-2 border-[#ffff00] font-mono transition-colors duration-200">
            Join Room
          </button>
          <div className="relative flex items-center justify-center w-full my-4">

            <span className="px-2  text-white">or</span>
          </div>
          <button type='button' onClick={handleCreateRoom}
            className="w-full relative flex text-white items-center justify-center p-2  hover:bg-[#2b2c35] rounded-lg border-2 border-white font-mono transition-colors duration-200">
            Create New Room
          </button>
        </form>
        )}
        {roomId &&
          <div className='flex flex-col items-start justify-start h-screen space-y-0'>
            <button style={{ position: 'fixed', top: '160px', left: '10px', zIndex: 9999 }}
              onClick={BackHandleClick}
              className="z-10 bg-transparent border-none">
              <ExitIcon />
            </button>

            <MyCollaborativeCanvas roomId={roomId} />
          </div>
        }
      </div>
    </div>

  );
}