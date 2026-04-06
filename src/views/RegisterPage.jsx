import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";


const RegisterPage = () => {

    /* Preset styles */
    const formClass = "w-full max-w-md mx-auto mb-6 mt-6 p-6 bg-white/80 backdrop-blur rounded-2xl shadow";
    const fieldWrapClass ="mb-4";
    const labelClass = "block text-sm font-medium text-slate-700 mb-1";
    const inputClass ="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 shadow-sm " + "focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-400";
    const btnClass = "w-full rounded-xl bg-slate-900 px-4 py-2.5 text-white font-semibold shadow " + "hover:bg-slate-800 active:scale-[0.99] transition";
    const errorClass = "mb-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700";

    /* Consuming registerRequest from context */
    const {registerRequest} = useContext(UserContext);
    
    /* local form states */
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    /* error states */
    const [error, setError] = useState(false);
    const [errorMatch, setErrorMatch] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);



    /* submit validations */
    const handleSubmit = (e) => {
        e.preventDefault();

        
        /* required fields? */
        if( !email ||
            !password ||
            !confirmPassword){
                setError(true);
                return;
            }
            setError(false);
            
        /* password long enough? */
        if(password.length < 6){
            setErrorPassword(true);
            return;
        }
        setErrorPassword(false);
        
        /* password match? */
        if(password !== confirmPassword){
            setErrorMatch(true);
            return;
        }
        setErrorMatch(false);

        registerRequest(email, password);
    
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        
    };


       


    return(
<>
    <h1 className='font-bold text-3xl text-white-600/75 m-6'>Registration Page:</h1>
    <br /><br />
    <form className={formClass} onSubmit={handleSubmit}>

        <div className="ErrorRenders">

            {error? <p className={errorClass}>All fields are Required!</p> : null}
            {errorMatch? <p className={errorClass}>Password must Match!</p> : null}
            {errorPassword? <p className={errorClass}>The password must be at least 6 characters!</p>: null}
        
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
                                setErrorPassword(false);
                                setErrorMatch(false);
                                }}/>
        </div>

        <div className={fieldWrapClass}>
            <label className={labelClass} htmlFor="confirmPassword">Repeat Password</label>
            <input 
            className={inputClass}  
            name="confirmPassword"
            type="password"
            value={confirmPassword} 
            placeholder="Repeat your password"
            onChange={(e) => {  setConfirmPassword(e.target.value) 
                                setErrorMatch(false)
                                }}/>
        </div>

        <button className={btnClass} type="submit">Register</button>

    </form>
</>

            
)
};
export default RegisterPage;