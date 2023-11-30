import { NavLink } from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import {User} from "../domain/user";
import {IconButton} from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {useState} from "react";
import BlogModal from "./blogModal/BlogModal";
import './navbar.css'


type Props = {
    user: User;
}

const Navbar = (props: Props) => {
    const {user} = props;
    const [ open, setOpen ] = useState<boolean>(false);

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

            {user && (
                <>
                        <IconButton onClick={() => setOpen(!open)} className='testenav'>
                            {<AccountCircleOutlinedIcon fontSize='large'/>}
                            <BlogModal isOpen={open} setOpen={setOpen} user={user} open={open}/>
                        </IconButton>
                </>
            )}
        </nav>
    )
}
export default Navbar;