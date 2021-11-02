import Quote from "./Quote"
import '../css/QuoteList.css'
const QuoteList = (props) => {
    console.log(props, 'list')
    const {quotes, handleUpdate, handleDelete, routerProps} = props
    const renderer = () => quotes?.map((quote, index) => <Quote routerProps={routerProps}  key={ index } quote={ quote} handleUpdate={handleUpdate} handleDelete={handleDelete} />)
    return (
        <div className='quoteList'>
            {renderer()}
        </div>
        
    )

}

export default QuoteList;