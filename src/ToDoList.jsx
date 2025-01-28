// TodoList.jsx
import React from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";

const TodoList = ({ tasks, onDeleteTask, onToggleTask, onClearTasks }) => {
    return (
        <>
            <section className="myUnOrdList">
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id} className="todo-item">
                            <span style={{ 
                                textDecoration: task.checked ? 'line-through' : 'none' 
                            }}>
                                {task.content}
                            </span>
                            <button 
                                className={`check-btn ${task.checked ? 'checked' : ''}`}
                                onClick={() => onToggleTask(task.id)}
                            >
                                <MdCheck />
                            </button>
                            <button 
                                className="delete-btn" 
                                onClick={() => onDeleteTask(task.id)}
                            >
                                <MdDeleteForever />
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <button className="clear-btn" onClick={onClearTasks}>
                    Clear all
                </button>
            </section>
        </>
    );
}

export default TodoList;