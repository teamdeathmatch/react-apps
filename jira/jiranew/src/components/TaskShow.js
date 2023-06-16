function TaskShow({ task, onDelete }) {
    const handleDeleteTask = () => {
        onDelete(task.id);
    }
  return (

      <div className="task-show">
        <h3>Görev</h3>
        <p> {task.title}</p>
        <h3>Açıklama</h3>
        <p> {task.taskDesc}</p>
        <button onClick={handleDeleteTask}>Sil</button>
        <button>Güncelle</button>
      </div>

  );
}

export default TaskShow;
