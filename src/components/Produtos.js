import React, {useState} from 'react'
import {ContainerProdutosCarrinho} from '../style'
import {MockDeDados} from '../MockDeDados'
import {Carrinho} from './Carrinho'
import { ProdutoUnico } from './ProdutoUnico'



export function Produtos(props) {
    
    const [arrayProdCarrinho, setArrayProdCarrinho] = useState([])
    
    
    //Ao clicar no botão de adicionar ao carrinho
    const handleOnClick = (nomeSelecionado) => {
        const arrayAtualizado = MockDeDados.filter((item) => {
            return nomeSelecionado === item.nome
        })
        return setArrayProdCarrinho([...arrayProdCarrinho, ...arrayAtualizado])
    }


    //Renderizar todos os produtos (quando nenhum filtro é usado)
    const todosProdutos = MockDeDados.map((item, index) => {
        return <ProdutoUnico key={index} imagem={item.imagem} nome={item.nome} preco={item.preco} click={() => handleOnClick(item.nome)}/>
    })


    //Renderizar alguns produtos (baseado nos filtros usados)
    const algunsProdutos = () => {
        if (props.valorMin === '') {
            props.setValorMin(0)
        }
        
        if (props.valorMax === '') {
            props.setValorMax(Infinity)
        }

        const produtosFiltrados = MockDeDados.filter ((item) => {
            return item.preco > props.valorMin && item.preco < props.valorMax && item.nome.startsWith(props.buscaNome)
        })
        

        const produtosFiltradosMapeados = produtosFiltrados.map ((item, index) => {
            return <ProdutoUnico key={index} imagem={item.imagem} nome={item.nome} preco={item.preco} click={() => handleOnClick(item.nome)}/>
        })

        props.setQuantidade(produtosFiltrados.length)
        return produtosFiltradosMapeados
    }


        
    return (
        <ContainerProdutosCarrinho>
            <section>
                <aside>
                    <p>Quantidade de produtos: {props.quantidade}</p>
                
                    <div>
                        <label>Ordenação:</label>
                        <select>
                            <option>Crescente</option>
                            <option>Decrescente</option>
                        </select>
                    </div>
                </aside>
            
                <div>
                    {(props.valorMin === '' && props.valorMax === '' && props.buscaNome === '') && todosProdutos}
                    {(props.valorMin !== '' || props.valorMax !== '' || props.buscaNome !== '') && algunsProdutos()}
                </div>
            </section>

            <Carrinho arrayProdutos={arrayProdCarrinho}/>
       </ContainerProdutosCarrinho>
    )
}