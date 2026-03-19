import { useContext } from "react";

/* context imports */
import { CartContext } from '../context/CartContext';
import { Link } from "react-router-dom";



const CardPizza = ({pizza}) => {

    const { addPizza } = useContext(CartContext);


    /* Preset styles */
    const cardClass = "bg-white rounded-lg shadow-md overflow-hidden";
    const imageClass = "w-full h-48 object-cover";
    const bodyClass = "p-4";
    const titleClass = "text-lg font-semibold mb-2 text-slate-600";
    const ingredientsClass = "text-sm text-gray-600 mb-4 border-y-2 py-4";
    const footerClass = "flex justify-between items-center pb-4";
    const buttonClass = "bg-sky-500 text-white px-4 py-1 rounded hover:bg-sky-600 transition";
    const priceClass = "text-lg font-bold text-sky-300";


    return(
            <div className={cardClass}>
                    <img
                        src={pizza.img}
                        alt={pizza.name}
                        className={imageClass}/>
                    <div className={bodyClass}>
                        <h3 className={titleClass}>{pizza.name.toUpperCase()}</h3>
                        <p className="text-sm text-gray-600">{pizza.desc}</p>
                        <div className={ingredientsClass}>
                        <p >Ingredients:</p>
                        <br />
                        <ul id="renderIngredients">
                            {pizza.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
                        </ul>
                        </div>
                        <div className={footerClass}>
                            <button className={buttonClass}
                                    value={pizza.id}
                                    onClick={() => addPizza(pizza)}>Add to cart</button>
                            <span className={priceClass}>
                                <div className="flex flex-col">
                                    ${pizza.price}
                                    <Link to={`/pizza/${pizza.id}`}>View more</Link>
                                </div>

                            </span>
                        </div>

                    </div>
            </div>

);
};


export default CardPizza;