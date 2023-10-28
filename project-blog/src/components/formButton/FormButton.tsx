import './form-button.css';

type Props = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const FormButton = (props: Props) => {
    const { onClick } = props;
    return (
        <>
            <button onClick={onClick}>Registre-se</button>
        </>
    )
}
export default FormButton;