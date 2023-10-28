import './register.css'
import BlogButton from "../../components/blogButton/BlogButton";

const Register = () => {
    return (
        <div>
            <h1>Cadastre-se para interagir</h1>
            <form>
                <label>
                    <span>Nome:</span>
                    <BlogButton />
                    <BlogButton isPassword/>
                </label>
            </form>
        </div>
    )
}
export default Register;