import React, { useState } from 'react';
 
function TaskCreate({onCreate}) {
    const [title, setTitle] = useState("")
    const [taskDesc, setTaskDesc] = useState("")

    const handleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleTaskDescChange= (event)=> {
        setTaskDesc (event.target.value);
    }

    const handleSubmit= (event)=> {
        event.preventDefault();
        onCreate(title, taskDesc);
        setTitle('');
        setTaskDesc('');
    }


    
    return ( 
        <div className="taskcreate" >
            <h1> Tasklarım</h1>
            <form className="formarea">
                <label className="tasktext"> Taskı yazınız</label>
                
                <input className="inputarea"  value={title} onChange={handleChange}></input>
                <label className="taskdesc"> Açıklama</label>
                
                <textarea className="taskdescarea" value={taskDesc} onChange={handleTaskDescChange}></textarea>
                <button className="create" onClick={handleSubmit}>Oluştur</button>
            </form>
            
        </div>
     );
}

export default TaskCreate;