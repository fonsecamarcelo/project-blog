import {useState} from "react";
import FormButton from "../../components/formButton/FormButton";
import {Link, useNavigate} from "react-router-dom";
import PostInputBlog from "../../components/postInputBlog/PostInputBlog";
import {useFetchDocuments} from "../../hooks/useFetchDocuments";
import PostDetail from "../../components/PostDetail";
import './home.css'

const Home = () => {
    const [query, setQuery] = useState('');
    const {documents: posts, loading} = useFetchDocuments('createPosts')
    console.log({posts})

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (query) {
            return navigate(`/search?q=${query}`)
        }
    }

    const renderPosts = () => {
        let component;

        if (posts && posts.length === 0) {
            component = (
                <div className='noposts'>
                    <p>Não foram encontrados posts</p>
                    <Link to='/posts/create'><FormButton text='Criar post'/></Link>
                </div>
            )
        } else {
            component = posts.map((post) => <PostDetail key={post.id} post={post}/>
            )
        }
        return component;
    }

    return(
        <div className='home'>
            <h1>Veja os posts mais recentes!</h1>
            <form className='search-form'>
                <PostInputBlog name='tags' placeholder='Ou busque por tags...' onChange={(e) => setQuery(e.target.value)}/>
                <div>
                    <FormButton onClick={handleSubmit} text='pesquisar'/>
                </div>
            </form>
            <div>
                {loading ? (
                    <span>Carregando</span>
                ) : renderPosts()}
            </div>
        </div>
    )
}
export default Home;