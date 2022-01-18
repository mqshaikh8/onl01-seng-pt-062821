import {useState} from 'react';
import {Tabs, Tab} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
    const [value, setValue] = useState(0);
    let navigate = useNavigate();
    //useState
    const handleChange = (event, newValue) => {
        console.log(newValue)
        setValue(newValue);
        switch (newValue) {
            case 0:
                navigate('/')
                break;
            case 1:
                navigate('/signup')
                break;
            case 2: 
                localStorage.clear()
                setValue(1)
                navigate('/signup')
            default:
                break;
        }
    };
    return (
       <Tabs value={value} onChange={handleChange} centered>
           <Tab label="Home"/>
           <Tab label="Signup"/>
           <Tab label="Logout"/>
       </Tabs>
    )
}
