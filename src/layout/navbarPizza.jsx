import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const NavbarPizza = () => {

    /* Preset Tailwind Styles */
const navClass = "w-full bg-slate-800 text-white";
const wrapperClass = "px-6";
const innerClass = "flex h-16 items-center justify-between";
const leftGroupClass = "flex gap-4 items-center";
const logoClass = "text-xs font-semibold";
const linksContainerClass = "flex gap-4 text-sm";
const linkBaseClass = "px-2 py-1 rounded-md transition-colors duration-200";
const activeClass = "bg-slate-700 text-white";
const inactiveClass = "text-slate-300 hover:text-white hover:bg-slate-700/50";
const cartClass = "text-sm font-semibold bg-slate-700 px-3 py-1 rounded-md hover:bg-slate-600 transition";


    /* This line activate useContext within Navbar component and bring data from CartContext */
    const getNavLinkClass = ({isActive}) => 
        `${linkBaseClass} ${isActive ? {activeClass} : {inactiveClass}}`;

    const { total } = useContext(CartContext);
    const token = false;
  
    return (
<>
        <nav className={navClass}>
            <div className={wrapperClass}>
                <div className={innerClass}>
                
                    <div className={leftGroupClass}>
                        <h1 className={logoClass}>Mamma Mía</h1>
                
                        <div className={linksContainerClass}>
                            <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
                            <NavLink to="/register" className={getNavLinkClass}>Register</NavLink>
                            <NavLink to="/login" className={getNavLinkClass}>Login</NavLink>
                            <NavLink to="/profile" className={getNavLinkClass}>Profile</NavLink>
                        </div>
                    </div>

                    <NavLink to="/cart" className={cartClass}>🛒 Total: ${total}</NavLink>

                </div>
            </div>
        </nav>
</>
  );
};

export default NavbarPizza;
