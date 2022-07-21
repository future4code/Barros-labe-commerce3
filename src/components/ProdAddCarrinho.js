import React from 'react'

export function ProdAddCarrinho(props) {
    return (
        <div>
            <p>{props.quantidade}x</p>
            <p>{props.nome}</p>
            <button onClick={props.handleRemover}>Remover</button>
        </div>
    )
}