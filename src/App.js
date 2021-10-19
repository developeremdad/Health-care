import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './posts/Home/Home';
import NotFound from './posts/NotFound/NotFound';
import DetailsService from './posts/Home/DetailsService/DetailsService';
import Header from './posts/Shared/Header/Header';
import Login from './posts/Login/Login/Login';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './posts/Login/PrivateRoute/PrivateRoute';
import AllServices from './posts/Home/AllServices/AllServices';
import Footer from './posts/Shared/Footer/Footer';
import Appointment from './posts/Appointment/Appointment';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <PrivateRoute path="/services">
            <AllServices></AllServices>
          </PrivateRoute>

          <PrivateRoute path="/details/:Id">
            <DetailsService></DetailsService>
          </PrivateRoute>

          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </AuthProvider>
  );
}

export default App;
