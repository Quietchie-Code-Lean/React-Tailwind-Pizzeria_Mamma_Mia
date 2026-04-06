import { createContext, useState } from "react";

export const UserContext = createContext();

    const UserProvider = ({ children }) => {
          const URL_BACKEND = "http://localhost:5000/api/auth";

          const [token, setToken] = useState(null);
          const [email, setEmail] = useState("");

          /* Login */
          const loginRequest = async (userEmail, userPassword) => {

            try { /* fetch */
              const response = await fetch(`${URL_BACKEND}/login`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: userEmail,
                  password: userPassword,
                }),
              });

              const data = await response.json();

              if (!response.ok) {
                alert(data.error || "Login failed");
                return;
              }

              setToken(data.token);
              setEmail(data.email);
              alert("Authentication successful!");

      
            } catch (error) {

              console.log(error.message);

            }

          };

          /* Register */
          const registerRequest = async (userEmail, userPassword) => {

            try {
              const response = await fetch(`${URL_BACKEND}/register`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: userEmail,
                  password: userPassword,
                }),
              });

              const data = await response.json();

              if (!response.ok) {
                alert(data.error || "Register failed");
                return;
              }

              setToken(data.token);
              setEmail(data.email);
              alert("User registered successfully!");

            } catch (error) {

              console.log(error.message);

            }
          };

          /* Auth profile */
          const getProfile = async () => {

            try {
              const response = await fetch(`${URL_BACKEND}/me`, {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });

              const data = await response.json();

              if (!response.ok) {
                alert(data.error || "Could not get profile");
                return;
              }

              setEmail(data.email);
              console.log(data);
              return data;

            } catch (error) {

              console.log(error.message);

            }
          };

          /* Logout */
          const logout = () => {

            setToken(null);
            setEmail("");

          };

  return (
    <UserContext.Provider value={{
                                  token,
                                  email,
                                  loginRequest,
                                  registerRequest,
                                  getProfile,
                                  logout,
                                }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;