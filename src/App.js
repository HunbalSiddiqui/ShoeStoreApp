import React from 'react';
import './App.css';
import Header from './Components/Header';
import TabNav from './Components/TabNav';
import {Switch,Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Men from './Pages/Men/Men';
import Kids from './Pages/Kids/Kids';
import Women from './Pages/Women/Women';
function App() {
  return (
    <div>
      <Header/>
      <TabNav/>
      
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/Men' component={Men}/>
        <Route path='/Kids' component={Kids}/>
        <Route path='/Women' component={Women}/>
      </Switch>

    </div>
  );
}

export default App;
