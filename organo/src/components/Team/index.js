import './team.css'

const Team = (props) => {
    const cssTeams = {backgroundColor: props.secondaryColor};
    return (        
        <section className='team' style={cssTeams}>
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
        </section>
    )
}

export default Team