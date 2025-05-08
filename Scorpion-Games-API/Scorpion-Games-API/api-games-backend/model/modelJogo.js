const Sequelize = require('sequelize');
const connection = require('../database/database');

/*
PARAMETROS DO MÉTODO DEFINE
1 - NOME DA TABELA - STRING
2 - OBJETO JSON: 
                NOME DO CAMPO DA TABELA
                TIPO DE DADO DO CAMPO DA TABELA
                REGRAS DO CAMPO DA TABELA (NULL, NOT NULL, DEFAULT...ETC)
*/
const modelJogo = connection.define(
    'tbl_jogos',
    {
        id_jogo: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        desenvolvedor: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        plataforma: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        preco: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        imagem_url: {
            type: Sequelize.STRING(500),
            allowNull: true
        },
        usuario_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        cod_categoria: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }
);

//modelJogo.sync({ force: true }); // use com cuidado: recria a tabela
module.exports = modelJogo;
