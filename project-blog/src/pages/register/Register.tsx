import BlogInput from "../../components/blogInput/BlogInput";
import FormButton from "../../components/formButton/FormButton";
import './register.css'

const Register = () => {
    return (
        <div>
            <h1 className='register-header'>Cadastre-se para interagir</h1>
            <p className='register-header'>Crie seu usuário e compartilhe momentos</p>
            <form className='register-form'>
                <label>
                    <div className='register-label'>
                        <span>Nome:</span>
                        <BlogInput isEmail={false}/>
                    </div>
                    <div className='register-label'>
                        <span>Email:</span>
                        <BlogInput isEmail/>
                    </div>
                    <div className='register-label'>
                        <span>Senha:</span>
                        <BlogInput isPassword/>
                    </div>
                    <div className='register-label'>
                        <span>Confirme sua senha:</span>
                        <BlogInput isPassword/>
                    </div>
                </label>
            </form>
            <div className='button-form'>
                <FormButton />
            </div>
        </div>
    )
}
export default Register;