import { useDrag } from "react-dnd";
// import { preview } from "vite";


const Task = ({setTasks,Tasks,task}) => {
    const [collected ,drag, dragPreview] = useDrag(() => ({
        type:"tasks",
        item: { id:task?.id},
        collect:(monitor)=>({
isDragging:!!monitor.isDragging()
        })
      }))
      console.log(collected?.isDragging)
    return (
        <div ref={drag}>
            <div className="card bg-primary text-primary-content ">
  <div className="card-body">
    <h2 className="card-title">{task?.task?.title}</h2>
    <p>{task?.task?.description}</p>
    <p>{task?.date}</p>
    <div className="card-actions justify-end">
      <button className="btn">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Task;