import {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)
    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }
    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }
    return (
        <div className='container-count'>
            <div className='btn-control-count'>
                <button className='btn-count' onClick={decrement}>-</button>
                <h4>{quantity}</h4>
                <button className='btn-count' onClick={increment}>+</button>
            </div>
            <div>
                <button className='btn-submit' onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount