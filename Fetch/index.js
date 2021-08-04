const products = document.querySelector('.products')
const form = document.querySelector('#prod-form')

// GET --> Read / SHOW
// POST ==> create
// PUT / patch ==> Update
// DELETE ==> deleting

console.log(data)

form.addEventListener('submit',(evt) => {
    evt.preventDefault()
    console.log('hi')
    let {title, price, descr, category,image } = evt.target

    fetch('http://localhost:3000/items',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            title:title.value,
             price:price.value,
             descr:descr.value,
             category: category.value,
             image:image.value
        })
    })
    .then(res => res.json())
    .then(data => createProducts(data))
})


// read
// data.forEach((elem) => createProducts(elem))
// data.forEach(createProducts)



fetch(`http://localhost:3000/items/${21}`,{
    method:'PUT',
    headers:{
        'Content-Type':'application/json'
    },
    body: JSON.stringify({
        "title": "horse",
        "price": "3200",
        "descr": "fast",
        "category": "animal",
        "image": "hhh",
    })
})
.then(res => res.json())
.then(console.log)


// read fetch
fetch('http://localhost:3000/items')
.then(res => res.json())
.then(data => {
    data.forEach(createProducts)
})


function createProducts({id,title,price,description, category, image}){
    const productDiv = document.createElement('div')
    productDiv.className = 'product-container'
    const titleTag = document.createElement('p')
    titleTag.className = 'product-title'
    const priceTag = document.createElement('p')
    priceTag.className = 'product-price'
    const categoryTag = document.createElement('p')
    categoryTag.className = 'product-category'
    const descTag = document.createElement('p')
    descTag.className = 'product-description'
    const imageTag = document.createElement('img')
    imageTag.className = 'product-image'
    const button = document.createElement('button')
    button.innerHTML = 'Delete'
    button.className = 'product-button'

    //delete
    button.addEventListener('click', (e) => {
        // productDiv.remove()
        // e.target.parentElement.remove()

        //delete fetch
        fetch(`http://localhost:3000/items/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(() => e.target.parentElement.remove())
    })



    titleTag.innerHTML = title
    priceTag.innerHTML = price
    categoryTag.innerHTML = category
    descTag.innerHTML = description
    imageTag.src = image

    productDiv.append(imageTag, titleTag, priceTag, categoryTag, descTag, button)

    products.append(productDiv)
}
































































































// GET 'http://localhost:3000/items' Read
// Get  `http://localhost:3000/items/${id}` Show
// POST 'http://localhost:3000/items' Create
// PUT  `http://localhost:3000/items/${id}` Update
// DELETE `http://localhost:3000/items/${id}`Delete

//creating object POST
// fetch('http://localhost:3000/items',{
//     method:'POST',
//     headers:{
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         title:'Macbook',
//         price:'100',
//         description:'Very very useful',
//         category:'Electronics',
//         image:'N/A'
//     })
// })
// .then(res => res.json())
// .then(data => console.log(data))




// read fetch
// fetch(`http://localhost:3000/items/${2}`)
// .then(res => res.json())
// .then(data => console.log(data))

// // update fetch
// fetch(`http://localhost:3000/items/${33}`,{
//     method:'PUT',
//     headers:{
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         title:'Macbook charger',
//         price:'100',
//         description:'Very very useful',
//         category:'Electronics',
//         image:'N/A'
//     })
// })
// .then(res => res.json())
// .then(data => console.log(data))

// delete fetch
// fetch(`http://localhost:3000/items/${35}`,{
//     method:'DELETE'
// })
