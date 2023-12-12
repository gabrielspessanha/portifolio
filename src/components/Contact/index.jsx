
import {AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"

import './styles.scss';


export function Contact(){
    return(
       <section className="container" id="information">
            <h2>CONTATO</h2>
            <hr />

            <div className="info-card">
                <AiFillPhone className="phone-icon" />
                <h5>Telefone: </h5>
                <span>+55 (21) 97643-5812</span>

            </div>

            <div className="info-card">
                <AiOutlineMail className="email-icon" />
                <h5>E-mail: </h5>
                <span>gabrielpessanha2g@gmail.com</span>
            </div>

            <div className="info-card">
                <AiFillEnvironment className="pin-icon" />
                <h5>Localização: </h5>
                <span>Rio de Janeiro / RJ</span>

            </div>
            
        </section>
    )
}