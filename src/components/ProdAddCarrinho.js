import React from 'react'
import {ProdutoCarrinho} from '../style'


export function ProdAddCarrinho (props) {
    return(
        <ProdutoCarrinho>    
            <p>{props.quantidade}x</p>
            <p>{props.nome}</p>
            <button onClick={props.handleRemover}>Remover</button>
        </ProdutoCarrinho>
    )
}