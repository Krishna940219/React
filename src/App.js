import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shops/shops.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './Components/header/header.component';
import { auth } from './Components/firebase/firebase.utils';

class App extends React.Component {
constructor(){
  super();

  this.state = {
    currentUser:null

  }
}
unsubscribeFromAuth = null;
componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    this.setState({currentUser : user});

    console.log(user);
  })
}

componentWillUnmount() {
  this.unsubscribeFromAuth();
}

render(){
  return (
    <div>
      <BrowserRouter>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}
  
}

export default App;
