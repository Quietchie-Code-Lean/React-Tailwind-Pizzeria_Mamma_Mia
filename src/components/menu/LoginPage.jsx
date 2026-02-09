import { useState } from "react";


const LoginPage = ({DbUsers, setDbUsers}) => {
    /* Preset styles */
    const formClass = "w-full max-w-md mx-auto mb-12 mt-12 p-6 bg-white/80 backdrop-blur rounded-2xl shadow";
    const fieldWrapClass = "mb-4";
    const labelClass = "block text-sm font-medium text-slate-700 mb-1";
    const inputClass ="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 shadow-sm " + "focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-400";
    const btnClass = "w-full rounded-xl bg-slate-900 px-4 py-2.5 text-white font-semibold shadow " + "hover:bg-slate-800 active:scale-[0.99] transition";
    const errorClass = "mb-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700";

    /* global states user object */
    const [dataUser, setDataUser] = useState(
        {   
            id: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    );

    /* error states */
        const [error, setError] = useState(false);
        const [errorPassword, setErrorPassword] = useState(false);
        const [errorEmail, setErrorEmail] = useState(false);
        const [errorLogin, setErrorLogin] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault()
        /* fields required? */
        if(!dataUser.email || !dataUser.password){
            setError(true);
            return;
        }setError(false);

        /* password long enough?? */
        if(dataUser.password.length < 6){
            setErrorPassword(true);
            return;
        } setErrorPassword(false);

        /* correct email? */
        const checkEmail = DbUsers.some(DbUser => DbUser.email === dataUser.email);
        if(!checkEmail){
            setErrorEmail(true);
            return;
        }setErrorEmail(false);
        
        /* correct password? */
        const checkPassword = DbUsers.some(DbUser => DbUser.password === dataUser.password)
        if(checkPassword){
            setErrorLogin(true);
            return;
        }setErrorLogin(false);
        alert(`You Have Logged In`);

        setDataUser({
            email: "",
            password: "",
        })
    };

    const handleChange = (e) => {

        const {name, value} = e.target;
        
        setDataUser(prev => ({...prev, [name]: value}));

        setError(false);
        setErrorEmail(false);
        setErrorPassword(false);
        setErrorLogin(false);

    }

    return(

        <>
    <form className={formClass} onSubmit={handleSubmit}>

        <div className="ErrorRenders">
            {error? <p className={errorClass}>All fields are required!!</p> : null}
            {errorPassword? <p className={errorClass}>Invalid Password: at least 6 characters!!</p> : null}
            {errorEmail? <p className={errorClass}>Invalid Password</p> : null}
            {errorLogin? <p className={errorClass}>Password is wrong, try again</p> : null}
          
        </div>

        <div className={fieldWrapClass}>
            <label className={labelClass} htmlFor="email">Email</label>
            <input 
            className={inputClass} 
            name="email"
            type="email"
            value={dataUser.email} 
            placeholder="Enter your email"
            onChange={handleChange}
            />
        </div>

        <div className={fieldWrapClass}>
            <label className={labelClass} htmlFor="password">Password</label>
            <input 
            className={inputClass}  
            name="password"
            type="password" 
            value={dataUser.password}
            placeholder="Enter your password"
            onChange={handleChange}
            />
        </div>

        <button className={btnClass} type="submit">Login</button>

    </form>
    </>
        )
};
export default LoginPage;