import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './posts/Home/Home';
import NotFound from './posts/NotFound/NotFound';
import DetailsService from './posts/Home/DetailsService/DetailsService';
import Header from './posts/Shared/Header/Header';

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/details/:Id">
            <DetailsService></DetailsService>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
