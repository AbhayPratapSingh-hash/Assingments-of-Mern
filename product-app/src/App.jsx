import './App.css';
import Product from './product';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Shopping Cart</h1>
      <Product name="Wireless Mouse" price={25} />
      <Product name="Mechanical Keyboard" price={75} />
      <Product name="Gaming Monitor" price={150} />
    </div>
  );
}

export default App;