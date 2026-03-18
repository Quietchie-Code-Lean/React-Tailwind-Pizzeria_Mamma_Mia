/* react dependencies */
/* import { pizzas } from "../../pizzas"; */
import { useContext } from "react";

/* components */
import CardPizza from "../components/cardPizza.jsx";
import HeaderPizza from "../components/HeaderPizza.jsx";

/* Import context */
import { PizzasContext } from "../context/PizzasContext";



const PizzasHome = () => {

  /* Context with dataPizzas */
  const { dataPizzas } = useContext(PizzasContext);
  /* console.log(dataPizzas); */

  /* Preset styles */
  const sectionClass = "max-w-7xl mx-auto px-10 py-10 inset-shadow-sm inset-shadow-indigo-500/50";
  const titleClass = "text-2xl font-bold text-center mb-8";
  const gridClass = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6";


  return (
  <>
    <HeaderPizza />
    <section className={sectionClass}>
      <h2 className={titleClass}>Check our products:</h2>
          <div className={gridClass}>
              {dataPizzas.map(pizza => (

                  <CardPizza key={pizza.id} pizza={pizza} />
                  
                                /* id={pizza.id}
                                name={pizza.name}
                                description={pizza.desc}
                                price={pizza.price}
                                ingredients={pizza.ingredients}
                                img={pizza.img} */

            ))}
          </div>
    </section>
</>
);
};

export default PizzasHome;
