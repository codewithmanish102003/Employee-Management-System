import React from 'react'

const TasklistNumber = ({data}) => {
  console.log(data);
  
  // Calculate task counts
  const newCount = data.taskCounts.newTask;
  const completedCount = data.taskCounts.completed;
  const acceptedCount = data.taskCounts.active; // Assuming newTask represents accepted tasks
  const failedCount = data.taskCounts.failed;

  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='h-40 w-[45%] bg-red-400 rounded-xl py-6 px-9 items-center justify-between'>
        <h2 className='text-2xl font-semibold'>{newCount}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='h-40 w-[45%] bg-yellow-300 rounded-xl py-6 px-9'>
        <h2 className='text-2xl font-semibold'>{completedCount}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className='h-40 w-[45%] bg-green-400 rounded-xl py-6 px-9'>
        <h2 className='text-2xl font-semibold'>{acceptedCount}</h2>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>
      <div className='h-40 w-[45%] bg-blue-400 rounded-xl py-6 px-9'>
        <h2 className='text-2xl font-semibold'>{failedCount}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TasklistNumber