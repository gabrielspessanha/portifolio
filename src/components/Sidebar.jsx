import Avatar from "../img/profile.jpg";

import "../styles/components/sidebar.scss";
import { InformationContainer } from "./InformationContainer";
import { SocialNetworks } from "./SocialNetworks";

export function Sidebar(){
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Gabriel pessanha" />
            <p className="title">Desenvolvedor</p>
            <SocialNetworks />
            <InformationContainer />
            <a  href="" className="btn">Download</a>
        </aside>
    )
}