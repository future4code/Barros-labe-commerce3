import React, {useState, useEffect} from 'react'
import {ContainerProdutosCarrinho, ContainerSuperior, ContainerProdutos} from '../style'
import {MockDeDados} from '../MockDeDados'
import {Carrinho} from './Carrinho'
import { ProdutoUnico } from './ProdutoUnico'




export function Produtos(props) {

    const [sort, setSort] = useState("crescente")
    
    //Função adicionada dentro do useState para garantir que a renderização dos produtos salvos no carrinho permaneça depois de recarregar a página
    const [arrayProdCarrinho, setArrayProdCarrinho] = useState(() => {
        const arraySalvo = JSON.parse(localStorage.getItem("arrayProdutos"))
        return arraySalvo || []
    })
    

    const [somaCarrinho, setSomaCarrinho] = useState(() => {
        const somaSalva = localStorage.getItem("soma")
        return somaSalva || 0
    })
    
    
    //UseEffect para salvar no local storage as informações do carrinho
    useEffect(()=> {
        localStorage.setItem("soma", ""+somaCarrinho)
        localStorage.setItem("arrayProdutos", JSON.stringify(arrayProdCarrinho))
    }, [somaCarrinho, arrayProdCarrinho])


    //Ao clicar no botão de adicionar ao carrinho
    const handleOnClick = (nomeSelecionado) => { 
        
        if (arrayProdCarrinho.length === 0) {
            let arrayAtualizado = MockDeDados.filter((item) => nomeSelecionado === item.nome)
            setSomaCarrinho(parseInt(somaCarrinho) + parseInt((arrayAtualizado[0].preco)))
            return setArrayProdCarrinho([...arrayAtualizado])

        } else {
            let arrayAtualizado = arrayProdCarrinho
            for (let i = 0; i < arrayAtualizado.length; i++) {
                if (nomeSelecionado === arrayAtualizado[i].nome) {
                    arrayAtualizado[i].quantidade += 1
                    setSomaCarrinho(parseInt(somaCarrinho) + parseInt(arrayAtualizado[i].preco))
                    return setArrayProdCarrinho([...arrayAtualizado])
                }
                if (i === arrayAtualizado.length - 1) {
                    arrayAtualizado = MockDeDados.filter((item) => nomeSelecionado === item.nome)
                    setSomaCarrinho(parseInt(somaCarrinho) + parseInt(arrayAtualizado[arrayAtualizado.length-1].preco))
                    return setArrayProdCarrinho([...arrayProdCarrinho, ...arrayAtualizado])
                }
            }
        }
    }

    
    //Removendo itens do carrinho
    const handleRemover = (nomeDeletado) => {
        const arrayAtualizado = arrayProdCarrinho.filter(item => {
            if (nomeDeletado === item.nome) {
                item.quantidade = 1
            }
            return item.nome !== nomeDeletado
        })
        setSomaCarrinho(arrayAtualizado.reduce((prev, atual) => prev + (atual.preco * atual.quantidade), 0))
        return setArrayProdCarrinho(arrayAtualizado)
    }  


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
                <ContainerSuperior>
                    <p>Quantidade de produtos: {props.quantidade}</p>
                
                    <label htmlFor={"ordem"}>Ordem:</label>
                    <select name={"ordem"} onChange={e => setSort(e.target.value)}>
                        <option value={"crescente"}>Crescente</option>
                        <option value={"decrescente"}>Decrescente</option>
                    </select>
                </ContainerSuperior>
            
                <ContainerProdutos>
                    {(props.valorMin === '' && props.valorMax === '' && props.buscaNome === '') && todosProdutos()}
                    {(props.valorMin !== '' || props.valorMax !== '' || props.buscaNome !== '') && algunsProdutos()}
                </ContainerProdutos>
            </section>

            <Carrinho remover={handleRemover} soma={somaCarrinho} arrayProdutos={arrayProdCarrinho}/>
        </ContainerProdutosCarrinho>
    )
}
