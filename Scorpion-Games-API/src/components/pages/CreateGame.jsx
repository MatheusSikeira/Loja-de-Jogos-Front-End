import React, { useState, useEffect } from "react";
import style from "./createGame.module.css";
import Input from "../form/Input.jsx";
import Select from "../form/Select.jsx";
import Button from "../form/Button.jsx";
import { data } from "react-router-dom";

const CreateGame = () => {
  const [game, setGame] = useState({
    nome: '',
    desenvolvedor: '',
    cod_categoria: '', // guarda o id da categoria
    plataforma: '',
    preco: '',
    imagem_url: '',
    usuario_id: 1 // ajuste conforme necessário
  });

  const [categories, setCategories] = useState([]);
  
  // Exemplo fixo de plataformas - pode vir de API também
  const plataformas = [
    { value: 'PC', label: 'PC' },
    { value: 'PlayStation', label: 'PlayStation' },
    { value: 'Xbox', label: 'Xbox' },
    { value: 'Nintendo Switch', label: 'Nintendo Switch' },
    { value: 'Mobile', label: 'Mobile' }
  ];

  const handlerChangeGame = (event) => {
    setGame({
      ...game,
      [event.target.name]: event.target.value
    });
  };

  const submit = async (event) => {
    if (!game.nome || !game.desenvolvedor || !game.cod_categoria || !game.plataforma || !game.preco) {
        alert("Preencha todos os campos obrigatórios.");
        return;
      }      
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/inserirJogo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(game)
      });

      if (!response.ok) throw new Error('Erro ao cadastrar jogo');

      const data = await response.json();
      console.log("Jogo cadastrado:", data);
      alert('Jogo cadastrado com sucesso!');

      setGame({
        nome: '',
        desenvolvedor: '',
        cod_categoria: '',
        plataforma: '',
        preco: '',
        imagem_url: '',
        usuario_id: 1
      });

    } catch (error) {
      console.error("Erro:", error);
      alert('Erro ao cadastrar jogo');
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:5000/listagemCategorias');
        const data = await response.json();
        // Mapeia para formato { value, label } esperado pelo Select
        const categoriasFormatadas = Array.isArray(data?.data) ? data.data.map(cat => ({
            value: cat.cod_categoria,
            label: cat.nome_categoria
          })) : [];          
        setCategories(categoriasFormatadas);
      } catch (error) {
        console.error("Erro ao carregar categorias:", error);
      }
    };
    fetchCategories();
  }, []);
  return (
    <section className={style.create_game_container}>
      <h1>Cadastro do Jogo</h1>

      <form onSubmit={submit}>

        <Input
          type="text"
          name="nome"
          id="nome"
          placeholder="Digite o nome do jogo"
          text="Nome do Jogo:"
          value={game.nome}
          handlerChange={handlerChangeGame}
        />

        <Input
          type="text"
          name="desenvolvedor"
          id="desenvolvedor"
          placeholder="Digite o desenvolvedor"
          text="Desenvolvedor:"
          value={game.desenvolvedor}
          handlerChange={handlerChangeGame}
        />

        {/* Select para Categorias */}
        <Select
          name="cod_categoria"
          id="cod_categoria"
          text="Categoria:"
          value={game.cod_categoria}
          handlerChange={handlerChangeGame}
          options={categories}
        />

        {/* Select para Plataformas */}
        <Select
          name="plataforma"
          id="plataforma"
          text="Plataforma:"
          value={game.plataforma}
          handlerChange={handlerChangeGame}
          options={plataformas}
        />

        <Input
          type="number"
          name="preco"
          id="preco"
          placeholder="Digite o preço"
          text="Preço (R$):"
          value={game.preco}
          handlerChange={handlerChangeGame}
          step="0.01"
        />

        <Input
          type="url"
          name="imagem_url"
          id="imagem_url"
          placeholder="Cole a URL da imagem"
          text="URL da Imagem:"
          value={game.imagem_url}
          handlerChange={handlerChangeGame}
        />

        <Button type="submit" title="Salvar" />
      </form>
    </section>
  );
};
export default CreateGame;