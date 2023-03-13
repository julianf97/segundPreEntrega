

export const ItemDetail = ( {item} ) => {
    return (
        <div className="item">
            <img src={item.img} alt={item.name}/>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p>Precio: <strong>${item.price}</strong></p>
        </div>
    )
}
