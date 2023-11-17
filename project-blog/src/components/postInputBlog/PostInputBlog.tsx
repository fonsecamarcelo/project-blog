import './post-input-blog.css';

type Props = {
    placeholder: string,
    value?: any,
    onChange: any;
    name: string;
}

const PostInputBlog = (props: Props) => {
    const {placeholder, value, onChange, name} = props;

    return(
        <div className='post-input-container'>
            <input
                className='post-input-blog'
                type="text"
                name={name}
                required
                placeholder={placeholder}
                value={value}
                onChange={onChange}/>
        </div>
    )
}
export default PostInputBlog;