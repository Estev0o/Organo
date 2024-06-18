import List from "../DropDownList";
import TextForm from "../textForm";
import Button from "../button";
import "./formulario.css";

const Formulario = () => {

    const teams = [
        'Programação',
        'Front-End',
        'Data Sciemce',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const save = (event) => {
        event.preventDefault()
    }

    return (
        <section className="form">
            <form onSubmit={save}>
                <h2>Preencha os dados para criar os cards do colaborador</h2>
                <TextForm obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <TextForm obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <TextForm label="Imagem" placeholder="Digite o endereço da imagem" />
                <List obrigatorio={true} label="Time" itens={teams}/>
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    );
};

export default Formulario;
