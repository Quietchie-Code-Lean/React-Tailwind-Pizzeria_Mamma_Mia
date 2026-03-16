import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const NavbarPizza = () => {

    /* This line activate useContext within Navbar component and bring data from CartContext */
    const { total } = useContext(CartContext);
    const token = false;
  
    return (
<>
        <nav className="w-full bg-slate-800 text-white">
            <div className="px-6">
                <div className="flex h-16 items-center justify-between">
                

                    <div className="flex gap-4 items-center">
                        <h1 className="text-xs font-semibold">Mamma Mía</h1>
                
                        <div className="flex gap-4 text-sm">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/register">Register</NavLink>
                            <NavLink to="/login">Login</NavLink>
                            <NavLink to="/profile">Profile</NavLink>
                        </div>
                    </div>

                    <NavLink to="/cart">🛒 Total: ${total}</NavLink>

                </div>
            </div>
        </nav>
</>
  );
};

export default NavbarPizza;
