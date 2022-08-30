import React from 'react'
import Header from './components/header/Header'
import Servicos from './components/servicos/Servicos'
import Sobre from './components/sobre/Index'

const App = () => {
  return (
   <>
    <div className="app">
      <Header/>
      <Servicos/>
      <Sobre/>
    </div>
   </>
   
    )
}

export default App