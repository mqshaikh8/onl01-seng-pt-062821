import React, {Component} from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);


class App extends Component{
  
  state={
    quotes:[]
  }

  componentDidMount(){
    console.log('I have been mounted')
    fetch('https://animechan.vercel.app/api/quotes')
    .then(res => res.json())
    .then(data => {
      this.setState({
        quotes: data
      })
      console.log(this.state,'test')
    })
  }

  log(){
    console.log(' I was rendered')
  }

  render(){
    console.log(this.state,'app')
    this.log()
    return (
      <div>
        <NavBar />
        <Home quotes={this.state.quotes} username={user.name} city={user.city} color={user.color} />
        <About bio={user.bio} links={user.links} />
      </div>
    );
  }
}

export default App;
