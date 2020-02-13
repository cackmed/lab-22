import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CharacterList from '../components/CharacterList';
import CharacterDetail from '../components/CharacterDetails';
import Header from '../components/Header';


export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={CharacterList} />
        <Route path="/character/:id" component={CharacterDetail} />
      </Switch>
    </Router>
  );
}


