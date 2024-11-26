import './App.css';
import Hello from "./component/Hello";
import Header from "./component/Header";
import DayList from './component/DayList';
import Day from "./component/Day";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {


  
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>

        <Routes>
          <Route exact path = "/" 
            element = {
              <DayList/>
            } 
          />

          <Route exact path = "/day/:day" 
            element = {
              <Day/>
            } 
          />
        </Routes>
        

        {/*
        <h3>props: properties</h3>
        <Hello age = {10} grade = {10}/>
        <Hello age = {20} grade = {2}/>
        <Hello age = {30} grade = {9}/>
        */}

      </div>
    </BrowserRouter>
  );
}

export default App;
