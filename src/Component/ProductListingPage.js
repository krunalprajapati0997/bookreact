import React, { useEffect, useState } from 'react'
import Card from '../Component/Cart'


const ProductListingPage = () => {
    // states Variable
    const [cartItemCount, setCartItemCount] = useState(0);
    const [user, setuser] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        let total = 0;
        user.map(item => total += item.price)
        setTotalPrice(total)
    }, [user])

    // fuctions
    const addToCart = () => {
        setCartItemCount((a) => a + 1)
    }
    const removeFromCart = (id) => {
        // const tempItem = [...cart]
        // const newItem = tempItem.filter((item, i) => (i != id))
        // setCart(newItem)
        setuser(user.filter((item, i) => (i !== id)))
        setCartItemCount((num) => num - 1)
    }
   
    return (
        <>
            <div className='card-container'>
                {user.map(user => <Card key={user.id} item={user} name={user.name} price={user.price}  cartIncreament={addToCart} setCart={setuser} />)}
            </div>
            <h1>Cart: {cartItemCount}</h1>
            <div className='card-container'>
                {user.map((item, index) =>
                    <div key={index} className='card'>
                        <h2>{item.name}</h2>
                        <p>Price : {item.price}</p>
                        {/* <p>Description : {item.description}</p> */}
                        {/* <p>Quantities : {item.quantities}</p> */}
                        <button
                            onClick={() => removeFromCart(index)}
                        >Remove From Cart</button>
                    </div>)
                }
            </div>
            <h1>Total Price : {totalPrice}</h1>
        </>
    )
}
export default ProductListingPage




                   

    
