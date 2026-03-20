import { createContext, useState } from "react";


export const UserContext = createContext();

const UserProvider = ({children}) => {

    /* Mock database to push users within objects array */
    const [DbUsers, setDbUsers] = useState([  
            /* Mock Users for test */
            { id: "leleMON", email: "lele@lele.com", password: "lele123"},
            { id: "luluMON", email: "lulu@lulu.com", password: "lulu123"},
            { id: "lalaMON", email: "lala@lala.com", password: "lala123"}    
        ]);

    /* token state */
    const [token, setToken] = useState(true);

    /* Handler Logout */
    const handleLogout = () => {
    setToken(false);
    };

    return (
<>

<UserContext.Provider value={ {DbUsers, setDbUsers, token, setToken, handleLogout} }>
    {children}
</UserContext.Provider>

</>
)
};

export default UserProvider;