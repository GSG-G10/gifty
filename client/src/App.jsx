import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Landing from './pages/landing';
import Product from './pages/product';
import Header from './components/common/Header';
import Register from './pages/Register';
import Cart from './pages/Cart';
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
        <Header />
        <Switch>
          <Route exact path="/product/:productId">
            <Product />
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/userProducts">
            <Cart />
          </Route>
        </Switch>
        </div>
      </Router>
  );
}

export default App;
