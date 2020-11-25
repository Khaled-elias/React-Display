import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Rechnen from './components/Rechnen';
import Display3 from './components/Display3';
import info from "./data/REACT.json"
import Display4 from './components/Display4';

function App() {
  return (
    <div className="App">
      {/* <Display /> */}
      {/* <Rechnen /> */}
      
      {info.map((info, i) => <Display3 key={i} info={info} />)}
      
     

    </div>
  );
}

export default App;
