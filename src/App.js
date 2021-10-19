import './App.css';
import Header from './components/header/Header';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Welcome from './pages/Welcome';

function App() {
  return (
    <Router>
      <Header />
      <div className="customContainer">
        <Route exact path="/login" component={Login} />
      </div>
      <Route exact path="/register" component={Register} />
      <Route path="/welcome" component={Welcome} exact />
    </Router>
  );
}

export default App;
