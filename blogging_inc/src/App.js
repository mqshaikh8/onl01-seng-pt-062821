import logo from './logo.svg';
import {useEffect, useState} from 'react'
import './App.css';
import Nav from './Components/Nav';
import Form from './Components/Form';
import QuoteList from './Components/QuoteList';

import {Switch, Route} from 'react-router-dom';
import QuoteShow from './Components/QuoteShow';
 
function App() {
  
  const [toggle, setToggle] = useState(false) 
  const [quotes, setQuotes] = useState([])

    useEffect(() => {
      fetch('http://localhost:3000/quotes')
      .then(res => res.json())
      .then(setQuotes)
    },[])

  const handleCreate = (obj) => {
    console.log(obj)
    const newArray = [...quotes, obj]
    setQuotes(newArray)
  } 

  const handleUpdate = (data) => {
    console.log(data)
    const newArray = quotes.filter(elem => elem.id !== data.id)
    // const newArray = quotes.map(elem => {
    //   if(elem.id === data.id){
    //     return data
    //   }
    //   else {
    //     return elem
    //   }
    // })
    setQuotes([...newArray, data])
  }

  const handleDelete = (id) => {
    console.log(id)
    const newArray = quotes.filter(elem => elem.id !== id)
    setQuotes(newArray)
  }

  const handleRender = (arg) => {
    arg === 'List' ? setToggle(true) : setToggle(false)
    // setToggle(!toggle)

    console.log(arg,'app')
  }

  const handleQuoteShow = (routerProps) => {
    console.log(routerProps.match, ' in handle show')
    const id = routerProps.match.params.id
    return <QuoteShow quote={quotes[id]} routerProps={routerProps}/>
  }

   
  return (
    <div className="App">
        <Nav func={handleRender}/>
        <h1>Welcome to the Jungle 🐯</h1>
        <Switch>
          <Route path='/posts/:id' render={handleQuoteShow}/>
          <Route path='/posts' render={(routerProps) => <QuoteList routerProps={routerProps} handleUpdate={handleUpdate} quotes={ quotes } handleDelete={handleDelete}/>}/>
          <Route path='/' component={Form}/>
        </Switch>
    </div>
  );
}

export default App;

// {toggle ? 
//   <div>
//     <h3> List Quotes</h3>
//     <QuoteList handleUpdate={handleUpdate} quotes={ quotes } handleDelete={handleDelete}/>
//   </div>
// : 
//   <Form create={handleCreate}/>}
