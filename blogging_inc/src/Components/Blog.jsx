import '../css/Blog.css'
const Blog = (props) => {
    console.log(props)
    const {anime, quote, character} = props.quote
    return(
        <div key={props.id} className='blog'>
            <h4>{ anime }</h4>
             <p>{ quote }</p>
             <p>By: { character }</p>
        </div>
    )
}

export default Blog