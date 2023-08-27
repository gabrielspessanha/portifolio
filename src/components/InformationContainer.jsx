
import {AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"

import "../styles/components/informationcontainer.scss";


export function InformationContainer(){
    return(
       <section id="information">
            <div className="info-card">
                <AiFillPhone className="phone-icon" />
                <div>
                    <h3>Telefone</h3>
                    <p>(21) 97643-5812</p>
                </div>
            </div>

            <div className="info-card">
                <AiOutlineMail className="email-icon" />
                <div>
                    <h3>E-mail</h3>
                    <p>gabrielpessanha2g@gmail.com</p>
                </div>
            </div>

            <div className="info-card">
                <AiFillEnvironment className="pin-icon" />
                <div>
                    <h3>Localização</h3>
                    <p>Rio de Janeiro / RJ</p>
                </div>
            </div>

        </section>
    )
}