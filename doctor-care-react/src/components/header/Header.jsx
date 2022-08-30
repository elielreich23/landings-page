import React from 'react'
import './style.scss';
import Navbar from '../navbar/Navbar'

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="header">
        <div className="left">
          <div className="welcome">
            BOAS-VINDAS A DOCTORCARE 👋
          </div>
          <div className="assitencia">
            Assistência médica <br /> simplificada para todos
          </div>
          <div className="txt">
            Os médicos da DoctorCare vão além dos sintomas para tratar a causa <br /> raiz de sua doença e proporcionar uma cura a longo prazo.
          </div>
          <div className="btn">
            <div className="btn-icon">

            </div>
            <div className="btn-txt">
              Agende sua consulta
            </div>
          </div>
        </div>
        <div className="right">
          {/* <img src="../../assets/4.png " alt="" /> */}
          <div className="right-shadow"></div>
        </div>
        <div className="counter">
          <div className="sec1">
            <div className="txt1">
              +3.500
            </div>
            <div className="txt2">
              Pacientes atendidos
            </div>
          </div>
          <div className="line1"></div>
          <div className="sec2">
            <div className="txt3">
              +15
            </div>
            <div className="txt4">
              Especialistas disponíveis
            </div>
          </div>
          <div className="line2"></div>

          <div className="sec3">
            <div className="txt5">
              +10
            </div>
            <div className="txt6">
              Anos no mercado
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header