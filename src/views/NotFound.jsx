import { useNavigate } from "react-router-dom";

const NotFound = () => {

    /* Preset Tailwind Styles */
    const backgroundClass = "mt-[3.5%] w-full h-full bg-[url('/src/assets/404-bg-pizzas2.jpg')] bg-center bg-fit"
    const ContainerClass = "flex justify-center items-center h-[70vh]";
    const cardClass = "text-center p-10 rounded-lg bg-slate-700 shadow-lg";
    const buttonsClass = "mt-5 flex gap-2.5 justify-center";
    const notFoundButton = "text-6xl mb-2" ;
    
    const navigate = useNavigate();

  /* handlers */
  const handleGoHome = () => {
    navigate("/")
  };

  const handleGoBack = () => {
    navigate(-1)
  };

  return (
<>
    <section className={backgroundClass}>
            <div className={ContainerClass}>

                <div className={cardClass}>

                        <h1 className='font-bold text-3xl text-white-600/75 m-6'>Error 404</h1>
                        <h2 className='font-bold text-xl text-white-600/75 m-6'>Oops! This pizza does not exist 🍕</h2>
                        <p>The page you are looking for does not exist or was moved.</p>

                        <div className={buttonsClass}>
                            <button 
                            onClick={handleGoHome}
                            className={notFoundButton}>Go Home</button>
                            <button 
                            onClick={handleGoBack}
                            className={notFoundButton}>Go Back</button>
                        </div>
                        
                </div>

            </div>
    </section>
</>
  );
};

export default NotFound;