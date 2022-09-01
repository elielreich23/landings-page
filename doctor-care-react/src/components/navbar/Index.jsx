import React from 'react'
import './styles.scss';


const Navbar = () => {
  return (
    <>
    {/* Rmaining task
    -create active effect for every elements & responsivity */}
      <div className="nav">
        <ul className="nav-elements">
          <div className="logo"></div>
          <li><a href="#">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#servico">Serviços</a></li>
          <li><a href="#depoimento">Depoimento</a></li>
        </ul>
        <div className="nav-btn">
          <div className="btn-txt">
            Agendar consulta
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar