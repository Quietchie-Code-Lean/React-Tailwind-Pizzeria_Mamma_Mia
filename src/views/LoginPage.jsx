import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";


const LoginPage = () => {

    /* Preset styles */
    const formClass = "w-full max-w-md mx-auto mb-12 mt-12 p-6 bg-white/80 backdrop-blur rounded-2xl shadow";
    const fieldWrapClass = "mb-4";
    const labelClass = "block text-sm font-medium text-slate-700 mb-1";
    const inputClass ="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 shadow-sm " + "focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-400";
    const btnClass = "w-full rounded-xl bg-slate-900 px-4 py-2.5 text-white font-semibold shadow " + "hover:bg-slate-800 active:scale-[0.99] transition";
    const errorClass = "mb-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700";

    /* Consuming loginRequest to backend from UserContext */
        const {loginRequest} = useContext(UserContext);
    
    /* local form states */
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

    /* error states */
        const [error, setError] = useState(false);
        const [errorPassword, setErrorPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        
        /* fields required? */
        if(!email || !password){
            setError(true);
            return;
        }setError(false);

        /* password long enough?? */
        if(password.length < 6){
            setErrorPassword(true);
            return;
        } setErrorPassword(false);
        

        loginRequest(email, password);
        
        setEmail("");
        setPassword("");

    };


    return(

<>

        <h1 className='font-bold text-3xl text-white-600/75 m-6'>Login Page:</h1>
        <br /><br />
        <form className={formClass} onSubmit={handleSubmit}>

            <div className="ErrorRenders">
                {error? <p className={errorClass}>All fields are required!!</p> : null}
                {errorPassword? <p className={errorClass}>Invalid Password: at least 6 characters!!</p> : null}
            </div>

            <div className={fieldWrapClass}>
                <label className={labelClass} htmlFor="email">Email</label>
                <input 
                className={inputClass} 
                name="email"
                type="email"
                value={email} 
                placeholder="Enter your email"
                onChange={(e) => {  setEmail(e.target.value) 
                                    setError(false)
                                }}
                />
            </div>

            <div className={fieldWrapClass}>
                <label className={labelClass} htmlFor="password">Password</label>
                <input 
                className={inputClass}  
                name="password"
                type="password" 
                value={password}
                placeholder="Enter your password"
                onChange={(e) => {  setPassword(e.target.value) 
                                    setErrorPassword(false)
                                    setError(false)
                                }}
                />
            </div>

            <button className={btnClass} type="submit">Login</button>

        </form>

</>

);
};
export default LoginPage;