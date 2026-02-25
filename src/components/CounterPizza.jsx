

const CounterPizza = ({count, subTotal, handleAdd, handleSubs, handleDelete}) => {

    const container = "flex items-center justify-between gap-4 w-full";
    const subTotalClass = "text-md font-semibold text-slate-700 whitespace-nowrap";
    const controls = "flex items-center gap-2";
    const groupBtn ="w-8 h-8 inline-flex items-center justify-center rounded-md bg-slate-200 text-white font-bold hover:bg-slate-300 active:scale-95 transition disabled:opacity-40 disabled:cursor-not-allowed";
    const countClass = "w-8 text-center font-semibold text-white text-md";
    const deleteBtn = "ml-2 inline-flex items-center justify-center rounded-md px-3 py-2 bg-rose-600 text-white text-sm font-semibold hover:bg-rose-700 active:scale-95 transition";

    return (
<>
        <div className={container}>
            <span className={subTotalClass}>SubTotal: ${subTotal}</span>
            <div className="flex items-center gap-3">
                <div className={controls}>
                    <button className={groupBtn} onClick={handleSubs}>-</button>
                    <span className={countClass}>{count}</span>
                    <button className={groupBtn} onClick={handleAdd}>+</button>
                </div>
                <button className={deleteBtn} onClick={handleDelete}>Delete</button>
            </div>
        </div>

</>
    );
};

export default CounterPizza;