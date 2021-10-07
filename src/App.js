import React from 'react'
import { Switch, Route, BrowserRouter as Router, } from 'react-router-dom'
import Post from './components/post/Post'
import Welcome from './components/welcome/Welcome'


function App() {
   
  return (
    <Router>
      <Switch>  
      <Route exact path='/' >
          <Welcome />
        </Route>
        <Route exact path='/posts' >
          <Post />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
