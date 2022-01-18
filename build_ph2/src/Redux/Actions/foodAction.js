export const init = (foodArr) => {
    console.log('food init action')
    return {
        type: 'init',
        payload:foodArr
    }
}

export const addFood = (foodObj) => {
    return {
        type: 'addFood',
        payload:foodObj
    }
}

export const update = (foodObj) => {
    return {
        type: 'addFood',
        payload: foodObj
    }
}

export const deleteFood = (id) => {
    return {
        type: 'delete',
        payload: id
    }
}
