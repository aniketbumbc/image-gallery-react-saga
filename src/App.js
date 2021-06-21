import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';

import configStore from './store';
const store = configStore();

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Header />
        <ImageGrid />
      </Provider>
    </div>
  );
}

export default App;
