import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../redux/cartSlice';
import toast from 'react-hot-toast';

const Cart = () => {

    const cartProducts = useSelector(state => state.cart);
    const dispatch = useDispatch()

    const removeItem = (id) => {
        dispatch(remove(id));
        toast.error('Item Removed');
    }


    return (
        <>
            <div className="cartProductList">
                {cartProducts.map((i) => (
                    <div className='cart-productCard' key={i.id}>
                        <img src={i.image} alt="" />
                        <h4>{i.title}</h4>
                        <h6>{i.price}</h6>
                        <button onClick={() => removeItem(i.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Cart
