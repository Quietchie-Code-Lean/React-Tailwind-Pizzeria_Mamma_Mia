import CounterPizza from "../CounterPizza";


const Cart = ({pizzaCart}) => {
    
    /* Preset styles */
    const mainContent = "w-80vw";
    const titleClass = "text-2xl font-bold text-slate-800 mb-6";
    const containerClass = "w-full max-w-lg";
    const liClass = "flex items-center justify-between py-3";
    const leftGroupClass = "flex items-center gap-3";
    const imgClass = "w-10 h-10 rounded object-cover shadow-sm";
    const nameClass = "text-base font-semibold text-slate-800";
    const rightGroupClass = "flex items-center gap-4";
    const totalRowClass = "mt-8 text-3xl font-extrabold text-slate-900";
    const totalLabelClass = "mr-2";
    const payBtnClass = "mt-6 inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-2.5 text-white font-semibold shadow hover:bg-slate-800 active:scale-[0.99] transition";



    return(
        <>
        <div className={mainContent}>
                <h2 className={titleClass}>Detail Order:</h2>
                <div className={containerClass}>
                    {pizzaCart.map(pizza => 
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
                                    countDefault={pizza.count}/>
                                </span>
                            </div>
                        </li>
                    )}
                </div>

                <p className={totalRowClass}>
                    <span className={totalLabelClass}>Total Payment:</span>
                    <span>$19.000,00</span>
                </p>
                <button type="submit"
                className={payBtnClass}>Pay</button>
        </div>
        </>
    )
}

export default Cart;