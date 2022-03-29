import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './Component/Login';
import Register from './Component/Register';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Forgot from './Component/Forgot';
import Table from './Component/Table';
import Add from './Component/Add'
import Edit from './Component/Edit';
import Menu from './Component/Menu';
import User from './Component/User'
import L from './Component/L'
import Profile from './Component/Profile';
import Logout from './Component/Logout';
import AddBook from './Component/AddBook';
const currentUserSubject = localStorage.getItem('token');

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      currentUserSubject ? (
        <Component {...props} />
      ) : (
        <Redirect
          from=''
          to={{
            pathname: "/"
          }}
          noThrow
        />
      )
    }
  />
);

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      currentUserSubject === null ? (
        <Component {...props} />
      ) : (
        <Redirect
          from=''
          to={{
            pathname: "/User"
          }}
          noThrow
        />
      )
    }
  />
);

function App() {
  return (
    <div className="App">
      <Router>
        {/* <L/> */}
        <Menu />
        <Switch>
          {/* <Route exact path='/' component={Login}/> */}
          <PublicRoute exact path="/" component={Login} />


          <PublicRoute path='/Register' component={Register} />
          <PublicRoute path='/forget' component={Forgot} />
          <PrivateRoute path='/Table' component={Table} />
          {/* <PrivateRoute path="/Table" component={Table} /> */}
          <PrivateRoute path='/add' component={Add} />
          <PrivateRoute path='/e/:id' component={Edit} />
          <PrivateRoute  path='/User' component={User} />
          {/* <PublicRoute exact  path='/User' component={User}/> */}
          <PrivateRoute path='/Profile' component={Profile} />
          <PrivateRoute path='/Logout' component={Logout} />
          <PrivateRoute path='/addbook' component={AddBook} />
        

        </Switch>
      </Router>
    </div>
  );
}

export default App;
