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
import ProductsDisplay from './Components/ProductsDisplay/ProductsDisplay';
function App() {
  return (
    <div>
      <Header/>
      <TabNav/>
      
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/Men'>
          <Route path="/" component={Men}></Route>
          <Route path="/Men/:uid" render={(props)=><ProductsDisplay {...props} sourceRoute={"Men"}/>}></Route>
        </Route>
        <Route path='/Kids' >
        <Route path="/" component={Kids}></Route>
          <Route path="/kids/:uid" render={(props)=><ProductsDisplay {...props} sourceRoute={"kids"}/>}></Route>
        </Route>
        <Route path='/Women' component={Women}>
          <Route path="/" component={Women}></Route>
          <Route path="/Women/:uid" render={(props)=><ProductsDisplay {...props} sourceRoute={"women"}/>}></Route>
        </Route>
      </Switch>
      <div className="flex bottomNav" style={{width:'100%'}}>
        <BottomNav/>
      </div>
    </div>
  );
}

export default App;
