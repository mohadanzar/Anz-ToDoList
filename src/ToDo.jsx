
import React, { useState, useEffect } from "react"; 
import "./ToDo.css";
import TodoForm from "./ToDoForm";
import TodoList from "./ToDoList";
import useLocalStorage from "./ToDoLocalstorage";

const Todo = () => {
    // Replace useState with useLocalStorage for tasks
    const [tasks, setTasks] = useLocalStorage("todos", []);
    const [dateTime, setDateTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();
            setDateTime(`${formattedDate} - ${formattedTime}`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleAddTask = (newTask) => {
        if (tasks.some(task => task.content === newTask.content)) return;
        setTasks(prevTasks => [...prevTasks, newTask]);
    }

    const handleDeleteTask = (taskId) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    }

    const handleToggleTask = (taskId) => {
        setTasks(prevTasks => 
            prevTasks.map(task => 
                task.id === taskId 
                    ? { ...task, checked: !task.checked }
                    : task
            )
        );
    }

    const handleClearTasks = () => {
        setTasks([]);
    }

    return (
        <section className="todo-container">
            <header>
                <h1>To Do List</h1>
                <h2 className="date-time">{dateTime}</h2>
            </header>
            <TodoForm onAddTask={handleAddTask} />
            <TodoList 
                tasks={tasks}
                onDeleteTask={handleDeleteTask}
                onToggleTask={handleToggleTask}
                onClearTasks={handleClearTasks}
            />
        </section>
    );
}

export default Todo;