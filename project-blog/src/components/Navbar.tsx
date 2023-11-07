import { NavLink } from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import './navbar.css'

type Props = {
    user: any;
}

const Navbar = (props: Props) => {
    const {user} = props;
    const { logOut } = useAuth();

    return(
        <nav className='navbar'>
            <div className='logo'>
                Social<span>blog</span>
            </div>
            <ul className='links-list'>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                {!user && (
                    <>
                        <li>
                            <NavLink to='/login'>Entrar</NavLink>
                        </li>
                        <li>
                            <NavLink to='/register'>Cadastrar</NavLink>
                        </li>
                    </>
                )}

                {user && (
                    <>
                        <li>
                            <NavLink to='/posts/create'>Novo post</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard'>Dashboard</NavLink>
                        </li>
                    </>
                )}
                <li>
                    <NavLink to='/about'>Sobre</NavLink>
                </li>
                {user && (
                    <li>
                        <button onClick={logOut}>Sair</button>
                    </li>
                )}
            </ul>
        </nav>
    )
}
export default Navbar;