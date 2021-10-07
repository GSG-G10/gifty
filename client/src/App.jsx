import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'; import Landing from './pages/landing';
import Product from './pages/product';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
