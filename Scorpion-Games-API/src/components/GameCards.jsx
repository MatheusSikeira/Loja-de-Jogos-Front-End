import React from "react";
import style from "./GameCards.module.css";

const GameCards = ({ nome, desenvolvedor, plataforma, preco, imagem }) => {
  return (
    <div className={style.card}>
      <img src={imagem} alt={nome} className={style.gameImage} loading="lazy" />
      <div className={style.cardContent}>
        <h3>{nome}</h3>
        <p>Desenvolvedor: {desenvolvedor}</p>
        <p>Plataforma: {plataforma}</p>
        <p className={style.price}>Preço: R$ {parseFloat(preco).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default GameCards;
