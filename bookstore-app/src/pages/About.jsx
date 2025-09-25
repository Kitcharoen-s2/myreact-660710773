import { Link } from "react-router-dom";
import React from 'react';
import './styles/About.css';

const About = () => {
    return (
        <div>
            <h1>Welcome to the About</h1>
            contact
            <Link to="/contact">Go To contact List</Link>
        </div>
    )
}
export default About;