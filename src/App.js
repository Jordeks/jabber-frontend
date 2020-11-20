import MessageContainer from './containers/MessageContainer'
import Home from './components/Home'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { useHistory } from 'react-router';

function App() {
  const history = useHistory();
  return (
    <div className='App'>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/messages" component={MessageContainer} history={history} />
      </Router>
    </div>
  );
}

export default App;
