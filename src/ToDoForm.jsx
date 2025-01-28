// TodoForm.jsx
import React, { useState } from 'react';
import "./ToDo.css";
import { MdCheck } from 'react-icons/md';

const TodoForm = ({ onAddTask }) => {
    const [inputValue, setInputValue] = useState({
        id: '',
        content: '',
        checked: false
    });

    const handleInputChange = (value) => {
        setInputValue({
            id: Date.now(), // Using timestamp as unique ID
            content: value,
            checked: false
        });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault(); // This should not be commented out
        const { content } = inputValue;
        
        if (!content) return;
        
        onAddTask(inputValue);
        setInputValue({ // Reset form properly
            id: '',
            content: '',
            checked: false
        });
    }

    return (
        <section className="form">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input 
                        type="text" 
                        className="todo-input" 
                        autoComplete="off" 
                        value={inputValue.content || ''} // Handle undefined/null case
                        onChange={(event) => handleInputChange(event.target.value)}
                        placeholder="Enter your task"
                    />
                </div>
                <div>
                    <button type="submit" className="todo-button">Add task</button>
                </div>
            </form>
        </section>
    );
}

export default TodoForm;