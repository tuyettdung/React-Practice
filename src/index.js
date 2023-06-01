import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/configStore';


const root = ReactDOM.createRoot(document.getElementById('root'));

//jsx: thẻ của react định nghĩa

root.render(
  <Provider store={store} >
    <App />
  </Provider>
);
