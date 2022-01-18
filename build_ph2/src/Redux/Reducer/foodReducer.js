const initialState = {
    foods:[]
}

const foodReducer = (state= initialState, action) => {

    switch(action.type){
        case 'init':
            console.log('food reducer')
            return{...state, foods:[...action.payload]}
        case 'update':
            return {}

        case 'addFood':
            return{...state, foods:[...state.foods, action.payload]}
        case 'delete':
            const newFoods = state.foods.filter(e => e.id !== action.payload)
            console.log(newFoods,'newFood')
            return {...state, foods:[...newFoods]}
        
        default:
            return state
        
    }
}

export default foodReducer




