import App from './App';
import { store, persistor } from './redux/store';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import './main.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './components/Loader/Loader';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <BrowserRouter basename="/tweet-cards">
        <App />
        <ToastContainer />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
);
