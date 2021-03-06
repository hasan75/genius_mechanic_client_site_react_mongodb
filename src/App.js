import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './context/authProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';
import UpdateService from './Pages/UpdateService/UpdateService';

function App() {
  return (
    <div className="App">
       <AuthProvider>
       <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute exact path='/booking/:serviceId'>
              <Booking></Booking>
            </PrivateRoute>
            <Route exact path = '/addservice'>
              <AddService></AddService>
            </Route>
            <Route exact path = '/manageservices'>
              <ManageServices></ManageServices>
            </Route>
            <Route exact path = '/services/update/:serviceId'>
              <UpdateService></UpdateService>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
       </Router>
       </AuthProvider>
    </div>
  );
}

export default App;
