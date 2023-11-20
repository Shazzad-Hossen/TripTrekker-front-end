import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import { router } from './routes/publicRoutes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './services/store';
import GlobalProvider from './Provider/GlobalProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
      <GlobalProvider><RouterProvider router={router} /></GlobalProvider>
      </PersistGate> 
      </Provider>
  </React.StrictMode>,
)
