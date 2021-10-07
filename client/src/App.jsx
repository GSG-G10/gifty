import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'; import Landing from './pages/landing';
import Register from './pages/Register';
import Cart from './pages/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
