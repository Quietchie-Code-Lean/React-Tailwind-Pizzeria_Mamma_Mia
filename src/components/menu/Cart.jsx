

const Cart = ({pizzaCart}) => {
    



    return(
        <>
        <h2>Detail Order:</h2>

        <div>
            {pizzaCart.map(pizza => 
            <li>
                <div>
                    <span>
                        <img src={pizza.img} alt="" />
                        <h4>{pizza.name}</h4>
                    </span>
                    <span>

                        {pizza.count}

                    </span>
                </div>
            </li>
            )}
        </div>

        <p>Total Payment: $</p>
        <button type="submit">Pay</button>
        </>
    )
}

export default Cart;