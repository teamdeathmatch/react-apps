
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import { useState } from 'react';

function App() {
const [tasks, setTasks] = useState([]);
  const createTask= (title, taskDesc) => {
    const createdTasks= [
      ...tasks,{
        id: Math.round(Math.random()*999999),
        title,
        taskDesc
      }
    ]
  setTasks(createdTasks);
  console.log(createdTasks);
  }
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h3>Diğer Tasklar</h3>
      <TaskList tasks={tasks}/>
    </div>
  );

}

export default App;
