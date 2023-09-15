import { Header } from "../../components/Header";
import './styles.scss';
import { socialNetworks } from "../../components/Header";

export function HomePage(){
    
    return(
            <div id="container">
                <div className="container main-Content">
                    <h1>GABRIEL SANTOS PESSANHA</h1>
                    <p>DESENVOLVEDOR <span>FRONT-END</span></p>
                    <div className="networks">
                        {socialNetworks.map((network)=> (
                            <a key={network.name} href={network.link} target="__blank" className={network.name}>
                            {network.icon}
                            </a>
                        ))}
                    </div>
                    
                </div>
            </div>
    )
}