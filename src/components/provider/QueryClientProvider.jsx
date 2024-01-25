import { QueryClient, QueryClientProvider as Provider } from "@tanstack/react-query";

const QueryClientProvider = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        retry: 1,
      },
    }
  });

  return (
    <Provider client={queryClient}>
      {children}
    </Provider>
  );
}

export default QueryClientProvider;
