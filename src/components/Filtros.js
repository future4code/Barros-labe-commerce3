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
                <input type="text" placeholder={"Digite o valor mínimo"} value={filtroValorMinimo} onChange={e => setFiltroValorMinimo(e.target.value)}/>

                <label> Valor Máximo:</label>
                <input type="text" placeholder={"Digite o valor máximo"} value={filtroValorMaximo} onChange={e => setFiltroValorMaximo(e.target.value)}/>

                <label> Buscar por nome:</label>
                <input type="text" placeholder={"Digite o nome do produto"} value={filtroBuscaPorNome} onChange={e => setFiltroBuscaPorNome(e.target.value)}/>
            </form>

            <Produtos valorMin={filtroValorMinimo} setValorMin={setFiltroValorMinimo} valorMax={filtroValorMaximo} setValorMax={setFiltroValorMaximo}
            buscaNome={filtroBuscaPorNome} quantidade={quantidadeProdutosDisponiveis} setQuantidade={setQuantidadeProdutosDisponiveis}/>
        </ContainerFiltrosProdutos>
    )
}