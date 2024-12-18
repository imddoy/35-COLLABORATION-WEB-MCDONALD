import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';
import { Global, ThemeProvider } from '@emotion/react';
import theme from './styles/theme';
import GlobalStyle from './styles/global';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Suspense } from 'react';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <Suspense fallback={<></>}>
          <RouterProvider router={router} />
        </Suspense>
      </ThemeProvider>
      <div style={{ fontSize: '16px' }}>
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </QueryClientProvider>
  );
};

export default App;
