import React from 'react';
import '../Css/Header.css';
import {Link } from "react-router-dom";
export default function Nav() {
    return (
        <div className='header'>
            <Link to='/' className='header_item' >List</Link>
            <Link to='/form' className='header_item' >Form</Link>
        </div>
    )
}


