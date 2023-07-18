import React, { useState } from 'react';

const AddItem = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [calories, setCalories] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const itemsData = {
        name,
        date,
        type,
        imageUrl,
        calories,
        description
    };

    try {
        

        const response = await fetch('http://localhost:5000/items/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemsData),
            credentials: 'include'
        })
         .then(response => {
            const data = response.json();
            console.log(data)
           window.location.href = '/dashboard'
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
    <main className="create">
      <section id="create">
        <div className="form">
          <h2>Add item</h2>
          <form className="create-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              name="date"
              id="date"
              placeholder="Date example:2023-12-21"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <input
              type="text"
              name="type"
              id="type"
              placeholder="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            />
            <input
              type="text"
              name="imageUrl"
              id="food-img"
              placeholder="Image url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
            <input
              type="text"
              name="calories"
              id="calories"
              placeholder="Calories"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              required
            />
            <textarea
              id="description"
              placeholder="Description..."
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
            <button type="submit">Post</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>
      </section>
    </main>
  );
};

export default AddItem;
