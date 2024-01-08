import React from 'react'
import style from "./productCard.module.css"
import Sold from '../soldOut/Sold'

export default function ProductCard(props) {
  const isSold = props.productData.details.every(detail => detail.stock === 0);
  const blurClass = isSold ? style.blur : null;
  
  return (
    <div className={style.card}>
      <div className={`${style.imageSec} ${blurClass}`}><img src={`http://localhost:5000/${props.productData.images[0]}`} alt="Product" /></div>
      <div className={style.details}>
        <span className={`${blurClass} ${style.title}`}>
          {props.productData.name}
        </span>
        <span className={`${style.priceCard} ${blurClass}`}>${props.productData.price}</span>
        {
          isSold ? <span className={style.soldPan}><Sold /></span> : null
        }
      </div>
    </div>
  )
}