import {Link} from "react-router-dom";
import './about.css';

const About = () => {
    return(
        <div className='about'>
           <h2>Sobre o App</h2>
           <p>Este projeto consiste em um blog feito com React no front-end e firebase no back-end</p>
           <Link to='/posts/create'>Criar post</Link>
        </div>
    )
}
export default About;