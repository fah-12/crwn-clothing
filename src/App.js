
import './App.css';
import Homepage from './components/pages/homepage-component.jsx'
import {Route,Switch} from 'react-router-dom'
import ShopPage from './components/shop/shop.component.jsx'
import Header from './components/header/header-component.jsx'
import SignInAndSignOut from './components/signin-and-signup-page/signin-and-signup-component.jsx'
import {auth} from './components/firebase/firebase-utilities'
import React from 'react';





class App extends React.Component{

  constructor(){
    super();


    this.state={
currentUser:null
    }
  }

  unsubscribeFromAuth=null;

  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});

      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth(); // close the subscriptiom
  }

  render(){
  return (
    <div>
      <Header CurrentUser={this.state.currentUser}/>
      <Switch>
     <Route exact path='/' component={Homepage}/>
     <Route  path='/shop' component={ShopPage}/>
     <Route  path='/signin' component={SignInAndSignOut}/>
     </Switch>
    </div>
  );
}
}

export default App;
