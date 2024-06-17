import './dropDownList.css'

const List = (props) => {

    return (
        <div className="dropDownList">
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => {
                    return <option key={item} >{item}</option>
                })}
            </select>
        </div>
    )
}

export default List