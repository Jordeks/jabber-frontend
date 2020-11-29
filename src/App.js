import MessageContainer from './containers/MessageContainer'
import Home from './components/Home'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { useHistory } from 'react-router';
import Login from './components/Login.js'
import Signup from './components/Signup'



function App() {
  const history = useHistory();
  return (
    <div className='App'>
      <Router>
        <Route exact path='/login' component={Login} history={history}/>
        <Route exact path='/signup' component={Signup} history={history}/>
        <Route exact path="/" component={Home} history={history}/>
        <Route exact path="/messages" component={MessageContainer} history={history} />
      </Router>
    </div>
  );
}

export default App;
