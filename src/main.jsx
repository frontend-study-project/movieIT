import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router/index.jsx';
import SnackbarProvider from './components/provider/SnackbarProvider.jsx';
import QueryClientProvider from './components/provider/QueryClientProvider.jsx';
import './styles/reset.css';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider>
      <SnackbarProvider>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </QueryClientProvider>
    ,
  </Provider>,
);