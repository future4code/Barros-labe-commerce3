import React, {useEffect, useState} from 'react'
import {ContainerProdutosCarrinho} from '../style'
import {MockDeDados} from '../MockDeDados'
import {Carrinho} from './Carrinho'
import { ProdutoUnico } from './ProdutoUnico'




export function Produtos(props) {
    
    const [sort, setSort] = useState("crescente")
    const [arrayProdCarrinho, setArrayProdCarrinho] = useState([])
    const [somaCarrinho, setSomaCarrinho] = useState(0)
    

    //Ao clicar no botão de adicionar ao carrinho
    const handleOnClick = (nomeSelecionado) => { 
        
        let arrayAtualizado = arrayProdCarrinho

        if (arrayProdCarrinho.length === 0) {
            arrayAtualizado = MockDeDados.filter((item) => nomeSelecionado === item.nome)
            setSomaCarrinho(somaCarrinho + (arrayAtualizado[0].preco))
            return setArrayProdCarrinho([...arrayAtualizado])
        } else {
            for (let i = 0; i < arrayAtualizado.length; i++) {
                if (nomeSelecionado === arrayAtualizado[i].nome) {
                    arrayAtualizado[i].quantidade += 1
                    setSomaCarrinho(somaCarrinho + arrayAtualizado[i].preco)
                    return setArrayProdCarrinho([...arrayAtualizado])
                }
                if (i === arrayAtualizado.length - 1) {
                    arrayAtualizado = MockDeDados.filter((item) => nomeSelecionado === item.nome)
                    setSomaCarrinho(somaCarrinho + arrayAtualizado[arrayAtualizado.length-1].preco)
                    return setArrayProdCarrinho([...arrayProdCarrinho, ...arrayAtualizado])
                }
            }
        }    
    }


    //Salvando os dados do carrinho no local storage
    localStorage.setItem("soma", ""+somaCarrinho)
    localStorage.setItem("arrayProdutos", ""+arrayProdCarrinho)
    
    useEffect(() => {
        localStorage.getItem("soma")
        localStorage.getItem("arrayProdutos")
    }, [somaCarrinho, arrayProdCarrinho])


    //Renderizar todos os produtos (quando nenhum filtro é usado)
    const todosProdutos = () => {
        let ordem = []
        switch (sort) {
            case "crescente":
                ordem = MockDeDados.sort((a, b) => a.preco - b.preco)
                break

            case "decrescente":
                ordem = MockDeDados.sort((a, b) => b.preco - a.preco)
                break

            default:
                ordem = MockDeDados.sort((a, b) => a.preco - b.preco)
                break
        }
        return ordem.map((item, index) => {
            return <ProdutoUnico key={index} imagem={item.imagem} nome={item.nome} preco={item.preco} click={() => handleOnClick(item.nome)}/>
        })
    }


    //Renderizar alguns produtos (baseado nos filtros usados)
    const algunsProdutos = () => {
        if (props.valorMin === '') {
            props.setValorMin(0)
        }
        
        if (props.valorMax === '') {
            props.setValorMax(Infinity)
        }

        const produtosFiltrados = MockDeDados.filter ((item) => {
            return item.preco >= props.valorMin && item.preco <= props.valorMax && item.nome.includes(props.buscaNome)
        })
        
        props.setQuantidade(produtosFiltrados.length)

        let produtosOrdenados = []
        switch (sort) {
            case "crescente":
                produtosOrdenados = produtosFiltrados.sort((a, b) => a.preco - b.preco)
                break
            case "decrescente":
                produtosOrdenados = produtosFiltrados.sort((a, b) => b.preco - a.preco)
                break
            default:
                produtosOrdenados = produtosFiltrados.sort((a, b) => a.preco - b.preco)
                break
        }



        return produtosOrdenados.map((item, index) => {
            return <ProdutoUnico key={index} imagem={item.imagem} nome={item.nome} preco={item.preco} click={() => handleOnClick(item.nome)}/>
        })
    }

    
     
        return (
        <ContainerProdutosCarrinho>
            <section>
                <aside>
                    <p>Quantidade de produtos: {props.quantidade}</p>
                
                    <div>
                        <label htmlFor={"ordenacao"}>Ordenação:</label>
                        <select name={"ordenacao"} onChange={e => setSort(e.target.value)}>
                            <option value={"crescente"}>Crescente</option>
                            <option value={"decrescente"}>Decrescente</option>
                        </select>
                    </div>
                </aside>
            
                <div>
                    {(props.valorMin === '' && props.valorMax === '' && props.buscaNome === '') && todosProdutos()}
                    {(props.valorMin !== '' || props.valorMax !== '' || props.buscaNome !== '') && algunsProdutos()}
                </div>
            </section>

            <Carrinho arrayProdutos={arrayProdCarrinho} setArrayProdutos={setArrayProdCarrinho} soma={somaCarrinho} setSoma={setSomaCarrinho}/>
       </ContainerProdutosCarrinho>
    )
}