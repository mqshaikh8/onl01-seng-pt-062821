import {useState} from 'react'
import {Box, TextField, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [username, setUsername]= useState("")
    const [password, setPassword]= useState("")

    const navigate = useNavigate()

    const handleClick = (evt) => {
        console.log(username, password)
        //place to login
        fetch('http://localhost:3000/login',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        })
        .then(res => res.json())
        .then((data) => {
            localStorage.setItem('token', data.token)
        })
    }
    
    return (
        <Box
        component="form"
        sx={{
            display:'flex',
            justifyContent:'center',
            alignItems: 'center',
            flexDirection:'column',
            height: '300px',
            width: "100%"
        }}
        >
            <TextField
                id="outlined"
                label="Required"
                defaultValue="Username"
                onChange={(evt) => setUsername(evt.target.value)}
            />
            <TextField
                id="outlined"
                label="Required"
                defaultValue="Password"
                sx={{ marginTop:'10px'}}
                onChange={(evt) => setPassword(evt.target.value)}
            />
            <Button onClick={handleClick}>Submit</Button>
        </Box>
    )
}
