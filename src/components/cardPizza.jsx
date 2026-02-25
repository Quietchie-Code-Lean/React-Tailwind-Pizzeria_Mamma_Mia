
const CardPizza = ({ name, price, ingredients, img, description }) => {

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
                    src={img}
                    alt={name}
                    className={imageClass}/>
                <div className={bodyClass}>
                    <h3 className={titleClass}>{name.toUpperCase()}</h3>
                    <p className="text-sm text-gray-600">{description}</p>
                    <p className={ingredientsClass}>Ingredients:
                        <br />
                        <ul id="renderIngredients">
                            {ingredients.map(ingredient => <li>{ingredient}</li>)}
                        </ul>
                    </p>
                    <div className={footerClass}>
                        <button className={buttonClass}>Add to cart
                        </button>
                        <span className={priceClass}>${price}</span>
                    </div>

                </div>
        </div>

);
};


export default CardPizza;