import { Header } from "../../components/Header";

import './styles.scss';

export function HomePage(){
    return(
        <div id="container">
            <Header />
            <div className="container main-Content">
                <h1>GABRIEL SANTOS PESSANHA</h1>
                <p>DESENVOLVEDOR <span>FRONT-END</span></p>
            </div>
        </div>
    )
}