import { Select } from "antd";
import { useState } from "react";
import useAxios from "../Hooks/useAxios";
import toast from "react-hot-toast";
import useAuth from "../Hooks/Auth";


const AddJobTAsk = () => {
    const {user}=useAuth()
    const userAxios=useAxios()
    const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (value) => {
    console.log('Selected:', value);
    setSelectedValue(value);
  
  }
    const handleTaskData= async e=>{
        e.preventDefault()
        const title=e.target.title.value 
        const description=e.target.description.value
        const category=selectedValue
        const data={
            title,description,category,email:user?.email
        }
await userAxios.post('task',{task:data}).then(res=>{
    console.log(res?.data?.insertedId)
if(res?.data?.insertedId)
{
    toast.success("task added successful")}
}).catch(err=>{
    toast.error(err.message)
})
        
    }
      return (
        <div>
            <div className="hero  min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Add Task</h1>
      
    </div>
    <div className="card bg-base-100   shrink-0 shadow-2xl">
      <form onSubmit={handleTaskData} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" maxLength={50} name="title" placeholder="Title" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
         <textarea name="description" className="border border-black border-opacity-50 rounded-md"  maxLength={200} id="" cols="5" rows=""></textarea>
         <label htmlFor="" className="my-2">Cetagory </label>
         <Select
    showSearch
    onChange={handleChange}
     name='category'
    placeholder="Select a Cetagory"
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: 'To-Do',
        label: 'To-Do',
      },
      {
        value: 'In Progress',
        label: 'In Progress',
      },
      {
        value: 'Done',
        label: 'Done',
      },
    ]}
  />
          <label className="label">
           
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Task</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default AddJobTAsk;