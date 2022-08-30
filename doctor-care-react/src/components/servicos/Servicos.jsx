import React from 'react'
import './style.scss'
import Navbar from '../navbar/Navbar'

const Servicos = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
        <div className="title">
        SERVIÇOS
        </div>
        <div className="title-txt">
        Como podemos ajudá-lo a se sentir melhor?
        </div>
        {/* later create a component card with the dimensions and 
        color that will be called
        each time the card is needed  */}
        <div className="card">
          <div className="card1">
            <div className="icon1"></div>
            <div className="txt1">Problemas digestivos</div>
            <div className="txt2">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</div>
          </div>
          <div className="card2">
            <div className="icon2"></div>
            <div className="txt3">Saúde Hormonal</div>
            <div className="txt4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</div>
          </div>
          <div className="card3">
            <div className="icon3"></div>
            <div className="txt5">Bem-estar mental</div>
            <div className="txt6">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</div>
          </div>
          <div className="card4">
            <div className="icon4"></div>
            <div className="txt7">Cuidados Pediátricos</div>
            <div className="txt8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</div>
          </div>
          <div className="card5">
            <div className="icon5"></div>
            <div className="txt9">Autoimune e  Inflamação</div>
            <div className="txt-X">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</div>
          </div>
          <div className="card6">
            <div className="icon6"></div>
            <div className="txt-XI">Saúde do Coração</div>
            <div className="txt-XII">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</div>
          </div>

        </div>
    </div>
    
    </>
  )
}

export default Servicos