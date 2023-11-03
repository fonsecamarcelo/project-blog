import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
    onClick: any,
}

const BlogToastify = (props: Props) => {

    const { onClick } = props;

    const notify = () => {
        toast.error('🦄 Wow so easy!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    return (
        <div>
            <button onClick={notify}>Notify!</button>
            <ToastContainer
            />
        </div>
    );
}
export default BlogToastify;