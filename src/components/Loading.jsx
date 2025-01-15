import React from 'react';
import Robot from "../assets/images/robot 3.png";


function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <img 
          src={Robot} 
          alt="Loading Robot"
          className="w-32 h-32 animate-pulse transform animate-bounce opacity-75 transition-all duration-1000"
          style={{
            animation: 'pulse-scale 2s infinite ease-in-out',
          }}
        />
        <style>
          {`
            @keyframes pulse-scale {
              0% {
                transform: scale(0.95);
                opacity: 0.5;
              }
              50% {
                transform: scale(1.05);
                opacity: 0.8;
              }
              100% {
                transform: scale(0.95);
                opacity: 0.5;
              }
            }
          `}
        </style>
      </div>
    </div>
  )
}

export default Loading