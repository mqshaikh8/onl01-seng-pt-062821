
import '../css/Quote.css'
const QuoteShow = (props) => {
    console.log(props, 'in the show')
    
    return(
        <div  className='blog' key={props.id} >
            <h4>{ props?.quote?.anime }</h4>
            <p>{ props?.quote?.quote }</p>
            <p>By: { props?.quote?.character }</p>
        </div>
    )
}

export default QuoteShow