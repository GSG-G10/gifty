import './App.css';
import Footer from './components/common/Footer';
import Landing from "./pages/landing";
import TabComponent from "./components/Tab";

function App() {
  return (
    <div className="App">
      <Landing />
      
      <TabComponent />
      <Footer /> 
    </div>
  );
}

export default App;
