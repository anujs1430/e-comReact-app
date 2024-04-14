import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const cartProducts = useSelector(state => state.cart);

    return (
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/cart'}>Cart <span>{cartProducts.length}</span></Link>

        </nav>
    )
}

export default Navbar
