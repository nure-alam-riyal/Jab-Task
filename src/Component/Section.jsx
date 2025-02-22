import CategoryHeaders from "./CategoryHeaders";


// eslint-disable-next-line react/prop-types
const Section = ({done1,inProgress1,toDo1,setTasks,Tasks,category}) => {
    let text
    let bg
    let taskTo
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
        <div>
            <CategoryHeaders text={text} bg={bg} l={taskTo?.length}></CategoryHeaders>
            
        </div>
    );
};

export default Section;