console.log(data)

const products = document.querySelector('.products')
const select = document.querySelector('#category')
let filterTag = ''
select.addEventListener('change',(evt) => {
    filterTag = evt.target.value
    products.innerHTML = ''
    filteredArray(data).forEach(elem => createProduct(elem))
})


function filteredArray(arr){
    
    if(filterTag === "men's"){
        return arr.filter(elem => elem.category === "men's clothing")
    }
    else if(filterTag === "jewelery"){
        return arr.filter(elem => elem.category === "jewelery")
    }
    else if(filterTag === "electronics"){
        return arr.filter(elem => elem.category === "electronics")
    }
    else if(filterTag === "women's"){
        return arr.filter(elem => elem.category === "women's clothing")
    }
    else{
        return arr
    }
}

filteredArray(data).forEach(elem => createProduct(elem))


function createProduct({title,price,description, category, image}){
    const div = document.createElement('div')
    div.className = 'product-container'
    const titleDiv = document.createElement('p')
    titleDiv.className = 'product-title'
    const priceDiv = document.createElement('p')
    priceDiv.className = 'product-price'
    const categoryDiv = document.createElement('p')
    categoryDiv.className = 'product-category'
    const descriptionDiv = document.createElement('p')
    descriptionDiv.className = 'product-description'
    const imageDiv = document.createElement('img')
    imageDiv.className = 'product-image'

    titleDiv.innerHTML = title
    priceDiv.innerHTML = price
    categoryDiv.innerHTML = category
    descriptionDiv.innerHTML = description
    imageDiv.src = image

    div.append(titleDiv, priceDiv, categoryDiv, imageDiv, descriptionDiv)
    products.appendChild(div)
}