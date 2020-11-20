import MessageContainer from './containers/MessageContainer'
import Home from './components/Home'
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Home />
        <Route exact path="/" component={Home} />
        <Route exact path="/messages" component={MessageContainer} />
      </Router>
    </>
  );
}

export default App;
