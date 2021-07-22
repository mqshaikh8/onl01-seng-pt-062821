// User does something --> click
// we process it (receiving, sending data to backend then we receive)
// we display it to the user

// node(htmlElement).addEventlistener('event(click)', callback )
//callback =  (evt) => {whatever I want to do onClick}
// console.log('hi')\
// document.addEventListener('DOMContentLoaded', () => {
    
// })

const tacoButton = document.getElementById('taco')
const emojiList = document.querySelector('#blobs')
const emojiForm = document.querySelector('#emoji-form')

//form
emojiForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    console.log()
    const newEmoji = evt.target['emoji'].value
    renderEmoji(newEmoji)
})



//taco
tacoButton.addEventListener('click', (evt) => renderEmoji('🌮'))


function renderEmoji(emoji){

    const li = document.createElement('li')
    li.addEventListener('click', () => li.remove())
    li.innerHTML = emoji 
    emojiList.appendChild(liø)

}
