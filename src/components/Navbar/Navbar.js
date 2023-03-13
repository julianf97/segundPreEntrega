import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { NavbarNav } from "./Navbar_nav";
import { CartWidget } from "./CartWidget";
import { ContenedorInternoProductos } from "./ContenedorInternoProductos";
import "./header-mobile.scss"
import "./header.scss"

export const Navbar = () => {
    
    

    return(
        <header className="header">
            <div className="header__container">
                <div className="contenedor__izquierdo">
                    <div className="contenedor__logo">
                    <img src="./img/1058-logos-logofinal-9985.png" alt="logo"></img>
                    </div>
                    <div className="contenedor__buscador__productos">
                        <div className="contenedor-barras-mobile">
                            <FontAwesomeIcon className="iconoBarra" icon={faBars}/>
                        </div>
                        <div className="contenedor-lupa-mobile">
                            <FontAwesomeIcon className="lupa" icon={faMagnifyingGlass}/>
                        </div>
                        <div className="buscador__productos">
                            <div className="contenedor__icono">
                                <FontAwesomeIcon className="iconoBarra" icon={faBars}/>
                            </div>
                            <div className="contenedor__palabra__productos">
                                <div className="contenedor__interno__palabra__productos">
                                    <h5>Productos</h5>
                                </div>
                            </div>
                            <div className="contenedor__flecha__abajo">
                            <FontAwesomeIcon className="chevronDown" icon={faChevronDown}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contenedor__medio">
                    <div className="contenedor__logo__mobile">
                        <img src="./img/1058-logos-logofinal-9985.png" alt="logo"></img>
                    </div>
                    <div className="contenedor__buscador">
                        <input type="search" placeholder="¿ Que estás buscando ?" aria-label="Search"></input>
                        <div className="contenedor__lupa">
                            <FontAwesomeIcon className="lupa" icon={faMagnifyingGlass}/>
                        </div>
                    </div>
                    <div className="contenedor__navbar__nav">
                        <NavbarNav/>
                    </div>
                </div>
                <div className="contenedor__derecho">
                    <div className="contenedor__wsp">
                        <h4 className="titulo__wsp">Whatsapp</h4>
                        <h2 className="numero__wsp">+5493517719671</h2>
                    </div>
                    <CartWidget/>
                </div>
            </div>
        </header>
    )
}