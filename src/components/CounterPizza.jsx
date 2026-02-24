

const CounterPizza = ({count, price, subResult, handleAdd, handleSubs, handleDelete}) => {


    return (
<>
    <div className="btn-container">
            <span>${price} SubTotal: ${subResult}</span>
            <button onClick={handleSubs}>-</button>
            <span>{count}</span>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleDelete}>Delete</button> 
    </div>
</>
    );
};

export default CounterPizza;