

const Blog = (props) => {
    const {title,Content} = props.blog

    console.log(props)
    return(
        <div key={props.index}>
                <p>title</p>
                <p>{title}</p>
                <p>Content</p>
                <p>{Content}</p>
            </div>
    )
}

export default Blog