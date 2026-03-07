
import { useState } from 'react';

export default function App() {
  const [first, setfirst] = useState(0);
  const increase_number = () => {
    setfirst(first + 1);
  }
  const decrease_number = () => {
    setfirst(first - 1);
  }
  const reset_number = () => {
    setfirst(0);
  }

  return (

    <div className="bg-gray-800 text-white p-10 h-screen text-4xl flex flex-col items-center justify-center">
      <div className="h-100 w-100 bg-gray-700 rounded-3xl flex items-center justify-center text-9xl">
        {first}
      </div>
      <div className=" flex gap-4 mt-10">
        <div className="text-3xl h-16 w-32 bg-gray-500 rounded-lg flex items-center justify-center cursor-pointer p-4 hover:bg-gray-600" onClick={increase_number}>
          increase
        </div>
        <div className="text-3xl h-16 w-32 bg-gray-500 rounded-lg flex items-center justify-center cursor-pointer p-4 hover:bg-gray-600" onClick={decrease_number}>
          decrease
        </div>
        <div className="text-3xl h-16 w-32 bg-gray-500 rounded-lg flex items-center justify-center cursor-pointer p-4 hover:bg-gray-600" onClick={reset_number}>
          reset
        </div>
      </div>
    </div>
  );
}
