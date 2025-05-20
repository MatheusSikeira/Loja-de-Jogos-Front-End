import { useState } from "react";
import styles from './home.module.css';

const Home = () => {
  // Array de estados individuais para cada accordion
  const [activeIndices, setActiveIndices] = useState(Array(5).fill(false));

  const toggleAccordion = (index) => {
    // Cria uma cópia do array de estados
    const newActiveIndices = [...activeIndices];
    // Inverte o estado apenas do accordion clicado
    newActiveIndices[index] = !newActiveIndices[index];
    setActiveIndices(newActiveIndices);
  };

  const accordionData = [
    {
      title: "Jogos de Ação",
      content:
        "Explore uma variedade de jogos de ação cheios de adrenalina!",
      image:[
        "./src/assets/COD.png",
        "./src/assets/battle.png",
      ],
      icon: "./src/assets/cage.png",
    },
    {
      title: "Jogos de RPG",
      content:
        "Viva aventuras épicas e faça suas escolhas para mudar o rumo da história.",
      image:[
        "./src/assets/witcher.png",
        "./src/assets/cyber.png"],
      icon: "./src/assets/liukang.png",
    },
    {
      title: "Jogos de Terror",
      content:
        "Vivencie histórias aterrorizantes e sombrias.",
      image: [
        "./src/assets/TEW.png",
        "./src/assets/re4.png",],
      icon: "./src/assets/noobsaibot.png",
    },
    {
      title: "Jogos de Estratégia",
      content:
        "Desafie sua mente com jogos estratégicos e táticas complexas.",
      image: [
        "./src/assets/baldur.png",
        "./src/assets/ff6.png",
      ],
      icon: "./src/assets/kunglau.png",
    },
    {
      title: "Jogos de Mundo Aberto",
      content:
        "Explore mundos vastos e descubra lugares novos.",
      image: [
        "./src/assets/cap1.png",
        "./src/assets/FAC.png",
      ],
      icon: "./src/assets/raiden.png",
    },
  ];

  // Componente Accordion com animação independente
  const Accordion = ({ item, index }) => {
    const isActive = activeIndices[index];
    
    // ID único para cada kunai baseado no índice
    const kunaiId = `kunai-${index}`;
    
    return (
      <div className={styles.accordion_container}>
        <div
          className={`${styles.grid_title} ${
            isActive ? styles.active : styles.inactive
          }`}
          onClick={() => toggleAccordion(index)}
        >
          <img
            src={item.icon}
            alt={item.title}
            className={styles.title_icon}
          />
          <h3>{item.title}</h3>
          <span className={styles.arrow}>
            <img
              id={kunaiId}
              src={isActive ? "./src/assets/kunai-up.png" : "./src/assets/kunai-down.png"}
              alt={isActive ? "Fechar" : "Abrir"}
              className={styles.kunai_icon}
              // Adiciona a classe de animação diretamente no elemento
              style={{ transform: isActive ? 'rotate(360deg)' : 'rotate(0deg)' }}
            />
          </span>
        </div>
        {isActive && (
          <div className={styles.accordion_content}>
            {item.image.map((image, imgIndex) => (
              <img
                key={imgIndex}
                src={image}
                alt={`${item.title} ${imgIndex + 1}`}
                className={styles.content_image}
              />
            ))}
            <p>{item.content}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className={styles.home_container}>
      <h1>Bem-vindo à loja de games Scorpion</h1>
      <p>"Get over here! Buy our games!"</p>
      
      <div className={styles.accordions_wrapper}>
        {accordionData.map((item, index) => (
          <div key={index} className={styles.accordion_item_wrapper}>
            <Accordion
              item={item}
              index={index}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;