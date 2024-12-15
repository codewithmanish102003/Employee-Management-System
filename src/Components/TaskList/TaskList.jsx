import AcceptTask from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"


const TaskList = ({ data }) => {
  console.log(data)
  return (
    <div id="taskList" className="flex items-center justify-start gap-5 flex-nowrap w-full h-[55%] py-5 mt-10 rounded-lg overflow-x-auto">
      {data.tasks.map((e, idx) => {
          if (e.active){
            return <AcceptTask key={idx} data={e}/>
        }
        if(e.newTask){
          return <NewTask key={idx} data={e}/>
        }
        if(e.completed){
          return <CompleteTask key={idx} data={e}/>
        }
        if(e.failed){
          return <FailedTask key={idx} data={e}/>
        }
 } )}
    </div>
  )
}

export default TaskList
