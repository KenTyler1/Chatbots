import React, {useState, useContext} from 'react'
import Menu from '../../assets/svg/bars-solid.svg'
import Close from '../../assets/svg/times-solid.svg'
import Cart from '../../assets/svg/cart.svg'
import {Link} from 'react-router-dom'
import {Link as Links} from 'react-scroll'
import {DataContext} from './DataProvider'

export default function Header() {
    const [menu, setMenu] = useState(false)
    const value = useContext(DataContext)
    const [cart] = value.cart

    const toggleMenu = () =>{
        setMenu(!menu)
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header>
            <div className="menu" onClick={toggleMenu}>
                <img src={Menu} alt="" width="30" />
            </div>

            <div className="logo">
                <h1><Link to="/products">BEACHES</Link></h1>
            </div>
            <ul style={styleMenu}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Tours</Link></li>
                <li><Links to="footer">About</Links></li>
                <li><Links to="footer">Contact</Links></li>
                <li><Link to="#">Login / Register</Link></li>
                <li onClick={toggleMenu}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>
            </ul>

            <div className="cart-icon">
                <span>{cart.length}</span>
                <Link to="/cart">
                    <img src={Cart} alt="" width="30" />
                </Link>
            </div>
            
      </header>
    )
}
