import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.jsx'

import './styles/reset.css'
import './index.css'
import SnackbarProvider from './components/provider/SnackbarProvider.jsx'
import QueryClientProvider from './components/provider/QueryClientProvider.jsx'

const enableMocking = async () => {
  // eslint-disable-next-line no-undef
  if (process.env.NODE_ENV !== 'development') return;

  const { worker } = await import('./mocks/browser');

  return worker.start();
};

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider>
      <SnackbarProvider>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </QueryClientProvider>,
  );
});
