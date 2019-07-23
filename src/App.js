import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './Store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          Hello
      </div>
    </Provider>
  );
}

export default App;
