import './App.css';
import HomeScreen from './Views/HomeScreen';
import DeckBuilder from './Views/DeckBuilder';
import Shop from './Views/Shop';
import Login from './Views/Login';
import Registration from './Views/Registration';
import { HashRouter as Router, Route } from 'react-router-dom';
import Tutorial from './Views/Tutorial';

function App() {

  return (
    <Router>
      <Route exact path = '/login' component={Login}/>
      <Route exact path = '/register' component={Registration}/>
      <Route exact path = '/' component={HomeScreen}/>
      <Route exact path = '/deck-builder' component={DeckBuilder} />
      <Route exact path = '/shop' component = {Shop}/>
      <Route exact path = '/tutorial' component = {Tutorial} />
    </Router>
  );
}

export default App;
