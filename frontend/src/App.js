import './App.css';
import Header from './Components/Header/Header';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import SearchForm from './Components/SearchForm/SearchForm';
import PersonalArea from './Components/PersonalArea/PersonalArea';
import QuickSearchContainer from './Components/QuickSearchContainer/QuickSearchContainer';
import SearchContainer from './Components/SearchContainer/SearchContainer';
import DescriptionProject from './Components/DescriptionProject/DescriptiomProject';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  useEffect(()=> {
    axios.get('https://ikiro.ru/api/')
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
        <main className={window.location.href === 'http://localhost:3000/signUp' ? 'mainSignUp' : 'main'}>
            <Switch>

              <Route exact path="/">
                <DescriptionProject />
              </Route>
              
              <Route exact path="/signUp">
                <SignUp />
              </Route>

              <Route exact path="/signIn">
                <SignIn />
              </Route>

              <Route exact path="/search">
                <SearchContainer />
              </Route>

              <Route exact path="/quicksearch">
                <QuickSearchContainer />
              </Route>

              <Route exact path="/PersonalArea">
                <PersonalArea />
              </Route>

            </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
