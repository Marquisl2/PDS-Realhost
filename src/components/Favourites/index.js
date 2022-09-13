import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteToFav } from '../../Redux/Actions';
import style from "./favourites.module.css"

const Favourites = () => {

    const favs = useSelector(state=>state.Favourites)
    console.log(favs)

    const dispatch = useDispatch()

    const handleDeleteFav =(e)=>{
        dispatch(deleteToFav(e))
        console.log("------------------", favs)
    }

    return (
        <div className={style.all}>
        <div className={style.containBtn}>
        <Link to={"/"}>

      <button>Volver</button>
        </Link>
        </div>
      <div className={style.nav}>
        <h2>Favoritos</h2>
        <div className={style.ic}>
        </div>
      </div>

      {
        !favs.length ?
        <div>
                <div>
                    <h2>
                        No hay productos agregados a favoritos!
                    </h2>
                </div>
            </div>
            :
            <div className={style.containerCards}>
        {favs &&
            favs.map((e) => (
            <div className={style.containerCard} key={e.id}>
              <div className={style.containerTitle}>
              {e.name?
              <p>{e.name}</p>
              :
              <p>{e.title}</p>
              }
              </div>
              <div className={e.name?style.containerImg :style.containerImg1}>
                <img  className={style.img} src={e.background_image?e.background_image: e.image} alt={"img"} />
              </div>
              <div className={style.containerDetails}>
              <div className={style.containI} onClick={()=>handleDeleteFav(e)}>

                <i class="fa-solid fa-trash"></i>
              </div>
              </div>
            </div>
          ))}
      </div>
      }

      
    </div>
    );
}

export default Favourites;
