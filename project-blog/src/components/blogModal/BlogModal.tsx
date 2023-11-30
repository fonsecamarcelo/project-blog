import {IconButton} from "@mui/material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {User} from "../../domain/user";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {useAuth} from "../../hooks/useAuth";
import './blog-modal.css';

type Props = {
    isOpen: boolean,
    user: User,
    setOpen: (isOpen: boolean) => void,
}

const BlogModal = (props: Props) => {
    const { logOut } = useAuth();
    const {isOpen, user, setOpen, } = props;

    const userName = user.displayName;
    const userEmail = user.email;

    if (isOpen) {
        return (
            <div className='blog-modal-container'>
                <div className='modal'>
                    <div className='blog-modal-close-button'>
                        <AccountCircleOutlinedIcon fontSize='large'/>
                        <IconButton onClick={(() => setOpen(!isOpen))}>
                            {<CloseOutlinedIcon/>}
                        </IconButton>
                    </div>

                    <div className='blog-modal-list-user'>
                        <span>{`Usuário: ${userName}`}</span>
                    </div>

                    <div className='blog-modal-list-user'>
                        <span>{`Email: ${userEmail}`}</span>
                    </div>

                    <div className='blog-modal-list-user'>
                        <button onClick={logOut}>Sair</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default BlogModal;