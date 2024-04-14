import React from 'react'


const Product = ({ imgScr, title, price, handler }) => {

    return (
        <div className='productCard'>
            <img src={imgScr} alt="" />
            <div>
                <h3>{title}</h3>
                <h5>{price}</h5>
            </div>
            <div>
                <button handler={() => addToCart(productDetails)}>Add To Cart</button>
            </div>
        </div >
    )
}

export default Product
