import '../css/Nav.css'
import {Link} from 'react-router-dom';
const Nav = (props) => {
  console.log(props)
    const handleClick = (e) => {
      props.func(e)
    }
    return (
        <nav className='nav'>
          <Link className='nav_header_one link' to='/posts'> List</Link>
          <Link className='nav_header_two link' to='/'> Form</Link>
        
        </nav>
      )
    
}

export default Nav

{/* <p className='nav_header_one link' onClick={() => handleClick('List')}>List</p>
<p className='nav_header_two link' onClick={() => handleClick('Form')}>Form</p> */}