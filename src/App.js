import './App.css';
import Login from './components/layout/Login';
import Products from './components/layout/Products';
import NotFound from './components/layout/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
function App() {
  return (
    <div className="bg-light">
      <Router>
        <Switch>
          <Route exact path='/'
            component={() => (<Redirect to='/login' />)} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/products" component={Products} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
