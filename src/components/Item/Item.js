import "./item.scss"
import { Link } from 'react-router-dom';


export const Item = ( {item} ) => {
    return (
        <div className="item">
            <img src={item.img} alt={item.name}/>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p>Precio: <strong>${item.price}</strong></p>
            <div className="contenedor-btn-detail">
                <Link to={`/detail/${item.id}.`}>
                    <button className="btnDetail">Details</button>
                </Link>
            </div>
        </div>
    )
}