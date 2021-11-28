import './App.css';
import Home from './pages/Home';
import Listings from './pages/Listings';
import ListingsPage from './pages/ListingsPage';
import ListingDetail from './pages/ListingDetail';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import About from './pages/About';
import { Provider } from 'react-redux';
import PrivateRoute from './components/privateRoute';
import NotFound from './components/NotFound';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => (
    <>
    <Provider store={store}>
    <Router>
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/listingsPage" component={ ListingsPage }/>
      <Route exact path="/listings" component={ Listings }/>
      <PrivateRoute exact path='/listings/:id'component={ListingDetail} />
      <Route exact path='/login' component= { Login } />
      <Route exact path='/signup' component={ SignUp } />
      <Route component={NotFound} />
      <Route exact path="/about" component={ About }/>
    </Switch>
    </Router>
    </Provider>
    </>
  );


export default App;
