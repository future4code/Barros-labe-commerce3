import React from "react"
import { ProdAddCarrinho } from "./ProdAddCarrinho"
import {SectionCarrinho} from "../style"

export function Carrinho(props) {
  
    const remover = props.remover

    return (
        <SectionCarrinho>
            <h3>CARRINHO</h3>
            {
            (props.arrayProdutos.length > 0) &&
            (props.arrayProdutos.map((item, index) => <ProdAddCarrinho key={index} nome={item.nomeAbr} quantidade={item.quantidade} handleRemover={() => remover(item.nome)}/>))
            }
            <p>Valor Total: R${props.soma}.000,00</p>
        </SectionCarrinho>
    )
}
