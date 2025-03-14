import React from "react";
import style from "./createGame.module.css";
import { useState } from "react";
import Input from "../form/Input.jsx";
import Select from "../form/Select.jsx";
import Button from "../form/Button.jsx";

const CreateGame = () => {

    /* CRIA A ESTRUTURA DE STATE PARA OS DADOS DE LIVRO */
    const[book, setBook] = useState({});

     // captura de dados dos elementos de input
    function handlerChangeBook(event){
        setBook({...book, [event.target.name] : event.target.value });
        console.log(book);
    }

    // captura de dados dos elementos de select
    function handlerChangeCategory(event){
        setBook({...book, category : event.target.options[event.target.selectIndex].text})
    }

    //Envio dos dados para a API
    function submit(event){
        event.preventDefault();
        console.log
    } 

    return(
        <section className={style.create_book_container}>

            <h1>Cadastro do jogo: </h1>

            <form onSubmit={submit}>

                <Input type="text"
                    name="txt_jogo"
                    id="tct_jogo"
                    placeholder="Digite o jogo desejado: "
                    text="Insira um jogo: "
                    handlerChange={handlerChangeBook}
                />

                <Input type="text"
                    name="txt_criador"
                    id="tct_criador"
                    placeholder="Digite o criador: "
                    text="Digite o nome do criador: "
                    handlerChange={handlerChangeBook}
                />

                <Input type="text"
                    name="txt_descricao"
                    id="tct_jogo"
                    placeholder="Digite a descrição do jogo: "
                    text="Insira a descrição do jogo: "
                    handlerChange={handlerChangeBook}
                />

                <Select
                    name="slc_categorias"
                    id="slc_categorias"
                    text="Categorias do jogo: "
                    handlerChange={handlerChangeBook}
                />

                <Button
                    title="salvar"
                />
            </form>
        </section>
    )
}

export default CreateGame;