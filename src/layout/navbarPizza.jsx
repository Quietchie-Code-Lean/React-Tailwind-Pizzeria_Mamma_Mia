

const NavbarPizza = () => {
    const total = 25000;
    const token = false;
  
    return (
<>
        <nav className="w-full bg-slate-800 text-white">
            <div className="px-6">
                <div className="flex h-16 items-center justify-between">
                

                    <div className="flex gap-4 items-center">
                        <h1 className="text-xs font-semibold">Mamma Mía</h1>
                
                        <div className="flex gap-4 text-sm">
                            <a href="#" className="hover:underline cursor-pointer">Home</a>
                            <a href="#" className="hover:underline cursor-pointer">Login</a>
                            {/* <a href="#" className="hover:underline cursor-pointer">Logout</a> */}
                            {/* <a href="#" className="hover:underline cursor-pointer">Profile</a> */}
                            <a href="#" className="hover:underline cursor-pointer">Registro</a>
                        </div>
                    </div>

                
                    <a href="#" className="font-bold color-sky-700 cursor-pointer">🛒 Total: $0</a>
                </div>
            </div>
        </nav>
</>
  );
};

export default NavbarPizza;
