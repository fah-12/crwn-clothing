
import './App.css';
import Homepage from './components/pages/homepage-component.jsx'
import {Route,Switch} from 'react-router-dom'
import ShopPage from './components/shop/shop.component.jsx'





function App() {
  return (
    <div>
      <Switch>
     <Route exact path='/' component={Homepage}/>
     <Route  path='/shop' component={ShopPage}/>
     </Switch>
    </div>
  );
}

export default App;
