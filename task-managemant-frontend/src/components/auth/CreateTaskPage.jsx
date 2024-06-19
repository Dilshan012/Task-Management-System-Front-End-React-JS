import React, { useState } from 'react';
import TaskService from '../service/TaskService'; // Importing TaskService for handling tasks
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation

function CreateTaskPage() {
    const navigate = useNavigate(); // Initializing navigate for navigation

    // State variable for form data
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        status: ''
    });

    // Function to handle input changes in the form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            // Call the createTask method from TaskService
            const token = localStorage.getItem('token'); // Get the token from local storage
            await TaskService.createtasks(formData, token); // Call TaskService to create a task
            // Clear the form fields after successful task creation
            setFormData({
                title: '',
                description: '',
                status: ''
            });
            alert('Task saved successfully'); // Display success message
            navigate('/task-management'); // Navigate to the task management page
        } catch (error) {
            console.error('Error creating task:', error); // Log the error
            alert('An error occurred while creating task'); // Display error message
        }
    };

    // Render the create task form
    return (
        <div className="auth-container">
            <h2>Create a Task</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title:</label>
                    {/* Input field for task title */}
                    <input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="Enter task title" required />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    {/* Input field for task description */}
                    <input type="text" name="description" value={formData.description} onChange={handleInputChange} placeholder="Enter task description" required />
                </div>
                <div className="form-group">
                    <label>Status:</label>
                    {/* Input field for task status */}
                    <input type="text" name="status" value={formData.status} onChange={handleInputChange} placeholder="Enter task status" required />
                </div>
                {/* Submit button for creating the task */}
                <button type="submit">Create Task</button>
            </form>
        </div>
    );
}

export default CreateTaskPage;
