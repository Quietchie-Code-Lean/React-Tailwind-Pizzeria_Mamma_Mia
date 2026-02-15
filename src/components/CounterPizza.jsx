import { useState } from "react";


const CounterPizza = ({countDefault}) => {

const [count, setCount] = useState(0)

    const add = () => setCount((count) => count +1)
    const subs = () => setCount((count) => count -1)
    const reset = () => setCount((count) => count = 0)


    return (
<>
    <div className="btn-container">
            <button onClick={{add}}>+</button>
            <span>{count}</span>
            <button onClick={{subs}}>-</button>
            <button onClick={{reset}}>Reset</button>
    </div>
</>
    );
};

export default CounterPizza;