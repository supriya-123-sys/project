import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import './App.scss';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';


function App() {
  return (
    <Router>
       <div className="App">
       
      <Switch> 
      <Route exact path="/" component={Home} /> 
      <Route exact path="/login" component={Login} />
      <Route exact path="/menu" component={Menu} />
     </Switch> 
    {/* <Login /> */}
     {/* <Menu /> */}
    
    </div>
    </Router>
   
  );
}

export default App;
