import React, { useState } from 'react';
import TaskService from '../service/TaskService';
import { useNavigate } from 'react-router-dom';

function CreateTaskPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        status: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Call the createTask method from TaskService
            const token = localStorage.getItem('token');
            await TaskService.createtasks(formData, token);

            // To Clear the form fields after successful registration
            setFormData({
                title: '',
                description: '',
                status: ''
            });
            alert('Task saved successfully');
            navigate('/task-management');

        } catch (error) {
            console.error('Error creating task:', error);
            alert('An error occurred while creating task');
        }
    };

    return (
        <div className="auth-container">
            <h2>Create a Task</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label>Status:</label>
                    <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="Enter your Status" required />
                </div>
                <button type="submit">Create Tasks</button>
            </form>
        </div>
    );
}

export default CreateTaskPage;