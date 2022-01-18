import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import ImageContainer from './Component/ImageContainer';
import Nav from './Component/Nav';
import Form from './Component/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { connect } from 'react-redux';
import {init} from './Redux/Actions/foodAction'

function App(props) {
  useEffect(() => {
      fetch('http://localhost:3000/foods')
      .then(res => res.json())
      .then((data) => {
        console.log('initFetch')
        props.init(data)
      })
  },[])

  // const deleteFood = (id) => {
  //   const newFoods = foods.filter(e => e.id !== id)
  //   setFoods(newFoods)
  // }
  // const updateFood = (obj) => {
  //   const food = foods.filter(e => e.id !== obj.id)
  //   setFoods([...food, obj])
  // }

  return (
    <div className="App"> 
      <Nav/>
      <Switch>
        <Route path="/form" render={(router) => <Form router={router} />}/>
        <Route path="/" render={(routerProps) => <ImageContainer routerProps={routerProps} />}/>
      </Switch>
    </div>
  );
}

const mstp = (state) => {
  return {
    state:state
  }
}

export default connect(mstp,{init})(App);

{/* <Form/>
<ImageContainer foods={foods} /> */}
