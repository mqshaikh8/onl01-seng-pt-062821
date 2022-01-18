import '../css/Quote.css'
import { useState } from 'react';

const Quote = (props) => {
    console.log(props,'quote')
    const [toggle, setToggle] = useState(false)
    const {quote:{anime, quote, character, id}, handleUpdate, handleDelete, routerProps:{history}} = props


    const [animeState, setAnime] = useState(anime)
    const [charState, setChar] = useState(character)
    const [quoteState, setQuote] = useState(quote)

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch( `http://localhost:3000/quotes/${id}`,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                anime: animeState,
                character:charState,
                quote:quoteState
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            handleUpdate(data)
            setToggle(!toggle)

        })
    }

    const handleShow = () => {
        history.push(`/posts/${id}`)
    }
    
    const handleRender = () => {
        if(toggle){
            return (
                    <form onSubmit={handleSubmit}>
                        <label />
                        <input name='anime' type='text' value={animeState} onChange={(e) => setAnime(e.target.value)}/>
                        <input name='quote' type='text'  value={quoteState} onChange={(e) => setQuote(e.target.value)}/>
                        <input name='character' type='text'  value={charState} onChange={(e) => setChar(e.target.value)}/>
                        <button type='submit'> Submit</button>
                    </form>
                )
            
        }
        else {
            return(
                <div key={props.id} >
                <h4>{ anime }</h4>
                 <p>{ quote }</p>
                 <p>By: { character }</p>
                 <div>
                     <button type='button' onClick={() => setToggle(!toggle)}> Update</button>
                     <button type='button' onClick={() => handleDelete(id)}> Delete</button>
                 </div>
                </div>
                )
        }
    }
    

    return(
        <div onClick={handleShow} className='blog'>
        {handleRender()}
        </div>
    )
}

export default Quote