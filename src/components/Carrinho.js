import React from 'react'
import { ProdAddCarrinho } from './ProdAddCarrinho'


export function Carrinho(props) {
  
    

    const somaValoresArray = props.arrayProdutos.reduce((prev, atual) => parseInt(prev) + parseInt(atual.preco), 0)

    const handleRemover = (nomeDeletado) => {
        const arrayAtualizado = props.arrayProdutos.filter(item => item.nome !== nomeDeletado)
        return props.setArrayProdutos(arrayAtualizado)
    }


    return (
        <section>
            <h2>Carrinho:</h2>
            {
            (props.arrayProdutos.length > 0) &&
            (props.arrayProdutos.map((item, index) => <ProdAddCarrinho key={index} nome={item.nome} handleRemover={() => handleRemover(item.nome)}/>))
            }
            <p>Valor Total: R${somaValoresArray},00</p>
        </section>
    )
}