import logo from './logo.svg';
import './App.css';
import React from 'react';

const products = [
  { name: "xbox", price: "400€", image: "https://picsum.photos/300/200" },
  {
    name: "PlayStation",
    price: "550€",
    image: "https://picsum.photos/300/200",
  },
  { name: "Nintendo", price: "200€", image: "https://picsum.photos/300/200" },
];

function App() {
  return (
    <div className="my-App" >
      <header className="App-header">

        
        
        <ul>
          {products.map((product) => (
            <li style={{ display: "inline-block", border: "1px solid black", padding: "10px", textAlign: "center"  }}>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <img src={product.image} alt="product" />
            </li>
          ))}
        </ul>
      </header>


     
    </div>
  );
}

export default App;
