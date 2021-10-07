import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Landing from './pages/landing';
import Product from './pages/product';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Header from './components/common/Header';
import './App.css';

function App() {
  return (
      <Router>
        <Header />
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
  );
}

export default App;
