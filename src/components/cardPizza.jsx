const CardPizza = ({ idName, price, ingredients, img }) => {
    return(
        <div className="
        bg-white
        rounded-lg
        shadow-md
        overflow-hidden">
        
                <img
                    src={img}
                    alt={idName}
                    className="w-full h-48 object-cover"/>

                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-slate-600">Pizza: {idName}</h3>

                    <p className="text-sm text-gray-600 mb-4 border-y-2 py-4">Ingredients: <br />{ingredients.join(", ")}</p>

                    <div className="flex justify-between items-center pb-4">
                        <button className="
                            bg-sky-500
                            text-white
                            px-4
                            py-1
                            rounded
                            hover:bg-sky-00">Add to cart
                        </button>

                        <span className="text-lg font-bold text-sky-300">${price}</span>

                    </div>

                </div>
        </div>

);
};


export default CardPizza;