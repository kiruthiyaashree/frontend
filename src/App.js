// frontend/src/App.js

import React, { useState } from 'react';

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email })
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <h1>This is React WebApp </h1>
            <form action="/submit-form" method='post' onSubmit={handleOnSubmit}>
                <input type="text" placeholder="name"
                    value={name} onChange={handleChangeName} />
                <input type="email" placeholder="email"
                    value={email} onChange={handleChangeEmail} />
                <button type="submit">submit</button>
            </form>
        </>
    );
}

export default App;
