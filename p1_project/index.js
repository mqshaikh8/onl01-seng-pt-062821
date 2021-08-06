console.log('hi')

const memeHolder = document.querySelector('.memes')
document.querySelector('.header').addEventListener('click', init)


function memeToDom(data){
    const like = '😁'
    const dislike = '😡'
    const meme = new Meme(data).render()
    // console.log(meme)

    meme.querySelector('#like').addEventListener('click', (e) => {
        e.target.innerHTML = e.target.innerHTML === like ? dislike : like
    })
    meme.querySelector('#delete').addEventListener('click', (e) => e.target.parentElement.remove())

    memeHolder.append(meme)

    meme.addEventListener('click', (e) => {
        memeHolder.innerHTML = ''
        memeHolder.append(new Meme(data).render())
    })
}


// function memeToDom(data){


//     const memeContainer = document.createElement('div')
//     memeContainer.className = 'meme-container'
//     const imageTag = document.createElement('img')
//     const likebutton = document.createElement('button')
//     const deleteButton = document.createElement('button')
//     deleteButton.innerHTML = 'Delete'

//     likebutton.innerHTML = data.like ? like : dislike
//     imageTag.src = data.url

//     deleteButton.addEventListener('click', (e) => {
//         e.stopPropagation()
//         memeContainer.remove()
//     })
//     // deleteButton.addEventListener('click', (e) => e.target.parentElement.remove())

//     likebutton.addEventListener('click', (evt) => {
//         evt.stopPropagation()
//         console.log(1)
//         likebutton.innerHTML = likebutton.innerHTML === like ? dislike : like
//     })

   
//     memeContainer.append(imageTag, likebutton, deleteButton)

//     imageTag.style.height = 400
//     imageTag.style.width = 400

//     memeHolder.append(memeContainer)

//     memeContainer.addEventListener('click', () =>{
       
//         memeHolder.innerHTML = ''
//         const div = document.createElement('div')
//         const img = document.createElement('img')
//         const p = document.createElement('p')

//         img.src = data.url
//         p.innerHTML = data.name
//         p.className = 'meme-name'
//         div.append(p, img)
//         memeHolder.append(div)

//     })
// }



// the meme div to clear
// replaced by the single selected meme pic


init()
