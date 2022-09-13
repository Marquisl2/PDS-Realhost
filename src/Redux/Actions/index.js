export const GAME_DETAILS = "GAME_DETAILS"

export const getGames = ()=>{
    return {
        type: "GET_GAMES"
    }
}

export const getProducts = ()=>{
    return {
        type: "GET_PRODUCTS"
    }
}

export const addToFav = (e)=>{
    return {
        type: "ADD_FAV",
        payload: e
    }
}

export const deleteToFav = (e)=>{
    return {
        type: "DELETE_FAV",
        payload: e
    }
}



