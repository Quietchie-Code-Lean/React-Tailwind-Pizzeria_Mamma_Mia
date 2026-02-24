import CounterPizza from "../CounterPizza";
import { useState } from "react";


const Cart = ({pizzaCart}) => {
    
    /* Preset styles */
    const mainContent = "w-full mb-auto";
    const titleClass = "text-2xl font-bold text-slate-800 mb-6";
    const containerClass = "w-full max-w-lg m-auto list-none p-0 m-0"
    const liClass = "flex items-center justify-between py-3";
    const leftGroupClass = "flex items-center gap-3";
    const imgClass = "w-10 h-10 rounded object-cover shadow-sm";
    const nameClass = "text-base font-semibold text-slate-800";
    const rightGroupClass = "flex items-center gap-4";
    const totalRowClass = "mt-8 text-3xl font-extrabold text-slate-900";
    const totalLabelClass = "mr-2";
    const payBtnClass = "mt-6 inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-2.5 text-white font-semibold shadow hover:bg-slate-800 active:scale-[0.99] transition";

    /* Global State pizzas Cart */

    const [cartItems, setCartItems] = useState(pizzaCart);


    const handleAdd = (pizzaId) => {
        const newCart = [...cartItems];
        const index = newCart.findIndex(item => item.id === pizzaId);

        newCart[index].count += 1;
        newCart[index].subResult = newCart[index].price * newCart[index].count;
        
        setCartItems(newCart);
    };

    const handleSubs = (pizzaId) => {
        const newCart = [...cartItems];
        const index = newCart.findIndex(item=> item.id === pizzaId);

        if(newCart[index].count === 1){
            newCart.splice(index, 1);
        }else{
            newCart[index].count -= 1;
            newCart[index].subResult = newCart[index].price * newCart[index].count;
        }
        setCartItems(newCart);
    };

    const handleDelete = (pizzaId) => {
        const newCart = [...cartItems];
        const index = newCart.findIndex(item => item.id === pizzaId)

        newCart.splice(index, 1);
        setCartItems(newCart);
    };


    return(
        <>
        <div className={mainContent}>
                <h2 className={titleClass}>Detail Order:</h2>
                <ul className={containerClass}>
                    {cartItems.map(pizza => 

                        <li key={pizza.id}>
                            <div className={liClass}>
                                <span className={leftGroupClass}>
                                    <img 
                                    className={imgClass} 
                                    src={pizza.img} 
                                    alt={pizza.name}/>
                                    <h4 className={nameClass}>{pizza.name}</h4>
                                </span>
                                <span className={rightGroupClass}>
                                    <CounterPizza
                                    price={pizza.price}
                                    count={pizza.count}
                                    subResult={pizza.subResult}
                                    handleAdd={() => handleAdd(pizza.id)}
                                    handleSubs={() => handleSubs(pizza.id)}
                                    handleDelete={() => handleDelete(pizza.id)}/>
                                </span>
                            </div>
                        </li>
                    )}
                </ul>

                <p className={totalRowClass}>
                    <span className={totalLabelClass}>Total Payment:</span>
                    <span>${/* {result} */}</span>
                </p>
                <button type="submit"
                className={payBtnClass}>Payment</button>
        </div>
        </>
    )
}

export default Cart;