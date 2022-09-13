import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { Link } from 'react-router-dom';
import { addToFav, deleteToFav, getProducts } from '../../Redux/Actions';
import style from "./products.module.css"
import loadingLogo from "../../imgs/loading.png"


const Products = () => {
    const products = useSelector(s=>s.products)
    console.log(products)

    const dispatch = useDispatch()

    const favs = useSelector(state=>state.Favourites)
    let ids = favs.map(e=>e.id)
    console.log(2,favs)

  const handleAddToFav = (e)=>{
    const filtered = favs.find(obj=> e.id === obj.id)
    if(filtered) return
    dispatch(addToFav(e))
  }

  useEffect(()=>{
    if(!products.length) dispatch(getProducts())
  },[products.length,dispatch])

  if(!products.length){

    return (
      <div className={style.contenedorLoading}>
        <div className={style.loading}>
          <img className={style.imgload} alt="loading" src={loadingLogo} />
        </div>
      </div>
    )
  }else{
    
    return (
        <div className={style.all}>
            <div className={style.containBtn}>
            <Link to={"/"}>
    
          <button>Volver</button>
            </Link>
            </div>
          <div className={style.nav}>
            <h2>Productos</h2>
            <div className={style.ic}>
            <Link className={style.li} to={"/favourites"}>

              <i class="fa-solid fa-heart"></i>
            </Link>
            </div>
          </div>
    
          <div className={style.containerCards}>
            {products &&
                products.map((e) => (
                <div className={style.containerCard} key={e.id}>
                  <div className={style.containerTitle}>
                  <p>{e.title}</p>
                  </div>
                  <div className={style.containerImg}>
                    <img  className={style.img} src={e.image} alt={"img"} />
                  </div>
                  <div className={style.containerDetails}>
                  {
                !ids.includes(e.id) ?
                <div className={style.ha} onClick={()=>handleAddToFav(e)}>
              

                <i  class="fa-regular fa-heart"></i>
              </div>
              :
              <div onClick={()=>dispatch(deleteToFav(e))} className={style.he}>

              <i class="fa-solid fa-heart"></i>
              </div>
              }
                  </div>
                </div>
              ))}
          </div>
        </div>
      )
    };
}

export default Products;
