import '../css/Nav.css'
const Nav = (props) => {
  console.log(props)
    const handleClick = (e) => {
      props.func(e)
    }
    return (
        <nav className='nav'>
          <p className='nav_header_one link' onClick={() => handleClick('List')}>List</p>
          <p className='nav_header_two link' onClick={() => handleClick('Form')}>Form</p>
        </nav>
      )
    
}

export default Nav