import {useState} from 'react';
import {Tabs, Tab} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import "../Css/Nav.css"
export default function Nav() {
    
    return (
       <div className="nav">
           <Link className="nav_link" to="/">Home</Link>
           <Link className="nav_link" to="/signup">Signup</Link>
           <Link className="nav_link" to="/logout">Logout</Link>
       </div>
    )
}
