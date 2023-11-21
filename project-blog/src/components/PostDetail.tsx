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
                  return (
                      <p key={tag}>
                        <span>#</span>
                        {tag}
                    </p>)
                })}
            </div>
        </div>
    )
}
export default PostDetail;