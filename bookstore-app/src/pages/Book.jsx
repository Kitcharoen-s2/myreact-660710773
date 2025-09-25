import { Link } from "react-router-dom";
import React from 'react';
import './styles/Book.css';

const Book = () => {
    return (
        <div>
            <h1>Welcome to the Books</h1>
            <Link to="/category/fiction">Go To category List</Link>
        </div>
    )
}
export default Book;