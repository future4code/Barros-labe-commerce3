import React, {useState} from 'react'
import {Produtos} from './Produtos'
import {ContainerFiltrosProdutos} from '../style'



export function Filtros() {
    const [filtroValorMin, setFiltroValorMin] = useState('')
    const [filtroValorMax, setFiltroValorMax] = useState('')
    const [filtroBuscaNome, setFiltroBuscaNome] = useState('')
    const [quantProdutosDisponiveis, setQuantProdutosDisponiveis] = useState(6)



    return (
        <ContainerFiltrosProdutos>
            <form>
                <h2>Filtro:</h2>
                
                <label>Valor mínimo:</label>
                <input type="text" value={filtroValorMin} onChange={e => setFiltroValorMin(e.target.value)}/>

                <label>Valor máximo:</label>
                <input type="text" value={filtroValorMax} onChange={e => setFiltroValorMax(e.target.value)}/>

                <label>Busca por nome:</label>
                <input type="text" value={filtroBuscaNome} onChange={e => setFiltroBuscaNome(e.target.value)}/>
            </form>

            <Produtos valorMin={filtroValorMin} setValorMin={setFiltroValorMin} valorMax={filtroValorMax} setValorMax={setFiltroValorMax} buscaNome={filtroBuscaNome} quantidade={quantProdutosDisponiveis} setQuantidade={setQuantProdutosDisponiveis}/>
        </ContainerFiltrosProdutos>
    )   
}