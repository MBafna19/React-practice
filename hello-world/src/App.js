import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet.js'
import Welcome from './Components/Welcome.js'
import Counter from './Components/Counter.js'
import FunctionClick from './Components/FunctionClick.js'
import ClassClick from './Components/ClassClick'
import EventBind from './Components/EventBind'
import ParentComponent from './Components/ParentComponent'
function App() {
  return (
    <div className="App">
      
      <ParentComponent></ParentComponent>
    </div>
  );
}

export default App;
