import React, { useState } from "react";
import Frorm from "./components/frorm";
import Display from "./components/display";

const App = () => {

  const [notes, setNotes] = useState([]);

  const addNote = (heading, description) => {
    setNotes([...notes, { heading, description }]);
  };

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center">

      <div className="w-1/3 h-screen bg-gray-400 flex items-center justify-center">
        <Frorm addNote={addNote} />
      </div>

      <div className="w-2/3 h-screen bg-gray-500 p-4">
        <Display notes={notes} />
      </div>

    </div>
  );
};

export default App;