import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Form from './Components/Form';
import BlogList from './Components/BlogList'
function App() {
    const blogs = [{title:'Cake', Content:'Wafer cake marshmallow '},{title:'Ipsum',Content:'Wafer'}]
    
  return (
    <div className="App">
       
        <Nav/>
        <h1>Welcome to the Jungle 🐯</h1>
        <Form/>
        <h3> List Blogs</h3>
        <BlogList blogs={blogs}/>
    </div>
  );
}

export default App;
