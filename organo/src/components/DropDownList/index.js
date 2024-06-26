import './dropDownList.css'

const List = (props) => {

    return (
        <div className="dropDownList">
            <label>{props.label}</label>
            <select onChange={event => props.OnAlter(event.target.value)} required={props.obrigatorio} value={props.valueR}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default List