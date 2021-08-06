class Meme{
    constructor(data){
        this.name = data.name
        this.url = data.url
        this.like = data.like
    }


    render(){
        const div = document.createElement('div')

        div.innerHTML = `
        <img class='meme-image' src=${this.url}>
        <button id='like'>${this.like ? '😁' : '😡'}</button>
        <button id='delete'>Delete</button>
        `
        div.className = "meme-container"

        return div
    }
}