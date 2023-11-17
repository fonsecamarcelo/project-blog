import './form-button.css';

type Props = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    text?: string;
}

const FormButton = (props: Props) => {
    const { onClick, text = 'Registre-se' } = props;
    return (
        <>
            <button
                className='form-button'
                onClick={onClick}>{text}</button>
        </>
    )
}
export default FormButton;