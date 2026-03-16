import { createContext, useState, useEffect  } from "react";




export const PizzasContext = createContext();

const PizzasProvider = ({children}) => {
/* this Block contain all the logic that the Provider will send to other components, and the logic is meant to be inside value={. . .} inside PizzasContext.Provider similar as a prop. but value expect an object */

    /* state to store and manage Data api, before I directly imported the array from de pizzas.js */
  const [dataPizzas, setDataPizzas] = useState([]);

    /* get Data from mock backend */
  const ENDPOINT_PIZZAS = "http://localhost:5000/api/pizzas"
  
  const  getDataPizzas = async () =>{

      try {
        const response = await fetch(ENDPOINT_PIZZAS);
        const data = await response.json();
        setDataPizzas(data);
      } 
      catch (error) {
        console.log(error.message)
      };
  };

  useEffect(() => {getDataPizzas()}, []);

  
        return(
    <>
        <PizzasContext.Provider value={{dataPizzas, setDataPizzas}}>
            {children}
        </PizzasContext.Provider>
    </>

    );
    };
    export default PizzasProvider;