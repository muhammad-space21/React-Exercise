import React from 'react';

import './App.css';

import  Post from './components/post-component/post-component';

class App extends React.Component {

    render (){
      return (
        <div className='display'>
          <Post postId={2} />
        </div>
      )
    }
}

export default App;
