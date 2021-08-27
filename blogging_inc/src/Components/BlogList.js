import Blog from "./Blog"
const BlogList = ({blogs}) => {
    console.log(blogs)
    const renderer = () => blogs.map((blog, index) => <Blog blog={blog} index={index}/>)
    return (
        <div>
            {renderer()}
        </div>
        
    )

}

export default BlogList;