import logo from './logo.svg';
import './App.css';
import Hello from "../../test2/src/component/hello";

function App() {
  return (
    <div className="App">
      <h3>props: properties</h3>
      <hello age = {10}/>
      <hello age = {20}/>
      <hello age = {30}/>

    </div>
  );
}

export default App;
