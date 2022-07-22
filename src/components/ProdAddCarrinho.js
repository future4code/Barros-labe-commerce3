import React from 'react'


export function ProdAddCarrinho (props ) {
    return(
        <div>
            <p> 1x </p>
            <p> Produto: {props.nome}</p>
            <button onClick={props.handleRemover}>Remover</button>
        </div>
    )
}