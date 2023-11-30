import {useState} from "react";
import PostInputBlog from "../../components/postInputBlog/PostInputBlog";
import PostTextAreaBlog from "../../components/postTextAreaBlog/PostTextAreaBlog";
import {useInsertDocument} from "../../hooks/useInsertDocument";
import FormButton from "../../components/formButton/FormButton";
import {useNavigate} from "react-router-dom";
import {User} from "../../domain/user";
import './edit-post.css'

type Props = {
    user: User,
}

const EditPost = (props: Props) => {
    const {user} = props;

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [body, setBody] = useState('');
    const [tags, setTags] = useState([]);

    const {insertDocument} = useInsertDocument('createPosts');
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();

        //validate url
        try {
            new URL(image);
        } catch (error) {
            console.log('a imagem precisa ser uma url')
        }

        const tagsArray = tags.split(',').map((tag) => tag.trim().toLowerCase())

        if (!title || !image || !tags || !body) {
            console.log('por favor preencha todos os campos')
        }

        insertDocument({
            title,
            image,
            body,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName
        })

        navigate('/')
    }

    return (
        <div className='edit-post'>
            <h2 className='edit-post-header'>Criar post</h2>
            <p className='edit-post-header'>Compartilhe momentos</p>
            <form className='edit-post-form'>
                <label>
                    <div className='edit-post-label'>
                        <span>Título</span>
                        <PostInputBlog name='title' placeholder='Coloque um título do post' onChange={(e) => setTitle(e.target.value)} value={title}/>
                    </div>
                    <div className='edit-post-label'>
                        <span>URL da imagem</span>
                        <PostInputBlog name='image' placeholder='Insira uma imagem' onChange={(e) => setImage(e.target.value)} value={image}/>
                    </div>
                    <div className='edit-post-label'>
                        <span>Conteúdo</span>
                        <PostTextAreaBlog name='body' placeholder='Insira um conteúdo do post' onChange={(e) => setBody(e.target.value)} value={body}/>
                    </div>
                    <div className='edit-post-label'>
                        <span>Tags</span>
                        <PostInputBlog name='tags' placeholder='Insira as tags separadas por vírgula' onChange={(e) => setTags(e.target.value)} value={tags}/>
                    </div>

                </label>
            </form>
            <div className='edit-post-button'>
                <FormButton text='criar post' onClick={handleSubmit}/>
            </div>
        </div>
    )
}
export default EditPost;