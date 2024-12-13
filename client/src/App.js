import logo from './logo.svg';
import './App.css';
import "./style.css";
import Header from './components/Header';
import Baseline from './components/Todoitems';
import Button from './components/button';
function App() {
  return (
    <div className="StartPage">
    <Header/>
    <Baseline/>
    <Button/>
    </div>
  );
}


export default App;
