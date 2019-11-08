


import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import TodoAppHome from './todoAppHome';
import movieAppStore from './store'
const App = () => (
  <Provider store={movieAppStore}>
    <TodoAppHome />
  </Provider>
);

export default App;