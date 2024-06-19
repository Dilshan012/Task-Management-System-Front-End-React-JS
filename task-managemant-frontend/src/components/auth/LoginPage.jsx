import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../service/UserService";

function LoginPage() {
    // State variables for email, password, and error message
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Custom hook for navigation

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        try {
            // Call the login method from UserService to authenticate user
            const userData = await UserService.login(email, password);
            console.log(userData); // Log the user data received from the backend
            if (userData.token) {
                // If login is successful, store token and role in local storage
                localStorage.setItem('token', userData.token);
                localStorage.setItem('role', userData.role);
                navigate('/profile'); // Navigate to the profile page
                window.location.reload(); // Reload the window to reflect changes
            } else {
                setError(userData.message); // If login fails, set error message
            }
        } catch (error) {
            console.log(error); // Log any errors that occur
            setError(error.message); // Set error message to display to user
            // Clear the error message after 5 seconds
            setTimeout(() => {
                setError('');
            }, 5000);
        }
    };

    // Render the login form
    return (
        <div className="auth-container">
            <h2>Login</h2>
            {/* Display error message if there is one */}
            {error && <p className="error-message">{error}</p>}
            {/* Login form with email, password input fields, and submit button */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email: </label>
                    {/* Input field for email with value and onChange handlers */}
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    {/* Input field for password with value and onChange handlers */}
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {/* Submit button for the form */}
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
