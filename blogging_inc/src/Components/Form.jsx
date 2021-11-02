import {useState} from 'react';

const Form = (props) => {
  console.log(props, 'in Form')
  const {create} = props
  const [anime, setAnime] = useState()
  const [character, setChar] = useState()
  const [quote, setQuote] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      anime, character, quote
    }
    fetch(`http://localhost:3000/quotes`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then((data) => {
      create(data)

    })
  }

    return (
        <>
        <h3>Create Blog</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Anime</label>
            <input type="text" onChange={(e) => setAnime(e.target.value)}/>
          </div>
          <div>
            <label>Character</label>
            <input type="text" onChange={(e) => setChar(e.target.value)}/>
          </div>
          <div>
            <label>Quote</label><br/>
            <textarea onChange={(e) => setQuote(e.target.value)}/>
          </div>
  
          <input type="submit" value="Create Blog" />
        </form>
        </>
    )
}


export default Form

