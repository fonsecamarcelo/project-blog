import {useQuery} from "../../hooks/useQuery";
import {useFetchDocuments} from "../../hooks/useFetchDocuments";
import PostDetail from "../../components/PostDetail";
import {Link} from "react-router-dom";
import './search.css';

const Search = () => {
    const query = useQuery();
    const search = query.get('q');

    const {documents: posts} = useFetchDocuments('posts', search);

    return (
        <div className='search-container'>
            <h2>Search</h2>
            <div>
                {posts && posts.length === 0 && (
                    <div className='noposts'>
                        <p>Não foram encontrados posts a partir da sua busca...</p>
                        <Link to='/'> Voltar</Link>
                    </div>
                )}
                {posts && posts.map((post) => (
                    <PostDetail key={post.id} post={post}/>
                ))}
            </div>
        </div>
    )
}
export default Search;