import {useState} from "react";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import {IconButton} from "@mui/material";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import './blog-button.css';

type Props = {
    isPassword?: boolean,
}

const BlogButton = (props: Props) => {
    const { isPassword = false } = props;
    const [ showPassword, setShowPassword ] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <>
            {isPassword ? (
                <div className='content-password'>
                    <HttpsOutlinedIcon className='icon'  />
                    <input className='input'
                           type={showPassword ? 'text' : 'password'}
                           required
                           placeholder='Senha'
                    />
                    <IconButton className='icon-visibility' onClick={handleClickShowPassword}>
                        {showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon/>}
                    </IconButton>
                </div>
            ) : (
                <div className='content-email'>
                    <EmailOutlinedIcon className='icon' />
                    <input className='input'
                           type='text'
                           required
                           placeholder='Email'
                    />
                </div>
            )
            }
        </>
    )
}
export default BlogButton;