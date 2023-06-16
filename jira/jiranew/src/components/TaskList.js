import TaskShow from "./TaskShow";

function TaskList({tasks, onDelete}) {
    console.log(tasks);
    return <div className="task-list">
        {tasks.map((task,index)=> {
            return (
                <TaskShow key={index} task={task} onDelete={onDelete}/>
            )
        })}
    </div>;
}

export default TaskList;