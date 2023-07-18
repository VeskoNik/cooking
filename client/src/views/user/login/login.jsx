import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password
        };

        try {
            const response = await fetch('http://localhost:5000/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
                credentials: 'include'
            });

            if (response.ok) {

                const token = await response.text();
                console.log(token)
                window.location.href = '/';
            } else {
                const errorData = await response.json();
                setError(errorData.error);
            }
        } catch (error) {

            setError(error.message);
            console.error(error);
        }
    };

    return (
        <main className="login">
            <section id="login">
                <div className="form">
                    <h2>Login</h2>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button type="submit">Login</button>
                        {error && <p className="error">{error}</p>}
                        <p className="message">
                            Not registered? <a href="/register">Create an account</a>
                        </p>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Login;
