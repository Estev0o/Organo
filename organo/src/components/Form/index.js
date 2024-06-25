import List from "../DropDownList";
import TextForm from "../textForm";
import Button from "../button";
import "./formulario.css";
import { useState } from "react";


const Formulario = (props) => {

    const save = (event) => {
        event.preventDefault()
        props.aoColaboradorCadastrado({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        })
    }

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    return (
        <section className="form">
            <form onSubmit={save}>
                <h2>Preencha os dados para criar os cards do colaborador</h2>
                <TextForm 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valueR={nome}
                    OnAlter={valueR => setNome(valueR)}
                />

                <TextForm 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valueR={cargo}
                    OnAlter={valueR => setCargo(valueR)}
                />
                
                <TextForm 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valueR={imagem}
                    OnAlter={valueR => setImagem(valueR)} 
                />
                <List 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}
                    valueR={time}
                    OnAlter={valueR => setTime(valueR)}
                />
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    );
};

export default Formulario;
