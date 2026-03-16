/* React and hooks */
import {  useContext } from "react";

/* context */
import { CartContext } from "../context/CartContext.jsx";

/* Components */
import CounterPizza from '../components/CounterPizza.jsx';


const Cart = () => {

    /* CartContext */
    const {cartItems, addPizza, subsPizza, deletePizza, total, isEmpty } = useContext(CartContext);

    /* Preset styles */
    const mainContent = "w-full min-h-[80vh] flex flex-col";
    const titleClass = "text-2xl font-bold text-slate-800 mb-6";
    const containerClass = "w-full max-w-2xl mx-auto list-none p-0 mt-2"
    const liClass = "flex items-center justify-between py-3";
    const leftGroupClass = "flex items-center gap-3";
    const imgClass = "w-10 h-10 rounded object-cover shadow-sm";
    const nameClass = "text-base font-semibold text-white text-xl";
    const rightGroupClass = "flex items-center gap-4";
    const totalRowClass = "mt-auto pt-8 text-3xl font-extrabold text-slate-900";
    const totalLabelClass = "mr-2";
    const payBtnClass = "my-6 mx-auto w-1/8 inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-2.5 text-white font-semibold shadow hover:bg-slate-800 active:scale-[0.99] transition";



    return(
        <>
        <div className={mainContent}>
                <h2 className={titleClass}>Detail Order:</h2>

            {isEmpty ? (
                <p className="text-slate-600 italic mt-4">The cart is empty</p>) 
                : ( 
                <ul className={containerClass}>
                        {cartItems.map(pizza => {
                                const subTotal = pizza.price * pizza.count;

                                return(
                                    <li key={pizza.id}>
                                    <div className={liClass}>
                                        <span className={leftGroupClass}>
                                            <img 
                                            className={imgClass} 
                                            src={pizza.img} 
                                            alt={pizza.name}/>
                                            <div className="text-start">
                                                <h4 className={nameClass}>{pizza.name.toUpperCase()}</h4>
                                                <span>${pizza.price}</span>
                                            </div>
                                        </span>
                                        <span className={rightGroupClass}>
                                            <CounterPizza
                                            price={pizza.price}
                                            count={pizza.count}
                                            subTotal={subTotal}
                                            handleAdd={() => addPizza(pizza.id)}
                                            handleSubs={() => subsPizza(pizza.id)}
                                            handleDelete={() => deletePizza(pizza.id)}/>
                                        </span>
                                    </div>
                                </li>
                            )}
                        )}
                    </ul>
                )}
                    
                <p className={totalRowClass}>
                    <span className={totalLabelClass}>Total Payment:</span>
                    <span>${total}</span>
                </p>
                <button type="submit"
                className={payBtnClass}>Payment</button>
        </div>
        </>
    )
}

export default Cart;