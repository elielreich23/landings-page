import React from 'react'
import './styles.scss'

const Contato = () => {
    return (
        <>
        {/* need to add the icons of the conact form
        and also need to add google map(api ) for the address
         */}
            <div className="contact-bx">
                <div className="contato">
                    <div className="text">
                        Entre em contato com a gente!
                    </div>
                    <div className="address">
                        <div className="adrs-icon">
                            <img src="../../assets/map.svg" alt="" />
                        </div>
                        R. Amauri Souza, 346
                    </div>
                    <div className="mail">
                        <div className="mail-icon"></div>
                        contato@doctorcare.com
                    </div>
                    <div className="btn">
                        <div className="btn-txt"> Agende sua consulta</div>
                        <div className="btn-icon"></div>
                    </div>
                    <div className="image"></div>
                </div>

            </div>
        </>
    )
}

export default Contato