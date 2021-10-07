import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'; import Landing from './pages/landing';
import Product from './pages/product';
import Cart from './pages/Cart';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/product/:productId">
            <Product />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
