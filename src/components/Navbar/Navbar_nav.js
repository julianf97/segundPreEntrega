import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import "./navbar_nav.scss"



export const NavbarNav = () => {
    
    return(
        <div className="contenedor__nav">
            <nav className="nav">
                <ul>
                    <li>Marcas<FontAwesomeIcon className="chevronDown" icon={faChevronDown}/></li>
                    <li>Blog</li>
                    <li>Contacto</li>
                    <li>Mis pedidos</li>
                    <li>Arma tu pc</li>
                </ul>
            </nav>
        </div>
    )
}