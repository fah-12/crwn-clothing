
import './App.css';
import Homepage from './components/pages/homepage-component.jsx'
import {Route,Switch} from 'react-router-dom'



const HatsPage=(props)=>{
  console.log(props.match.url)
  return(
    <h1>HatPage</h1>
  )
}
 


function App() {
  return (
    <div>
      <Switch>
     <Route exact path='/' component={Homepage}/>
     <Route  path='/hats' component={HatsPage}/>
     </Switch>
    </div>
  );
}

export default App;
