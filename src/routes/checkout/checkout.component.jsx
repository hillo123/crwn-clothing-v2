import { useContext } from 'react';
import './checkout.styles.scss';
import { CartContext } from '../../context/cart.context';

const Checkout = () => {
    const { cartItems, addItemToCart } = useContext(CartContext)
    // const {id, name, price, imagUrl} = CartItems
    return (

        <div>
            {cartItems.map((cartItem) => {
                const {id, imageUrl, name, quantity, price} = cartItem;

                return (
                    <div key={id}>
                        <span>
                            {name}
                        </span>
                        <br />
                        <span>
                            {quantity}
                        </span>
                        <br />
                        <span onClick={()=> addItemToCart(cartItem)}>
                            increase
                        </span>
                        <br />
                        <span >
                            decrease
                        </span>
                    </div>
                )
            })}
        </div>

    )
};

export default Checkout;