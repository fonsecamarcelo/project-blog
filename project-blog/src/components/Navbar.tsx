import { NavLink } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
    return(
        <nav className='navbar'>
            <div className='logo'>
                Social<span>blog</span>
            </div>
            <ul className='links-list'>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>Sobre</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;