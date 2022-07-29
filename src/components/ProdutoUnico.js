import React from 'react'
import {Produto} from '../style'

export function ProdutoUnico(props) {
    return (
        <Produto>
            <img src={props.imagem} alt={props.nome}/>
            <h3>{props.nome}</h3>
            <p>Preço: R${props.preco}.000,00</p>
            <button onClick={props.click}>Comprar</button>
        </Produto>
    )
}