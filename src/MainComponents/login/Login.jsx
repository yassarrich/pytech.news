import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Email:', email, 'Password:', password);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
                <h2 className="mb-6 text-center text-2xl font-extrabold text-gray-900">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email:</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className="mt-1 p-2 w-full border rounded-md"
                            required 
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Password:</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            className="mt-1 p-2 w-full border rounded-md"
                            required 
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 active:bg-blue-800">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;