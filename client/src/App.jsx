import "./App.css";
import Landing from "./pages/landing";
import Header from  "./components/common/Header"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch >
      <Route path="/" component={Landing} />
      <Route path="/register" component={Register} />
      
      </Switch>
      </Router>
      <Landing />
    </div>
   
  );
}

export default App;
