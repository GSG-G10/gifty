import Landing from "./pages/landing";
<<<<<<< HEAD
import Header from  "./components/common/Header"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
=======
import TabComponent from "./components/Tab";
import "./App.css";
import Cart from "./pages/Cart";
>>>>>>> e7d8d172fd94da2174feae803996e8a1cc17ca4a

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Router>
      <Header />
      <Switch >
      <Route path="/" component={Landing} />
      <Route path="/register" component={Register} />
      
      </Switch>
      </Router>
      <Landing />
=======
      {/* <Landing /> */}
      <TabComponent />
>>>>>>> e7d8d172fd94da2174feae803996e8a1cc17ca4a
    </div>
   
  );
}

export default App;
