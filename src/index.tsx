import { render } from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './views/App';

function Index():React.ComponentElement<any, any> {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

render(<Index />, document.getElementById('root'));
