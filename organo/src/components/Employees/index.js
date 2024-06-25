import './employees.css'

const Employees = (props) => {
    return (
        <div className='employee'>
            <div className='cabecalho'>
                <img src={props.img} alt={props.name} />
            </div>
            <div className='footer'>
                <h4>{props.name}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default Employees