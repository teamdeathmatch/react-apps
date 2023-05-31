import { useState } from "react";

function TaskCreate({ onCreate, task, taskformUpdate,onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : '');
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskformUpdate){
      onUpdate(task.id,title,taskDesc)
    }
    else {
      onCreate(title, taskDesc);
    }
    
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {" "}
      {taskformUpdate ? (
        <div className="task-update">
          <h3 className="task-title">Lütfen Taskı Düzenleyiniz</h3>
          <form className="task-form">
            <label className="task-label">Lütfen başlığı düzenleyiniz. </label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Taskı düzenleyiniz.</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-textarea"
              rows={5}
            />
            <button onClick={handleSubmit} className="task-button">
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3 className="task-title">Lütfen Task Ekleyiniz</h3>
          <form className="task-form">
            <label className="task-label">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Task giriniz</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-textarea"
              rows={5}
            />
            <button onClick={handleSubmit} className="task-button">
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
