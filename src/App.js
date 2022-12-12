import {Switch,Route} from 'react-router-dom';

import Register from './components/Register/register'
import Login from './components/Login/login'
import Home from './components/Home/home';
import User from './components/User/user';
import './App.css'


function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/">
          <Home />
        </Route>
     
      </Switch>
     
    </div>
  );
}

export default App;
