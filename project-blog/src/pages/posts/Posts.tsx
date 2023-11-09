import {useState} from "react";
import PostInputBlog from "../../components/postInputBlog/PostInputBlog";
import PostTextAreaBlog from "../../components/postTextAreaBlog/PostTextAreaBlog";
import './posts.css';

const Posts = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [body, setBody] = useState('');
    // const [formError, setFormError] = useState('');
    const [tags, setTags] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h2 className='post-header'>Criar post</h2>
            <h2 className='post-header'>Compartilhe momentos</h2>
            <form className='post-form' onSubmit={handleSubmit}>
                <label>
                    <div className='post-label'>
                        <span>Título</span>
                        <PostInputBlog name='title' placeholder='Coloque um título do post' onChange={(e) => setTitle(e.target.value)} value={title}/>
                    </div>
                    <div className='post-label'>
                        <span>URL da imagem</span>
                        <PostInputBlog name='image' placeholder='Insira uma imagem' onChange={(e) => setImage(e.target.value)} value={image}/>
                    </div>
                    <div className='post-label'>
                        <span>Conteúdo</span>
                        <PostTextAreaBlog name='body' placeholder='Insira um conteúdo do post' onChange={(e) => setBody(e.target.value)} value={body}/>
                    </div>
                    <div className='post-label'>
                        <span>Tags</span>
                        <PostInputBlog name='tags' placeholder='Insira as tags' onChange={(e) => setTags(e.target.value)} value={tags}/>
                    </div>
                </label>
            </form>
        </div>
    )
}
export default Posts;