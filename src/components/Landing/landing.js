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
        <div className={style.all}>
            <h2>Proceso de selección - Marcos Laurens</h2>
            <div className={style.contain}>

                <div>
            <Link to={"/games"}>
                    <button className={style.btn}>Juegos</button>
            </Link>
                </div>
                <div>
            <Link to={"/favourites"}>
                    <button className={style.btn}>Favoritos</button>
            </Link>
                </div>
                <div>
            <Link to={"/products"}>
                    <button className={style.btn}>Productos</button>
            </Link>
                </div>
            </div>
        </div>
    );
}

export default Landing;
