import { data } from 'autoprefixer'
import React from 'react'

const NewTask = () => {
  return (
      <div className="h-full flex-shrink-0 w-[300px] bg-red-400 rounded-xl p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-2 text-sm rounded-lg">{data.category}</h3>
          <h4 className="text-sm font-semibold">{data.taskData}</h4>
        </div>
        <h1 className="mt-5 font-semibold text-2xl">{data.taskTitle}</h1>
        <p className="text-sm mt-2">{data.taskDescription}</p>
        <div className='flex justify-between mt-4'>
          <button className='w-full bg-red-500 py-1 px-2 text-sm rounded-lg'>
            Accept Task
          </button>
        </div>
      </div>
  )
}

export default NewTask
