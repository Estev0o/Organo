import Employees from '../Employees';
import './team.css'

const Team = (props) => {
    const cssTeams = {backgroundColor: props.secondaryColor};
    return (        
        (props.colaboradores.length > 0) ? <section className='team' style={cssTeams}>
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( employee => <Employees name={employee.nome} cargo={employee.cargo} img={employee.imagem}/> )} 
            </div>
        </section>
        : ''
    )
}

export default Team