import {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/itemDetail'
import { useParams } from 'react-router-dom';
import { getDoc, doc} from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()
    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, 'Items', itemId)
        getDoc(docRef)
        .then(response => {
            const data = response.data();
            const productAdapted = {id: response.id, ...data}
            setProduct(productAdapted)
        })
        .catch(error =>{
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [itemId])
    if (loading) {
        return <h1>Cargando...</h1>
    }
    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;