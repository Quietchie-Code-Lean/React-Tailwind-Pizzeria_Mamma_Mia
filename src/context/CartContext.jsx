/* react and hooks */
import { createContext, useState } from "react";

/* Array mock cart */
import { pizzaCart } from "../../pizzas";


export const CartContext = createContext();

    const CartProvider = ({children}) => {
        /* this Block contain all the logic that the Provider will send to other components, and the logic is meant to be inside value={. . .} inside CartContext.Provider similar as a prop. but value expect an object */

         /* Local State pizzas Cart */
    const [cartItems, setCartItems] = useState(Array.isArray(pizzaCart) ? pizzaCart : []);


    const addPizza = (pizza) => {
        const newCart = [...cartItems];
        const index = newCart.findIndex(item => item.id === pizza.id);
        console.log(index);
        console.log("pizza recibida:", pizza);
        console.log("cart actual:", newCart);
        if (index === -1){
            newCart.push({
                ...pizza,
                count: 1
            });
        }else{
            newCart[index].count += 1;
        }
            setCartItems(newCart);
    };

    const subsPizza = (pizza) => {
        const newCart = [...cartItems];
        const index = newCart.findIndex(item=> item.id === pizza.id);

        if (index === -1) return;

        if (newCart[index].count === 1) {
            newCart.splice(index, 1);
        } else {
            newCart[index].count -= 1;
        };

        setCartItems(newCart);
    };

    const deletePizza = (pizza) => {
        const newCart = [...cartItems];
        const index = newCart.findIndex(item => item.id === pizza.id);
        if (index === -1) return;

        newCart.splice(index, 1);
        setCartItems(newCart);
    };

    
    let total = 0;

    for (let i = 0; i < cartItems.length; i++) {
        total += cartItems[i].price * cartItems[i].count;
    }

    const isEmpty = cartItems.length === 0;

        return(

        <>
            <CartContext.Provider value={{cartItems, addPizza, subsPizza, deletePizza, total, isEmpty }}>
                {children}
            </CartContext.Provider>
        </>

    );
    };
    export default CartProvider;