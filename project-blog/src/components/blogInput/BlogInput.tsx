import {useState} from "react";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import {IconButton} from "@mui/material";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import './blog-input.css';

type Props = {
    isPassword?: boolean,
    isEmail?: boolean,
    value?: any,
    onChange?: any,
}

const BlogInput = (props: Props) => {
    const { isPassword = false, isEmail = true, value, onChange } = props;
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
                           value={value}
                           onChange={onChange}
                    />
                    <IconButton className='icon-visibility' onClick={handleClickShowPassword}>
                        {showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon/>}
                    </IconButton>
                </div>
            ) : (
                <div className='content-email'>
                    {isEmail ?  <EmailOutlinedIcon className='icon' /> : <PersonOutlineOutlinedIcon className='icon'/>}
                    <input className='input'
                           type='text'
                           required
                           placeholder={isEmail ? 'Email' : 'Usuário'}
                           value={value}
                           onChange={onChange}
                    />
                </div>
            )
            }
        </>
    )
}
export default BlogInput;