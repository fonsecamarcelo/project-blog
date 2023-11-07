import BlogInput from "../../components/blogInput/BlogInput";
import FormButton from "../../components/formButton/FormButton";
import {useState} from "react";
import {useAuth} from "../../hooks/useAuth";
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { logIn, error, loading } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validate = (email) => {
            let re = /\S+@\S+\.\S+/;
            return re.test(email);
        }

        const user = {
            email,
            password,
        }

        if (email.length === 0 ) {
            console.log('voce deve preencher todos os campos')
        } else if (password.length === 0) {
            console.log('voce deve preencher todos os campos')
        } else if (!validate(email)) {
            console.log('email invalido')
        }

        const response = await logIn(user);

        console.log(response);
    }
    return (
        <>
            <h1 className='login-header'>Entrar</h1>
            <p className='login-header'>Faça o login para interagir!</p>
            <form className='login-form'>
                <label>
                    <div className='login-label'>
                        <span>Email:</span>
                        <BlogInput
                            isEmail
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='login-label'>
                        <span>Senha:</span>
                        <BlogInput
                            isPassword
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </label>
            </form>
            <div className='login-button-form'>
                <FormButton text='Entrar' onClick={handleSubmit}/>
            </div>
        </>

    )
}
export default Login;