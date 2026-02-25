import { useState, useEffect } from "react";

const Pizza = () => {

    /* preset Tailwind Styles */
    const cardClass = "w-4/5 bg-white rounded-lg shadow-md overflow-hidden flex m-auto my-5";
    const imageClass = "w-full object-cover m-5 rounded-lg";
    const bodyClass = "p-4";
    const titleClass = "text-lg font-semibold mb-2 text-slate-600";
    const ingredientsClass = "text-sm text-gray-600 mb-4 border-y-2 py-4";
    const descriptionClass = "text-sm text-gray-600 mb-4 border-y-2 py-4";

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

    if (!pizza) return <p className="text-slate-600">Loading...</p>;

    return(
<>
            <div className={cardClass}>
                <img 
                className={imageClass}
                src={pizza.img}
                alt={pizza.name} />

                <div className={bodyClass}>
                    <h2 className={titleClass}>{pizza.title}</h2>
                    <p className={descriptionClass}>Description: <br />{pizza.desc}</p>
                    <p className={ingredientsClass}>Ingredients: <br />{pizza.ingredients?.join(", ")}</p> 
                <button type="button">Add to Cart</button>
                </div>
            </div>
        
        
</>
)
};

export default Pizza;