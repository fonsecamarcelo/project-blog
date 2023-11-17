import './post-textarea-blog.css';

type Props = {
    name?: string,
    onChange?: any,
    value?: any,
    placeholder?: string,
}

const PostTextAreaBlog = (props: Props) => {
    const {name, value, onChange, placeholder} = props;

    return (
        <>
            <textarea
                className='post-textarea '
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            >
            </textarea>
        </>
    )
}
export default PostTextAreaBlog;