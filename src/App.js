import React from 'react';
import './App.css';
import Header from './Components/Header';
import TabNav from './Components/TabNav';
import {Switch,Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
function App() {
  return (
    <div>
      <Header/>
      <TabNav/>
      
      <Switch>
        <Route path='/' component={Home}/>
      </Switch>

    </div>
  );
}

export default App;
