import Blog from "./Blog"
import '../css/BlogList.css'
const BlogList = ({quotes}) => {
    // debugger

    const renderer = () => quotes.map((blog, index) => <Blog quote={blog} index={index}/>)
    return (
        <div className='blogList'>
            {renderer()}
        </div>
        
    )

}

export default BlogList;