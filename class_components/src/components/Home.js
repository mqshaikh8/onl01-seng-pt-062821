import React, { Component } from "react";


class Home extends Component{

  render(){
    console.log(this.props)
    return (
      <div id="home">
        <h1 style={{ color: this.props.color }}>
          {this.props.username} is a Web Developer from {this.props.city}
          <ul>
          {this.props.quotes.map(e => <li>{e.quote}</li>)}
          </ul>
          
        </h1>
      </div>
    );
  }
}

export default Home;
