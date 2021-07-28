// Create read update destroy
// Get Post
// static url
// dynamic url

//get fetch
// Read ==> crud

fetch('http://localhost:3000/items')
.then(res => res.json())
.then(data =>{

     console.log(data,'data')
})


//post --> create product
// create
const obj = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
      },
    body: JSON.stringify({
        title:'Mouse Pad',
        price: 5,
        description:'A blue square plastic',
        image:''
    }) 
}

fetch('http://localhost:3000/items',obj)
.then(res => res.json())
.then(data => console.log(data))


fetch(`http://localhost:3000/items/${22}`,{
    method:'DELETE'
})



// delete

