

const RegisterPage = ({DbUsers, setDbUsers}) => {
    /* Preset styles */
    const formClass = "w-full max-w-md mx-auto mb-6 mt-6 p-6 bg-white/80 backdrop-blur rounded-2xl shadow";
    const fieldWrapClass = "mb-4";
    const labelClass = "block text-sm font-medium text-slate-700 mb-1";
    const inputClass ="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 shadow-sm " + "focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-400";
    const btnClass = "w-full rounded-xl bg-slate-900 px-4 py-2.5 text-white font-semibold shadow " + "hover:bg-slate-800 active:scale-[0.99] transition";

    const handleSubmit = () => {
        e.preventDefault()
    }

    return(

    <form className={formClass} onSubmit={handleSubmit}>
        <div className={fieldWrapClass}>
            <label className={labelClass} htmlFor="">Email</label>
            <input
            className={inputClass} 
            name="email"
            type="email" 
            placeholder="Enter your email"
            />
        </div>

        <div className={fieldWrapClass}>
            <label className={labelClass} htmlFor="">Password</label>
            <input 
            className={inputClass}  
            name="password"
            type="password"
            placeholder="Enter your password"/>
        </div>

        <div className={fieldWrapClass}>
            <label className={labelClass} htmlFor="">Repeat Password</label>
            <input 
            className={inputClass}  
            name="confirmPassword"
            type="password" 
            placeholder="Repeat your password"/>
        </div>

        <button className={btnClass} type="submit">Register</button>

    </form>
            
)
};
export default RegisterPage;