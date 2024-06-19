import React, { useState } from 'react';
import UserService from '../service/UserService'; // Importing UserService for handling user-related operations
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation

function RegistrationPage() {
    const navigate = useNavigate(); // Initializing navigate for navigation

    // State variable for form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
        city: ''
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
            // Call the register method from UserService to register the user
            const token = localStorage.getItem('token'); // Get the token from local storage
            await UserService.register(formData, token); // Call UserService to register the user
            // Clear the form fields after successful registration
            setFormData({
                name: '',
                email: '',
                password: '',
                role: '',
                city: ''
            });
            alert('User registered successfully'); // Display success message
            navigate('/admin/user-management'); // Navigate to the user management page
        } catch (error) {
            console.error('Error registering user:', error); // Log the error
            alert('An error occurred while registering user'); // Display error message
        }
    };

    // Render the registration form
    return (
        <div className="auth-container">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    {/* Input field for user's name */}
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder='Enter your name' required />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    {/* Input field for user's email */}
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder='Enter your email' required />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    {/* Input field for user's password */}
                    <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder='Enter a strong password' required />
                </div>
                <div className="form-group">
                    <label>Role:</label>
                    {/* Input field for user's role */}
                    <input type="text" name="role" value={formData.role} onChange={handleInputChange} placeholder="Enter your role" required />
                </div>
                <div className="form-group">
                    <label>City:</label>
                    {/* Input field for user's city */}
                    <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="Enter your city" required />
                </div>
                {/* Submit button for registering the user */}
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegistrationPage;
