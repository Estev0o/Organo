import './textForm.css'

const TextForm = (props) => {
    const placeholderDiff = `${props.placeholder}`

    const OnKeysUp = (event) => {
        props.OnAlter(event.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valueR} onChange={OnKeysUp} required={props.obrigatorio} placeholder={placeholderDiff}></input> 
        </div>
    )
}

export default TextForm