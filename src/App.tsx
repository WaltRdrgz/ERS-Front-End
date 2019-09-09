import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Admin from './components/Admin';
import UserInfo from './components/UserInfo';
import NotFound from './components/NotFound';
import UserReimbursements from './components/UserReimbursements';
import SubmitReimbursement from './components/SubmitReimbursement';
import AdminUserInfo from './components/AdminUserInfo';
import UpdateUser from './components/UpdateUser';
import RByUser from './components/RByUser';
import RByStatus from './components/RByStatus';
import AllUsers from './components/AllUsers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-routes">
      <div className="Header">
      <h1>ERS</h1>
      </div>
          

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/userinfo" component={UserInfo} />
          <Route exact path="/userreimbursements" component={UserReimbursements} />
          <Route exact path="/submitreimbursement" component={SubmitReimbursement} />
          <Route exact path="/adminuserinfo" component={AdminUserInfo} />
          <Route exact path="/UpdateUser" component={UpdateUser} />
          <Route exact path="/rbyuser" component={RByUser} />
          <Route exact path="/rbystatus" component={RByStatus} />
          <Route exact path="/allusers" component={AllUsers} />

          

          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
