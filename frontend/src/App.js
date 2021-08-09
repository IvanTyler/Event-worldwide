import './App.css';
import Header from './Components/Header/Header';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import PosterList from './Components/PosterList/PosterList';
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

function App() {
  // axios.get('http://87.249.49.53:3001/');

  return (
    <div className="App">
      <Router>
        <Header />
        <main>
            <Switch>

              <Route exact path="/">
                <DescriptionProject />
                <PosterList />
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
