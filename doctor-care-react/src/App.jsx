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