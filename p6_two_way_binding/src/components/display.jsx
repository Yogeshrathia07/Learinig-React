import React from 'react'

const Display = ({ notes }) => {

  return (
    <div className="flex flex-wrap gap-4 p-4">

      {notes.map((note, index) => (
        <div key={index} className='flex rounded-lg h-50 w-40 bg-gray-200 flex-col p-4'>

            <p className='font-bold'>{note.heading}</p>

            <p className='font-light text-sm overflow-y-scroll break-all hide-scrollbar'>
                {note.description}
            </p>

        </div>
      ))}

    </div>
  )
}

export default Display