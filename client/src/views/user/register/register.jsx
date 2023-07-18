import React, { useState } from 'react';



const Register = () => {
    
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.elements.email.value;
        const password = form.elements.password.value;
        const passwordRepeat = form.elements.passwordRepeat.value;

        try {
            if (password !== passwordRepeat) {
                throw new Error('Passwords do not match');
            }

            const response = await fetch('http://localhost:5000/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password, passwordRepeat }),
                credentials: 'include'
            })
             .then(response => {
                const data = response.json();
                window.location.href = '/';
             });
            if (!response.ok) {
                const errorData = await response.json();
                setErrorMessage(errorData.errorMessage);
            }

            
                ; // Handle the response, e.g., show a success message, redirect, etc.
        } catch (error) {
            setErrorMessage(error.message);
            console.error('Error:', error);
        }
    };

    return (
        <main className="register">
            <section id="register">
                <div className="form">
                    <h2>Register</h2>
                    <form className="login-form" onSubmit={handleSubmit} method="POST" >
                        <input type="text" name="email" id="register-email" placeholder="email" />
                        <input type="password" name="password" id="register-password" placeholder="password" />
                        <input type="password" name="passwordRepeat" id="repeat-password" placeholder="repeat password" />
                        <button type="submit">Register</button>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <p className="message">
                            Already registered? <a href="/users/login">Login</a>
                        </p>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Register;
