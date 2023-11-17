import {Link} from "react-router-dom";
import './post-detail.css'

type Props = {
    post: any,
}

const PostDetail = (props: Props) => {
    const {post} = props;
    return (
        <div className='post-detail'>
            <img src={post.image} alt={post.title}/>
            <h2>{post.title}</h2>
            <p className='post-detail-createdBy'>{`@${post.createdBy}`}</p>
            <div className='post-detail-tags'>
                {post.tagsArray.map((tag) => {
                    <p key={tag}>
                        <span>#</span>
                        {tag}
                    </p>
                })}
            </div>
            <Link to={`/posts/${post.id}`}>Ler</Link>
        </div>
    )
}
export default PostDetail;