/* React Dependencies */
import { useState, useEffect, useContext } from "react";

/* import cart context */
import { CartContext } from "../context/CartContext";

const Pizza = () => {

    /* preset Tailwind Styles */
    const cardClass = "w-4/5 bg-white rounded-lg shadow-md overflow-hidden flex m-auto my-5";
    const imageClass = "w-full object-cover m-5 rounded-lg";
    const bodyClass = "p-4";
    const titleClass = "text-lg font-semibold mb-2 text-slate-600";
    const ingredientsClass = "text-sm text-gray-600 mb-4 border-y-2 py-4";
    const descriptionClass = "text-sm text-gray-600 mb-4 border-y-2 py-4";
    const priceClass = "text-lg font-bold text-sky-300";
    const footerClass = "flex justify-evenly items-center pb-4";

    /* consuming context */
    const { addPizza } = useContext(CartContext)

    const [pizza, setPizza] = useState({});

    /* Endpoint */
    const ENDPOINT_P001 = "http://localhost:5000/api/pizzas/p001"
  
    const  getDataPizzas = async () =>{

        try {
            const response = await fetch(ENDPOINT_P001);
            const data = await response.json();
            setPizza(data);
        } 
        catch (error) {
            console.log(error.message)
        };
    }; 

    useEffect(() => {getDataPizzas()}, []);

    if (!pizza?.id) return <p className="text-slate-600">Loading...</p>;

    return(
<>
            <div className={cardClass}>
                <img 
                className={imageClass}
                src={pizza.img}
                alt={pizza.name} />

                <div className={bodyClass}>
                    <h2 className={titleClass}>{pizza.name}</h2>
                    <p className={descriptionClass}>Description: <br />{pizza.desc}</p>
                    <p className={ingredientsClass}>Ingredients: <br />{pizza.ingredients?.join(", ")}</p> 
                    
                    <div className={footerClass}>
                        <button type="button"
                                value={pizza.id}
                                onClick={() => addPizza(pizza)}>Add to Cart</button>
                        <span className={priceClass}>${pizza.price}</span>
                    </div>
                </div>
            </div>

</>
)
};

export default Pizza;