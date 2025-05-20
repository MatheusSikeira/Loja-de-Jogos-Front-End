import React from "react";
import style from "./GameCards.module.css";
import Button from "./form/Button.jsx";
import { Link } from 'react-router-dom';

const GameCards = ({ nome, desenvolvedor, plataforma, preco, imagem, id_jogo, onDelete }) => {
  const DeleteGame = async () => {
    try {
      const response = await fetch(`http://localhost:5000/excluirJogo/${id_jogo}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      });

      const data = await response.json();
      console.log("Deletado com sucesso:", data);
      if (onDelete) onDelete(id_jogo);
    } catch (e) {
      console.log("Erro ao deletar:", e);
    }
  };

  return (
    <div className={style.card}>
      <img src={imagem} alt={nome} className={style.gameImage} loading="lazy" />
      <div className={style.cardContent}>
        <h3>{nome}</h3>
        <p>Desenvolvedor: {desenvolvedor}</p>
        <p>Plataforma: {plataforma}</p>
        <p className={style.price}>Preço: R$ {parseFloat(preco).toFixed(2)}</p>

        <div className={style.buttons}>
          <Link to={`/gamedetail/${id_jogo}`}>
            <Button label="Detalhes" />
          </Link>
          <Button label="Excluir" onClick={DeleteGame} />
        </div>
      </div>
    </div>
  );
};

export default GameCards;
