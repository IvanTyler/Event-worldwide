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

function App() {
  axios.get('http://87.249.49.53:3001/');
  
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>

          <Route exact path="/signUp">
            <SignUp />
          </Route>

          <Route exact path="/signIn">
            <SignIn />
          </Route>

          <PosterList/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
