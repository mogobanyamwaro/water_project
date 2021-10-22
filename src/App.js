import './App.css';
import Header from './components/header/Header';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import CustomAppBar from './components/appBar/CustomAppBar'

import { useGlobalContext } from './context';

function App() {
  const { user, loading } = useGlobalContext();
  return (
    <Router>
     
   <CustomAppBar/>
      <Route path="/welcome" component={Welcome} exact />
      <Route exact path="/register" component={Register} />
      <Route exact path="/" component={Login} />
    </Router>
  );
}

export default App;
