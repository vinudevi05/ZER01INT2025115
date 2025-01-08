
import React from 'react'
import useColor from './coustomhook';

export default function Home() {
  const [color, changeColor, resetColor] = useColor();  // Using the custom hook for color toggle

  return (
    <>
      <div 
        className="w-[600px] h-[600px] flex justify-center items-center border-2 border-gray-300"
        style={{ backgroundColor: color }}  
      >
       
      </div>

      <div className="flex justify-center mt-4 space-x-4">
      
        <button 
         
          onClick={changeColor}
        >
          Change 
        </button>

       
        <button 
         
          onClick={resetColor}
        >
          Reset 
        </button>
      </div>
    </>
  )
}
