import Avatar from "../img/profile.jpg";

import "../styles/components/sidebar.scss";

export function Sidebar(){
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Gabriel pessanha" />
            <p className="title">Desenvolvedor</p>
            <p>Redes sociais</p>
            <p>Informações de contato</p>
            <a  href="" className="btn">Download</a>
        </aside>
    )
}