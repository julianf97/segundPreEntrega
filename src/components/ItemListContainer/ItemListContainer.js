import { useEffect, useState } from "react";
import '../ItemListContainer/itemListContainer.scss';
import { pedirDatos } from '../../helpers/pedirDatos';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from "react-router-dom";

/* Entendiendo que el useParams me retorna un objeto con los parametros detectados en la url y yo pretendo trabajar con el parametro de categoryId que definí en mi route, podemos desestructurar el categoryId del useParams */

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    // Acá lo que hago es quedarme con la propiedad categoryId de los parametros cuando esté en el ItemListContainer
    const { categoryId } = useParams()

    console.log(categoryId);

    useEffect(() => {

        setLoading(true)

        pedirDatos()
        .then( (response) => {

            if(!categoryId){
                setProductos(response)
            } else{
                setProductos( response.filter((prod) => prod.category === categoryId) )
            }


            setLoading(false)
        })
        .catch( (error) => {
            
            console.log(error)

        })
        .finally( () => {
            setLoading(false)
        })

    }, [categoryId])


    return (
        <div className="contenedor">
            {
                loading
                ? <h2>Cargando...</h2>
                : <ItemList items={productos}/>
            }
        </div>
    )
};

