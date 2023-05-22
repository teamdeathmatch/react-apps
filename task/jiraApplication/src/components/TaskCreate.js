import { useState } from "react";

function TaskCreate({ onCreate }) {
  const [title, setTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTaskDesc = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title, taskDesc);
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div className="task-create">
      <h3 className="task-title">Lütfen Task Ekleyiniz</h3>
      <form className="task-form">
        <label className="task-label">Başlık</label>
        <input value={title} onChange={handleChange} className="task-input" />
        <label className="task-label">Task giriniz</label>
        <textarea
          value={taskDesc}
          onChange={handleTaskDesc}
          className="task-textarea"
          rows={5}
        />
        <button onClick={handleSubmit} className="task-button">
          Oluştur
        </button>
      </form>
    </div>
  );
}

export default TaskCreate;
