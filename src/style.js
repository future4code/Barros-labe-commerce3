import styled from 'styled-components'

//Estilização dno app.js
export const ContainerGeral = styled.section `
    font-family: Arial, Helvetica, sans-serif;
    margin: 30px 50px;
`


//COMPONENTE PRODUTOS
export const Produto = styled.section `
    display: flex;
    flex-direction: column;
    gap: 15px;
    border: 1px solid black;
    box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.267);
    padding: 0 0 25px 0;
    align-items: center;
    h3 {
        text-align: center;
        padding: 0 12px;
    }
    button {
        width: 50%;
        font-size: 16px;
        border-radius: 10px;
        border: none;
        padding: 10px 0;
        background-color: rgb(204, 204, 204);
        cursor: pointer;
        :hover {
            background-color: rgba(204, 204, 204, 0.479);
        }
    }
    img {
        width: 100%;
    }
`


export const ContainerProdutosCarrinho = styled.section `
    display: flex;
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        aside {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            padding: 0 30px;
            background-color: rgba(204, 204, 204, 0.479);
            width: 75%;
            p {
                margin-top: 22px;
            }
            select {
                padding: 8px;
                width: 120px;
            }
        }
        div {
            display: grid;
            grid-template-columns: 40% 40%;
            justify-content: center;
            gap: 40px;
            padding: 20px;
        }
    }
`

export const ContainerFiltrosProdutos = styled.section `
    display: flex;
    form {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
`







//COMPONENTE FILTROS















//COMPONENTE CARRINHO


















