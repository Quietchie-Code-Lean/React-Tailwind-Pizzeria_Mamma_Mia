import { useState } from "react";


const Counter = () => {

const [count, setCount] = useState(0)

    

    return (
<>
<div className="btn-container">
        <button onClick={() => setCount((count) => count +1)}>+</button>
        <span>{count}</span>
        <button onClick={()=> setCount((count) => count -1)}>-</button>
        <button onClick={()=> setCount((count) => count = 0)}>Reset</button>
</div>
</>
    );
};

export default Counter;