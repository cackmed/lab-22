import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CharacterList from '../components/CharacterList';
import CharacterDetails from '../components/CharacterDetails';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CharacterList} />
        <Route path="/character/:id" component={CharacterDetails} />
      </Switch>
    </Router>
  );
}


