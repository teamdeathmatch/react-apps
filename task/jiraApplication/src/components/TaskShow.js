function TaskShow({ task, onDelete }) {
  
  const handleClickDelete = ()=>   {
    onDelete(task.id);
  }

  return (
    <div className="task-show">
      <h4 className="taskList-title" >Görev</h4>
      <p className="taskList-todo"> {task.title} </p>
      <h4 className="taskList-title"> Yapılacak </h4>
      <p className="taskList-todo"> {task.taskDesc} </p>
      <div className="button-bar" >
        <button className="button-del" onClick={handleClickDelete}  >Sil</button>
        <button className="button-upd">Güncelle</button>
      </div>
    </div>
  );
}

export default TaskShow;
