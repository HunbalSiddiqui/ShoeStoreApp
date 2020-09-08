import React from 'react';
import './App.css';
import Header from './Components/Header';
import TabNav from './Components/TabNav';
import BottomNav from './Components/BottomNav'
import {Switch,Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Men from './Pages/Men/Men';
import Kids from './Pages/Kids/Kids';
import Women from './Pages/Women/Women';
import Baksetball from './Pages/Men/Baksetball';
function App() {
  return (
    <div>
      <Header/>
      <TabNav/>
      
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/Men' component={Men}/>
        <Route path="/Men/Basketball" component={Baksetball} />
        <Route path='/Kids' component={Kids}/>
        <Route path='/Women' component={Women}/>
        {/* <Route path="/test">
          <Route path="123" component={Home} />
        </Route> */}
      </Switch>
      <div className="flex bottomNav" style={{width:'100%'}}>
        <BottomNav/>
      </div>
    </div>
  );
}

export default App;
