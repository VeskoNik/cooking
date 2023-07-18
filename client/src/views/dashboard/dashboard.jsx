import React, { useEffect, useState } from 'react';
import Cookies from "js-cookies"

const Dashboard = () => {
    const [items, setItems] = useState([]);
    const token = Cookies.getItem('token')

  useEffect(() => {
    fetch('http://localhost:5000/items/dashboard', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`, // Replace with your actual access token or remove if not required
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <main className="dashboard">
      <section id="dashboard">
        <h2>items in Fridge</h2>
        {items.length > 0 ? (
          <ul className="card-wrapper">
            {/* Display a li with information about every item */}
            {items.map((item) => (
              <li className="card" key={item._id}>
                <img src={item.imageUrl} alt={item.name} />
                <p>
                  <strong>Name: </strong>
                  <span className="name">{item.name}</span>
                </p>
                <p>
                  <strong>Use before: </strong>
                  <span className="location">{new Date(item.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })}</span>
                </p>
                <p>
                  <strong>Description: </strong>
                  <span className="description">{item.description}</span>
                </p>
                <a className="details-btn" href={`/dashboard/${item._id}/details`}>
                  Details
                </a>
              </li>
            ))}
          </ul>
        ) : (
          
          <div id="no-post">
            <h2>There are no food in the fridge now!</h2>
          </div>
        )}
      </section>
    </main>
  );
};

export default Dashboard;
