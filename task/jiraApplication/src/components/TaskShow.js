import { useState } from "react";
import TaskCreate from "./TaskCreate"

function TaskShow({ task, onDelete }) {
  const [showEdit, setShowEdit] = useState(false);

  
  const handleClickDelete = () => {
    onDelete(task.id);
  };
  
  const handleClickEdit = ()=> {
    setShowEdit(!showEdit);
  };

  return (
    <div className="task-show">
      {showEdit ? (
         <TaskCreate task={task} taskformUpdate={true}/>
      ) : (
        <div>
        <h4 className="taskList-title">Görev</h4>
        <p className="taskList-todo"> {task.title} </p>
        <h4 className="taskList-title"> Yapılacak </h4>
        <p className="taskList-todo"> {task.taskDesc} </p>
        <div className="button-bar">
          <button className="button-del" onClick={handleClickDelete}>
            Sil
          </button>
          <button className="button-upd" onClick={handleClickEdit}>
            Güncelle
          </button>
        </div>
      </div>
      )}


      
    </div>
  );
}

export default TaskShow;
