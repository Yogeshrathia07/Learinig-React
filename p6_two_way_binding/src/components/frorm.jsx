import React, { useState } from 'react'

const Frorm = ({ addNote }) => {

  const [heading, setHeading] = useState("")
  const [description, setDescription] = useState("")

  const submitHandler = (e) => {
      e.preventDefault()

      addNote(heading, description)

      setHeading("")
      setDescription("")
  }

  return (
    <form onSubmit={submitHandler} className='flex flex-col h-[450px] w-[350px] bg-white rounded-lg m-4 p-4'>

        <input
          type="text"
          placeholder="Heading"
          value={heading}
          onChange={(e)=>setHeading(e.target.value)}
          className="w-full h-10 p-2 mb-4 border border-gray-300 rounded-md"
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
          className="w-full h-10 p-2 mb-4 border border-gray-300 rounded-md"
        />

        <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Submit
        </button>

    </form>
  )
}

export default Frorm