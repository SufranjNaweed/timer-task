import React, { useContext } from 'react';
import { TaskContext } from '../../../Contexts/TaskContext';

import doneSVG from '../../../Assets/Images/done.svg';
import deletSVG from '../../../Assets/Images/delete.svg'

const TaskItem = ({task}) => {
    const {id, title, description, priority, minutes, seconds} = task;
    const { removeTask, setComplete } = useContext(TaskContext);
    
    return (
        <li className={"task-item " + priority} key={id}>
            <div className="content">
                <p>{title}</p>
                {
                    minutes && seconds ? 
                        <span className="estimation">estimate time : {minutes} mins {seconds} s</span>
                    :
                        <span className="estimation-empty"></span>
                }
            </div>
            <div className="action">
                <div className="done" onClick={() => setComplete(id)}>
                    <img src={doneSVG} alt="done" />
                </div>
                <div className="delete" onClick={() => removeTask(id)}>
                    <img src={deletSVG} alt="delete" />
                </div>
            </div>
        </li>
    );
}
 
export default TaskItem;