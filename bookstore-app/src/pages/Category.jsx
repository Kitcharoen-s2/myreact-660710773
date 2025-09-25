import { Link } from "react-router-dom";
import React from 'react';
import './styles/Category.css';

const Category = () => {
    return (
        <div>
            <h1>Welcome to the Category</h1>
            <Link to="/about">Go To about List</Link>
        </div>
    )
}
export default Category;