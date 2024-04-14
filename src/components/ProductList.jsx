import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './Loader';
import { useDispatch } from 'react-redux';
import { add } from '../redux/cartSlice';
import toast from 'react-hot-toast';



const apiUrl = 'https://fakestoreapi.com/products';



const ProductList = () => {

    const dispatch = useDispatch();

    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);


    useEffect(() => {

        axios.get(apiUrl).then((i) => {
            setData(i.data);
            setLoader(false);

        }).catch((err) => {
            console.log('Error: ', err);
        })

    }, []);


    const addCart = (data) => {
        console.log(data);
        dispatch(add(data));
        toast.success('Item Added to Cart');
    }


    return (
        <>
            <div className='ProductList mt-5'>
                {
                    loader ? (<Loader />) : (
                        data.map((data) => (
                            <div className='productCard' key={data.id}>
                                <img src={data.image} alt="img" style={{ width: '100%' }} />
                                <h4>{data.title}</h4>
                                <h5>{data.price}</h5>
                                <button onClick={() => { addCart(data) }}>Add To Cart</button>
                            </div>
                        ))
                    )
                }
            </div>
        </>
    )
}


// const ProductCard = ({ imgScr, title, price }) => {
//     const addCart = (ProductList) => {
//         console.log(ProductList);
//     }

//     return (
//         <div className='productCard'>
//             <img src={imgScr} alt="img" style={{ width: '100%' }} />
//             <h4>{title}</h4>
//             <h5>{price}</h5>
//             <button onClick={() => { addCart(ProductList) }}>Add To Cart</button>
//         </div>
//     )

// }


export default ProductList
