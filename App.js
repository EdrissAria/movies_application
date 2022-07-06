import { QueryClient, QueryClientProvider } from 'react-query'
import StackRoutes from './routes/StackRoutes';
import { I18nManager,LogBox } from 'react-native';

I18nManager.allowRTL(false); 
LogBox.ignoreLogs(["ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'."]);
LogBox.ignoreLogs(["Can't perform a React state update on an unmounted component."]);

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StackRoutes />      
    </QueryClientProvider>
  );
}

export default App;