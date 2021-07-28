

const quotesContainer = document.querySelector('.quotes')
const randButt = document.querySelector('.randButton')
const pTagRand = document.querySelector('.randQuote')
const likeButt = document.querySelector('.likeButton')
const quoteForm = document.querySelector('#quote-form')
quoteForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    let {quote, char, anime} = evt.target
    console.log(quote.value)
    const data = {
        "anime": anime.value,
        "character":char.value,
        "quote": quote.value
    }
    quoteRenderer(data)
})


randButt.addEventListener('click', (elem) => {
    fetch('https://animechan.vercel.app/api/random')
        .then(response => response.json())
        .then(quoteData => {
            let {anime, quote, character} = quoteData
            pTagRand.innerHTML = ''
            pTagRand.append(`${quote} - ${character}(${anime})`)

            likeButt.addEventListener('click', (e) => {
                data.push(quoteData)
                quoteRenderer(quoteData)
                
            })
        })
})

const quoteRenderer = ({anime, quote, character}) => {
    const qc = document.createElement('div')
    const delButt = document.createElement('Button')
    const quoteTag = document.createElement('p')
    const charTag = document.createElement('p')

    delButt.className = 'del-button'
    qc.className = 'quote-container'

    quoteTag.innerText = quote
    charTag.innerText = `${character}(${anime})`
    delButt.innerText = 'Delete'

    qc.append(quoteTag, charTag, delButt)
    quotesContainer.append(qc) 

    delButt.addEventListener('click', (e) => {
        e.target.parentElement.remove()
    })
}

data.forEach(elem => quoteRenderer(elem))

{/*  */}
{/* <insert-polular-character-name-here> */}
{/* <insert-pop-anime> */}