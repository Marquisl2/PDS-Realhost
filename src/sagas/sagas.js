import {call, put, takeEvery} from "redux-saga/effects"
import axios from "axios"



function dataGames(){
    return axios.get("https://api.rawg.io/api/games?key=0058865c922b4acc981187640bab918e")
    .then(response => response.data.results)
}

function* getGames(){
    const result = yield call(dataGames)
    
    yield put({
        type: "SAGA_GAMES",
        payload: result
    })
}

function dataProducts(){
    return axios.get("https://fakestoreapi.com/products")
    .then(response => response.data)
}

function* getProducts(e){
    const result = yield call(dataProducts)

    yield put({
        type: "SAGA_PRODUCTS",
        payload: result
    })
}



function* mySaga(){
    yield takeEvery("GET_GAMES",getGames)
    yield takeEvery("GET_PRODUCTS",getProducts)
}

export default mySaga