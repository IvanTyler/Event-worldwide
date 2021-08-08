import './App.css';
import Header from './Components/Header/Header';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import PosterList from './Components/PosterList/PosterList';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  useEffect(()=> {
    axios.get('http://ikiro.ru/api/signup/')
    .then(res => console.log(res.data, 'DEFENDER'))
    .catch(err => console.log('========>>>', err))
  })
  // useEffect(()=> {
  //   axios.get('https://ikiro.ru/XYU/')
  //   .then(res => console.log(res.data))
  //   .catch(err => console.log('========>>>', err))
  // })

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          
          <Route exact path="/">
            <PosterList />
          </Route>

          <Route exact path="/signUp">
            <SignUp />
          </Route>

          <Route exact path="/signIn">
            <SignIn />
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
