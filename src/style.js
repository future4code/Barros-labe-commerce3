import styled from 'styled-components'

//Estilização dno app.js
export const ContainerGeral = styled.section `
    font-family: Arial, Helvetica, sans-serif;
    margin: 30px 60px;
`


//COMPONENTE PRODUTOS
export const Produto = styled.section `
    display: flex;
    flex-direction: column;
    gap: 5px;
    border: 1px solid black;
    padding: 15px;
    align-items: center;
    button {
        width: 50%;
        font-size: 16px;
        cursor: pointer;
    }
    img {
        width: 50%;
    }
`


export const ContainerProdutosCarrinho = styled.section `
    display: flex;
    gap: 20px;
    section {
        display: flex;
        flex-direction: column;
        aside {
            display: flex;
            justify-content: space-between;
            margin: 0 60px;
            p {
                margin-top: 20px;
            }
        }
        div {
            display: grid;
            grid-template-columns: 40% 40%;
            margin-left: 30px;
            gap: 20px;
            padding: 20px 40px;
        }
    }
`











//COMPONENTE FILTROS













//COMPONENTE CARRINHO


















