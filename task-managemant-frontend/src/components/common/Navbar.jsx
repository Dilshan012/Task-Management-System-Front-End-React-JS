import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link for navigation
import UserService from '../service/UserService'; // Importing UserService for user-related operations

function Navbar() {
    // Check if user is authenticated and admin
    const isAuthenticated = UserService.isAuthenticated(); 
    const isAdmin = UserService.isAdmin();

    // Function to handle logout
    const handleLogout = () => {
        // Confirm logout with user
        const confirmDelete = window.confirm('Are you sure you want to logout this user?');
        if (confirmDelete) {
            // Call UserService to logout user
            UserService.logout();
            // Reload the page after logout
            refresher();
        }
    };

    // Function to reload the page
    const refresher = () => {
        navigator.reload();
    };

    return (
        <nav>
            <ul>
                {/* Display "Task Management System" link if user is not authenticated */}
                {!isAuthenticated && <li><Link to="/">Task Management System</Link></li>}
                {/* Display "Profile" link if user is authenticated */}
                {isAuthenticated && <li><Link to="/profile">Profile</Link></li>}
                {/* Display "User Management" link if user is admin */}
                {isAdmin && <li><Link to="/admin/user-management">User Management</Link></li>}
                {/* Display "Task Management" link if user is authenticated */}
                {isAuthenticated && <li><Link to="/task-management" >Task Management</Link></li>}
                {/* Display "Logout" link if user is authenticated */}
                {isAuthenticated && <li><Link to="/" onClick={handleLogout}>Logout</Link></li>}
            </ul>
        </nav>
    );
}

export default Navbar;