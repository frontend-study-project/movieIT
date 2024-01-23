import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SnackbarProvider } from 'material-ui-snackbar-provider'

import './styles/reset.css'
import './index.css'

const enableMocking = async () => {
  // eslint-disable-next-line no-undef
  if (process.env.NODE_ENV !== 'development') return;

  const { worker } = await import('./mocks/browser');

  return worker.start();
};

enableMocking().then(() => {
  const queryClient = new QueryClient();
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider SnackbarProps={{ autoHideDuration: 4000 }}>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </QueryClientProvider>,
  );
});
