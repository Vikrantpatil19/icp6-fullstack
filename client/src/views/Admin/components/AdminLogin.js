import React, { useState } from 'react';
import toast from "react-hot-toast"

export default function AdminLogin({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();


        const adminEmail = 'om@gmail.com';
        const adminPassword = '123';

        if (email === adminEmail && password === adminPassword) {
            toast.success("Welocm Admin");
            onLogin();
        } else {

            setError('You are not authorized to access this page.');
            toast.error("Admin Login Fail");
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center pb-5">
                <div className="col-md-6">
                    <div className="card mt-4">
                        <div className="card-body">
                            <h2 className="card-title mb-4 ">Admin Login</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password:</label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                            {error && <p className="mt-3 text-danger">{error}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
