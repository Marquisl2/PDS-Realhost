import React from 'react';
import style from "./landing.module.css"
import {Link} from "react-router-dom"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getGames, getProducts } from '../../Redux/Actions';

const Landing = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getGames())
        dispatch(getProducts())
    },[])
    return (
        <div>
            <h2>Proceso de selección - Marcos Laurens</h2>
            <div>
            <Link to={"/games"}>

                <div>
                    <button className={style.btn}>Juegos</button>
                </div>
            </Link>
            <Link to={"/products"}>
                <div>
                    <button className={style.btn}>Productos</button>
                </div>
            </Link>
            <Link to={"/favourites"}>
                <div>
                    <button className={style.btn}>Favoritos</button>
                </div>
            </Link>
            </div>
        </div>
    );
}

export default Landing;
