import React from 'react';

import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';

import  Post from './components/post-component/post-component';
import Repositories from './components/repositories/repositories';
import RepositoriesHooks from './components/repositoriesHooks/repositoriesHooks';
import Users from './components/react-router/users.router';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: []
    }
  }

  async componentDidMount() {
    const users = await ( 
      await fetch('https://jsonplaceholder.typicode.com/users')).json();

    this.setState({users});
  };

    render() {
      const { users } = this.state;
      return (
        <Router>
          <Switch>
            <Route exact path='/' render={
              props => <Post postId={2} {...props} />}  
            />
            <Route exact path='/repositories-hooks' component={RepositoriesHooks} />
            <Route exact path='/repositories' component={Repositories} />
            <Route  path='/users' render={
              props => <Users {...props} users={users} />}
            />
            <Route render={ () => <h3>Page not Found</h3>} />
          </Switch>
        </Router>
      )
    }
}

export default App;
