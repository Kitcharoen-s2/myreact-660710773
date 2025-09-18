import { Link } from "react-router-dom";
import React from 'react';
import './styles/HomePage.css';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Homepage</h1>
            <Link to="/books">Go To Book List</Link>
        </div>
    )
}
export default HomePage;