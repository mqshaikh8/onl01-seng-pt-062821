import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import Nav from './Components/Nav';
import Form from './Components/Form';
import BlogList from './Components/BlogList'
 
function App() {
  
  const [toggle, setToggle] = useState(false) 
  const [quotes, setQuote] = useState([
    {
      "anime": "One Punch Man",
      "character": "Saitama",
      "quote": "Prophecies don't ever come true."
    },
    {
      "anime": "One Punch Man",
      "character": "Saitama",
      "quote": "Heroes and the police don't do their jobs because someone says \"please\". Right?"
    },
    {
      "anime": "One Punch Man",
      "character": "Saitama",
      "quote": "Who decides limits? And based on what? You said you worked hard? Well, maybe you need to work a little harder. Is that really the limit of your strength? Could the you of tomorrow beat you today? Instead of giving in, move forward."
    }
  ])


  const handleCreate = (obj) => {
    console.log(obj)
    const newArray = [...quotes, obj]
    setQuote(newArray)
  } 

  const handleRender = (arg) => {
    arg === 'List' ? setToggle(true) : setToggle(false)
    // setToggle(!toggle)
    console.log(arg,'app')
  }

   
  return (
    <div className="App">
        <Nav func={handleRender}/>
        <h1>Welcome to the Jungle 🐯</h1>
        {toggle ? 
          <div>
            <h3> List Blogs</h3>
            <BlogList quotes={quotes}/> 
          </div>
        : 
          <Form create={handleCreate}/>}
    </div>
  );
}

export default App;
