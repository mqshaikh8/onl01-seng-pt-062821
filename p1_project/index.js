console.log('hi')

const memeHolder = document.querySelector('.memes')


fetch('http://localhost:3000/memes')
.then(response => response.json())
.then(data => {
    console.log(data)
    data.forEach(memeToDom)
})



function memeToDom(data){
    const like = '😁'
    const dislike = '😡'

    const memeContainer = document.createElement('div')
    memeContainer.className = 'meme-container'
    const imageTag = document.createElement('img')
    const button = document.createElement('button')

    button.innerHTML = data.like ? like : dislike
    imageTag.src = data.url

    button.addEventListener('click', (evt) => {
        button.innerHTML = button.innerHTML === like ? dislike : like
    })

    memeContainer.append(imageTag, button)

    imageTag.style.height = 400
    imageTag.style.width = 400

    memeHolder.append(memeContainer)
}

