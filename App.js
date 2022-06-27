import { QueryClient, QueryClientProvider } from 'react-query'
import StackRoutes from './routes/StackRoutes';
import { I18nManager,LogBox } from 'react-native';

I18nManager.allowRTL(false); 
 

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StackRoutes />      
    </QueryClientProvider>
  );
}

export default App;