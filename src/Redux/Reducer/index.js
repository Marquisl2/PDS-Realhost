

const initialState = {
    games: [],
    Favourites:[],
    products: [],
}


const reducer = (state=initialState, action)=>{
    console.log("asdda",action)
    switch(action.type){
        case "SAGA_GAMES":
            return {
                ...state,
                games: action.payload
            }
            case "SAGA_PRODUCTS":
                return {
                    ...state,
                    products: action.payload
                }
            case "ADD_FAV":
                return{
                    ...state,
                    Favourites: [...state.Favourites, action.payload]
                }
            case "DELETE_FAV":
                const result = state.Favourites.filter(e=> e.id !== action.payload.id)
                return{
                    ...state,
                    Favourites: result
                }
            
        default:
            return state
    }
}

export default reducer