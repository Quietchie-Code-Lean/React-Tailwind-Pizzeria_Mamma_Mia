import { useState } from 'react';
import './App.css'
import LoginPage from './components/menu/LoginPage.jsx';
import RegisterPage from './components/menu/RegisterPage.jsx';
import FooterPizza from './layout/footerPizza.jsx'
import NavbarPizza from './layout/navbarPizza.jsx'
import PizzasHome from './layout/PizzasHome.jsx'

function App() {

  const [DbUsers, setDbUsers] = useState([]);

  return (
    <>
      <NavbarPizza/>
      {/* <PizzasHome/> */}

      <h2 className='font-bold text-3xl text-blue-600/75 m-6'>Register:</h2>

      <RegisterPage
      DbUsers={DbUsers}
      setDbUsers={setDbUsers}
      />
      
      <br />
      <br />


      <h2 className='font-bold text-3xl text-blue-600/75 m-6'>Login:</h2>
      
      <LoginPage
      DbUsers={DbUsers}
      setDbUsers={setDbUsers}
       />
      

      <FooterPizza/>
    </>
  );
};

export default App;
