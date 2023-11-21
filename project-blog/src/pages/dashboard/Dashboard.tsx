import {useAuthValue} from "../../context/AuthContext";
import {Link} from "react-router-dom";
import ButtonAbout from "../../components/buttonAbout/buttonAbout";
import {useFetchDocuments} from "../../hooks/useFetchDocuments";
import {useDeleteDocument} from "../../hooks/useDeleteDocument";
import './dashboard.css';

const Dashboard = () => {
    const {user} = useAuthValue()
    const uid = user.uid;

    const {documents: posts, loading} = useFetchDocuments('posts', null, uid)

    const {deleteDocument} = useDeleteDocument('posts');

    if (loading) {
        return <span>Carregando...</span>
    }

    return (
        <div className='dashboard-container'>
            <h2>Dashboard</h2>
            <p>Gerencie seus posts</p>
            {posts && posts.length === 0 ? (
                <div className='noposts'>
                    <p>Não foram encontrados posts</p>
                    <Link className='noposts-button' to='/posts/create'>
                        <ButtonAbout/>
                    </Link>
                </div>
            ) : (
                <>
                    <div className='post-header-dashboard'>
                        <span>Título</span>
                        <span>Ações</span>
                    </div>

                    {posts.map((post) => <div className='post-row' key={post.id}>
                        <p>{post.title}</p>
                        <div>
                            <Link to={`/posts/${post.id}`}>
                                Ver
                            </Link>
                            <Link to={`/posts/${post.id}`}>
                                Editar
                            </Link>
                            <button onClick={() => deleteDocument(post.id)}>
                                Excluir
                            </button>
                        </div>
                    </div> )}
                </>
            )}

        </div>
    )
}
export default Dashboard;