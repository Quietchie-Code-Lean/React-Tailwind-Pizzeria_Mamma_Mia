/* Dependencies and packages */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

/* providers */
import CartProvider from './context/CartContext.jsx';
import PizzasProvider from './context/PizzasContext.jsx';
import UserProvider from './context/UserContext.jsx';


/* Components */
import App from './App.jsx'

/* styles */
import './index.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
        <PizzasProvider>
            <UserProvider>
                  <BrowserRouter>
                    <App />
                  </BrowserRouter>
            </UserProvider>
        </PizzasProvider>
    </CartProvider>
  </StrictMode>
)
