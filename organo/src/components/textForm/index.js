import './textForm.css'

const TextForm = (props) => {
    const placeholderDiff = `${props.placeholder}`;
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={placeholderDiff}></input> 
        </div>
    )
}

export default TextForm