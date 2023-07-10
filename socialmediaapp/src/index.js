import React from 'react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';

import App from './App';

import LikeContextComp from './contexts/likeContext';

const root = document.getElementById('root');
const roote = createRoot(root);




roote.render(
  <StrictMode>
    <Router>
        <LikeContextComp>
          <App />
          
        </LikeContextComp>
    </Router>
  </StrictMode>
);
