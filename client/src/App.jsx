import Landing from "./pages/landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import TabComponent from "./components/Tab";
import Cart from "./pages/Cart";

function App() {
  return(  <div className="App">
      <Router>
      <Header />
      <Switch >
      <Route path="/" component={Landing} />
      <Route path="/register" component={Register} />
      
      </Switch>
      </Router>
      <Landing />
      
      <TabComponent />
    </div>
   
  );}

export default App;
