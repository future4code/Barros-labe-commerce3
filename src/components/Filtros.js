import React, {useState} from "react";
import {Produtos} from "./Produtos";
import {ContainerFiltrosProdutos} from "../style";

export function Filtros() {
    
    const [filtroValorMinimo, setFiltroValorMinimo] = useState("")
    const [filtroValorMaximo, setFiltroValorMaximo] = useState("")
    const [filtroBuscaPorNome, setFiltroBuscaPorNome] = useState("")
    const [quantidadeProdutosDisponiveis, setQuantidadeProdutosDisponiveis] = useState(6)


    return (
        <ContainerFiltrosProdutos>
            <form>
                <h3>FILTRAR PRODUTOS</h3>

                <label> Valor mínimo:</label>
                <input type="text" value={filtroValorMinimo} onChange={e => setFiltroValorMinimo(e.target.value)}></input>

                <label> Valor Máximo:</label>
                <input type="text" value={filtroValorMaximo} onChange={e => setFiltroValorMaximo(e.target.value)} ></input>

                <label> Buscar por nome:</label>
                <input type="text" value={filtroBuscaPorNome} onChange={e => setFiltroBuscaPorNome(e.target.value)}></input>

            </form>
            <Produtos valorMin={filtroValorMinimo} setValorMin={setFiltroValorMinimo} valormax={filtroValorMaximo} setValorMax={setFiltroValorMaximo}
            buscaNome={filtroBuscaPorNome} quantidade={quantidadeProdutosDisponiveis} setQuantidade={setQuantidadeProdutosDisponiveis}/>
        </ContainerFiltrosProdutos>
    )
}