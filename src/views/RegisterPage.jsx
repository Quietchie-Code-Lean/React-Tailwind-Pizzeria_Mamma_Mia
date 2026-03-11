import { useState } from "react";


const RegisterPage = ({DbUsers, setDbUsers}) => {

    /* Preset styles */
    const formClass = "w-full max-w-md mx-auto mb-6 mt-6 p-6 bg-white/80 backdrop-blur rounded-2xl shadow";
    const fieldWrapClass ="mb-4";
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
    )

    /* error states */
    const [error, setError] = useState(false);
    const [errorMatch, setErrorMatch] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorExist, setErrorExist] = useState(false);


    /* submit validations */
    const handleSubmit = (e) => {
        e.preventDefault();

        
        /* required fields? */
        if( !dataUser.email ||
            !dataUser.password ||
            !dataUser.confirmPassword){
                setError(true);
                return;
            }
            setError(false);
        
        /* email exisxt? */
        const emailExist = DbUsers.some(DbUser => DbUser.email === dataUser.email);

        if(emailExist){
            setErrorExist(true);
            return;
        }
        setErrorExist(false);
            
        /* password long enough? */
        if(dataUser.password.length < 6){
            setErrorPassword(true);
            return;
        }
        setErrorPassword(false);
        
        /* password match? */
        if(dataUser.password !== dataUser.confirmPassword){
            setErrorMatch(true);
            return;
        }
        setErrorMatch(false);

        /* add ID */
        const id = crypto.randomUUID();
        
        setDbUsers(prev => [...prev, { id, email: dataUser.email, password: dataUser.password }])

         setDataUser({
            email: "",
            password: "",
            confirmPassword: ""
            });
    };

    /* controlled onChange */
    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setDataUser(prev => ({...prev, [name]: value}));

        setError(false);
        setErrorExist(false);
        setErrorMatch(false);
        setErrorPassword(false);

    }

    return(
<>
    <h1 className='font-bold text-3xl text-white-600/75 m-6'>Registration Page:</h1>
    <br /><br />
    <form className={formClass} onSubmit={handleSubmit}>

        <div className="ErrorRenders">

            {error? <p className={errorClass}>All fields are Required!</p> : null}
            {errorExist? <p className={errorClass}>You Already have an account, please Login!</p> : null}
            {errorMatch? <p className={errorClass}>Password must Match!</p> : null}
            {errorPassword? <p className={errorClass}>The password must be at least 6 characters!</p>: null}
        
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
            onChange={handleChange}/>
        </div>

        <div className={fieldWrapClass}>
            <label className={labelClass} htmlFor="confirmPassword">Repeat Password</label>
            <input 
            className={inputClass}  
            name="confirmPassword"
            type="password"
            value={dataUser.confirmPassword} 
            placeholder="Repeat your password"
            onChange={handleChange}/>
        </div>

        <button className={btnClass} type="submit">Register</button>

    </form>
</>

            
)
};
export default RegisterPage;