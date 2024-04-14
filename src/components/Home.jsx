import React from 'react'
import ProductList from './ProductList'
import Product from './Product'

const Home = () => {
    return (
        <div>
            <ProductList />
            {/* <Product /> */}
        </div>
    )
}


// const ProductList = ({ imgScr, title, price }) => {
//     return (
//         <div className='productCard'>
//             <img src={imgScr} alt="" />
//             <div>
//                 <h3>{title}</h3>
//                 <h5>{price}</h5>
//             </div>
//             <div>
//                 <button>Add To Cart</button>
//             </div>
//         </div>
//     )
// }

export default Home
