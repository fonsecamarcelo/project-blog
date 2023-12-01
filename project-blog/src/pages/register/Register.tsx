import BlogInput from "../../components/blogInput/BlogInput";
import FormButton from "../../components/formButton/FormButton";
import {useState} from "react";
import {useAuth} from "../../hooks/useAuth";
import {toast} from "react-toastify";
import './register.css'

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { createUser } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validate = (email) => {
            let re = /\S+@\S+\.\S+/;
            return re.test(email);
        }

        const user = {
            name,
            email,
            password,
        }

        if (name.length === 0 ) {
            toast.error('O campo do nome deve ser preenchido');
        } else if (email.length === 0 ) {
            toast.error('O campo do email deve ser preenchido');
            console.log('voce deve preencher todos os campos')
        } else if (password.length === 0) {
            toast.error('O campo de senha deve ser preenchido');
            console.log('voce deve preencher todos os campos')
        } else if (confirmPassword.length === 0 ) {
            toast.error('O campo de confirmaçao de senha deve ser preenchido');
            console.log('voce deve preencher todos os campos')
        } else if (password !== confirmPassword) {
            toast.error('As senhas precisam ser iguais');
            console.log('As senhas precisam ser iguais');
        } else if (!validate(email)) {
            toast.error('email invalido');
        }

        const response = await createUser(user);

        console.log(response);
    }

    return (
        <div>
            <h1 className='register-header'>Cadastre-se para interagir</h1>
            <p className='register-header'>Crie seu usuário e compartilhe momentos</p>
            <form className='register-form'>
                <label>
                    <div className='register-label'>
                        <span>Nome:</span>
                        <BlogInput
                            isEmail={false}
                            value={name}
                            onChange={(e) => setName(e.target.value)}

                        />
                    </div>
                    <div className='register-label'>
                        <span>Email:</span>
                        <BlogInput
                            isEmail
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='register-label'>
                        <span>Senha:</span>
                        <BlogInput
                            isPassword
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='register-label'>
                        <span>Confirme sua senha:</span>
                        <BlogInput
                            isPassword
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                </label>
            </form>
            <div className='register-button-form'>
                <FormButton text='Entrar' onClick={handleSubmit}/>
            </div>
        </div>
    )
}
export default Register;