function init(){
    fetch('http://localhost:3000/memes')
    .then(response => response.json())
    .then(data => {
        console.log(data)

        memeHolder.innerHTML = ''

        data.forEach(memeToDom)
    })
}