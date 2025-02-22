import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import LoadingSpin from "../Component/Shared/LoadingSpin";
import { useEffect, useState } from "react";
import Section from "../Component/Section";


const AllJobs = () => {
    const [Tasks,setTasks]=useState([])
    const [toDo,setTOdo]=useState([])
    const [inProgress,setInProgress]=useState([])
    // const []=useState([])
    const [done,setDone]=useState([])
    const userAxios=useAxios()
    const {data:allTask=[],isLoading}=useQuery({
        queryKey:[],
        queryFn:async()=>{
        const {data} =await userAxios.get('task')
        setTasks(data)
        return data
        }
    })
    
          
          useEffect(()=>{
            const Todo=    Tasks.filter((task)=>task?.task?.category==='To-Do')
          const Inprogress=Tasks.filter((task)=>task?.task?.category==='In Progress')
          const Done=      Tasks.filter((task)=>task?.task?.category==='Done')
            setDone(Done)
            setInProgress(Inprogress)
          setTOdo(Todo)
          
          },[Tasks])
    const Categorys=["To Do","In Progress","Done"];
    if(isLoading) return <LoadingSpin></LoadingSpin>
    console.log(allTask,toDo,inProgress,done)
    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2 ">
            {
                Categorys.map((category,index)=>(
                    <Section 
                    key={index}
                     category={category} 
                     Tasks={Tasks}
                      setTasks={setTasks}
                      toDo1={toDo}
                      inProgress1={inProgress}
                      done1={done}
                      ></Section>
                )
                )
            }
        </div>
    );
};

export default AllJobs;