import {useState} from 'react';

const Form = (props) => {
  const [anime, setAnime] = useState()
  const [char, setChar] = useState()
  const [quote, setQuote] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      anime, char, quote
    }
    props.create(data)
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

