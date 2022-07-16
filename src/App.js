import React from 'react';
import {ContainerGeral} from './style'
import {Filtros} from './components/Filtros'
import {Carrinho} from './components/Carrinho'
import {Produtos} from './components/Produtos'

function App() {
  return (
    <ContainerGeral>
      <Filtros/>
      <Produtos/>
      <Carrinho/>
    </ContainerGeral>
  )
}

export default App;
