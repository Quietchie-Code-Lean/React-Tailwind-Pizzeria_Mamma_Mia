import CardPizza from "../components/CardPizza";
import HeaderPizza from "../components/HeaderPizza";
import { pizzas } from "../../pizzas";
import { useState, useEffect } from "react";


const PizzasHome = () => {

  /* Preset styles */
  const sectionClass = "max-w-7xl mx-auto px-10 py-10 inset-shadow-sm inset-shadow-indigo-500/50";
  const titleClass = "text-2xl font-bold text-center mb-8";
  const gridClass = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6";

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


  return (
    <>
    <HeaderPizza />
    <section className={sectionClass}>
      <h2 className={titleClass}>Check our products:</h2>
          <div className={gridClass}>
              {dataPizzas.map(pizza => (
              <CardPizza
                  key={pizza.id}
                  id={pizza.id}
                  name={pizza.name}
                  description={pizza.desc}
                  price={pizza.price}
                  ingredients={pizza.ingredients}
                  img={pizza.img}/>
            ))}
          </div>
    </section>
    </>
  );
};

export default PizzasHome;
