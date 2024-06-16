// components/TaskManagementPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TaskService from '../service/TaskService';

function TaskManagementPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks data when the component mounts
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {

      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
      const response = await TaskService.getAllTasks(token);
      console.log(response);
      setTasks(response.ourTasksList); // Assuming the list of tasks is under the key 'ourTasksList'
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };


  const deleteTask = async (taskId) => {
    try {
      // Prompt for confirmation before deleting the task
      const confirmDelete = window.confirm('Are you sure you want to delete this task?');

      const token = localStorage.getTasks('token'); // Retrieve the token from localStorage
      if (confirmDelete) {
        await TaskService.deleteTasks(taskId, token);
        // After deleting the task, fetch the updated list of tasks
        fetchTasks();
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="user-management-container">
      <h2>Tasks Management Page</h2>
      <button className='reg-button'> <Link to="/createtasks">Add Tasks</Link></button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.description}</td> {/* Added here */}
              <td>{task.status}</td>
              <td>
                <button className='delete-button' onClick={() => deleteTask(task.id)}>Delete</button>
                <button><Link to={`/update-task/${task.id}`}>Update</Link></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskManagementPage;