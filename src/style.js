import styled from 'styled-components'

//Estilização do app.js
export const ContainerGeral = styled.section `
    font-family: Arial, Helvetica, sans-serif;
`


//COMPONENTE PRODUTOS
export const Produto = styled.section `
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.267);
    padding: 0 0 15px 0;
    h3 {
        text-align: center;
        font-size: 16px;
        margin-top: 20px;
        padding: 0 12px;
    }
    p {
        font-size: 14px;
        margin: 15px 0;
    }
    button {
        font-size: 14px;
        width: 50%;
        border-radius: 10px;
        border: none;
        padding: 8px 0;
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
            background-color: rgb(226, 226, 226);
            width: 86%;
            p {
                margin-left: 30px;
                margin-top: 27px;
            }
            select {
                padding: 8px;
                width: 120px;
            }
        }
        div {
            display: grid;
            grid-template-columns: 30% 30% 30%;
            justify-content: center;
            gap: 30px;
            padding: 20px;
        }
    }
`




//COMPONENTE FILTROS
export const ContainerFiltrosProdutos = styled.section `
    display: flex;
    form {
        display: flex;
        flex-direction: column;
        gap: 8px;
        background-color: rgb(226, 226, 226);
        padding: 30px 30px;
        min-height: 90vh;
        h3 {
            padding: 10px 20px 35px 20px;
            height: 5vh;
            text-align: center;
            font-size: 24px;
        }
        label {
            margin-top: 15px;
        }
        input {
            height: 3vh;
            border-radius: 1vh;
            border: none;
            padding: 5px;
        } 
    }
`



//COMPONENTE CARRINHO

export const SectionCarrinho = styled.section `
    background-color: rgb(226, 226, 226);
    padding: 30px 30px;
    min-height: 90vh;
    min-width: 200px;
    h3 {
        padding: 10px 20px 35px 20px;
        height: 5vh;
        text-align: center;
        font-size: 24px;
    }
`

export const ProdutoCarrinho = styled.section `
    border: 1px solid black;
    width: 150px;
    margin-bottom: 20px;
    padding: 15px;
    p {
        font-size: 16px;
        text-align: center;
        margin-bottom: 10px;
    }
    button {
        font-size: 16px;
        padding: 5px;
        cursor: pointer;
    }
`
















