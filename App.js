import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Calc from './calc_fol/Calc';
import Welcome from './component/Welcome1';
function App() {
  return (
    <div className="App">
      
    {/* <Greet name="Bhavani" heroName="Devarakonda"/>
    <Greet name="peetani"/>
    <Greet name="shiney"/> */}
        {/* <Welcome name="vijay"/> */}
        <Calc/>
    </div>
  );
}

export default App;
