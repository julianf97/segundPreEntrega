import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const CartWidget = () => {
    
    return(
    <div className="contenedor-user-cart"> 
        <div className="contenedor-cart">
            <FontAwesomeIcon className="carrito" icon={faCartShopping}/>
        </div>
        <div className="contenedor-cart">
            <FontAwesomeIcon className="carrito" icon={faUser}/>
        </div>
    </div>
    )
}