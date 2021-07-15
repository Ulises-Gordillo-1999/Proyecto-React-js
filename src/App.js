import React from "react";
import "./App.css";
//import FetchPokeApi from "./components/FetchPokeApi";
import AppRouter from "./routers/AppRouter";
//import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./Context/CartContext";
//Firebase

function App() {
  return (
    <div>
      <CartProvider>
        <AppRouter />
      </CartProvider>
      {/*<FetchPokeApi /> */}
    </div>
  );
}

export default App;
