import {useEffect, useState} from 'react';
import {Box} from '@mui/material'
import {Routes, Route} from 'react-router-dom'
//components
import Nav from "./components/Nav";
//screen
import Signup from "./Screen/Signup";
import Home from "./Screen/Home";
function App() {
  const [user, setUser] = useState("")

  useEffect(() => { 
    //persist fetch
    if(localStorage.getItem('token')){
      const token = localStorage.getItem('token')
      fetch('http://localhost:3000/persist',{
        headers:{
          'key': token
        }
      })
      .then(res => res.json())
      .then((data) => {
        setUser(data.user)
      })
    }
    

  },[])
  console.log()
  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width:'100%',
      }}
    >
      <Nav/>
      <Routes>
        <Route path="/" element={<Home user={user}/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </Box>
  );
}

export default App;
