import { QueryClient, QueryClientProvider } from 'react-query'
import StackRoutes from './routes/StackRoutes';

const queryClient = new QueryClient();

const App = () => {
  console.log('app.js rendersssssssssssss')   
  return (
    <QueryClientProvider client={queryClient}>
      <StackRoutes />      
    </QueryClientProvider>
  );
}

export default App;