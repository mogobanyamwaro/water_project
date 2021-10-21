import './App.css';
import Header from './components/header/Header';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Welcome from './pages/Welcome';

import { useGlobalContext } from './context';

function App() {
  const { user, loading } = useGlobalContext();
  return (
    <Router>
      <Header />
      {/* <div className="customContainer">
        {user && loading ? (
          <Route path="/welcome" component={Welcome} exact />
        ) : (
          <Route exact path="/" component={Login} />
        )}
      </div> */}
      {/* {user && loading ? (
        <Route path="/welcome" component={Welcome} exact />
      ) : (
        <Route exact path="/register" component={Register} />
      )} */}
      <Route path="/welcome" component={Welcome} exact />
      <Route exact path="/register" component={Register} />
      <Route exact path="/" component={Login} />
    </Router>
  );
}

export default App;
