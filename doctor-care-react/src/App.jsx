//falta crea a reponsividade para cada components
//quando tu vai editar o scss tu pode commentar meu codigo e refazer o estilo se dar muito trabalho so editar o sass do jeito que eu fiz
import React from 'react'
import Header from './components/header/Index'
import Servicos from './components/servicos/Index'
import Sobre from './components/sobre/Index'
import Contato from './components/contato/Index'
import Footer from './components/footer/Index'

const App = () => {
  return (
   <>
    <div className="app">
      <Header/>
      <Servicos/>
      <Sobre/>
      <Contato/>
      <Footer/>
    </div>
   </>
   
    )
}

export default App