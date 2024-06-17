import TextForm from "../textForm";
import "./formulario.css";

const Formulario = () => {
    return (
        <section className="form">
            <form>
                <h2>Preencha os dados para criar os cards do colaborador</h2>
                <TextForm label="Nome" placeholder="Digite seu nome" />
                <TextForm label="Cargo" placeholder="Digite seu cargo" />
                <TextForm label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    );
};

export default Formulario;
