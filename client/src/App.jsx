import { Landing } from "./pages/landing";
import ProductsConatiner from "./components/ProductsContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>NAV</h1>
      <Landing />
      <ProductsConatiner />
    </div>
  );
}

export default App;
