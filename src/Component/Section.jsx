
import { useDrop } from "react-dnd";
import CategoryHeaders from "./CategoryHeaders";
import Task from "./Task";


// eslint-disable-next-line react/prop-types
const Section = ({done1,inProgress1,toDo1,setTasks,Tasks,category}) => {
    let text
    let bg
    let taskTo
   
    const [collectedProps, drop] = useDrop(() => ({
        accept:"task",
       canDrop:(item)=>{
            console.log(item)
            addItem(item?.id)

        },
        drop:(item,monitor)=>{
            console.log(item)
            console.log(monitor)
            addItem(item?.id)

        },

        collect:(monitor)=>({
            isOver:!!monitor.isOver()
                    })
      }))
      const addItem=(id)=>{
      console.log('first',id)
      }
      console.log(collectedProps)
    if( category==='To Do'){
        text=category
        bg='bg-red-200'
        taskTo=toDo1
    }
    if( category==='In Progress'){
        text=category
        bg='bg-red-200'
        taskTo=inProgress1
    }
    if( category==='Done'){
        text=category
        bg='bg-red-200'
        taskTo=done1
    }
    return (
        <div ref={drop} >
            <CategoryHeaders ref={drop} text={text} bg={bg} l={taskTo?.length}></CategoryHeaders>
            {
                taskTo?.map((task)=><Task key={task?.id}
                 task={task} 
                 Tasks={Tasks}
                 setTasks={setTasks}
                 ></Task>)
            }
            
        </div>
    );
};

export default Section;