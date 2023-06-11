import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {

    const { name, imageUrl, price, quantity } = cartItem;
    return(
    <div className="checkout-item-container">
        <div className="image-container">
            <img src={imageUrl} alt={`${imageUrl}`} />
        </div>
        <span className='name'> {name} </span>
        <span className='quantity'> {quantity} </span>
        <span className='price'> {price}</span>
        <div className="remove-button">&Chi;</div>
    </div>
    )
}


export default CheckoutItem;