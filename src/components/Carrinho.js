import React from "react"
import { ProdAddCarrinho } from "./ProdAddCarrinho"


export function Carrinho(props) {


    const handleRemover = (nomeDeletado) => {
        const arrayAtualizado = props.arrayProdutos.filter(item => item.nome !== nomeDeletado)
        props.setSoma(arrayAtualizado.reduce((prev, atual) => prev + (atual.preco * atual.quantidade), 0))
        return props.setArrayProdutos(arrayAtualizado)
    }


    return (
        <section>
            <h2>Carrinho:</h2>
            {
            (props.arrayProdutos.length > 0) &&
            (props.arrayProdutos.map((item, index) => <ProdAddCarrinho key={index} nome={item.nome} quantidade={item.quantidade} handleRemover={() => handleRemover(item.nome)}/>))
            }
            <p>Valor Total: R${props.soma}.000,00</p>
        </section>
    )
        }
        