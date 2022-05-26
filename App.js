import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './routes/Home'
import MovieDetails from './screens/MovieDetails'
import ActorsDetails from './screens/ActorsDetails';
import CatagoryMovies from './screens/CatagoryMovies'
import CustomFonts from './globals/CustomFonts';
import MovieGenre from './screens/MovieGenre';
import { QueryClient, QueryClientProvider } from 'react-query'
import { I18nManager } from 'react-native';

I18nManager.allowRTL(false); 

const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();

const header_shown = {
  headerShown: false
}

const App = () => {
  console.log('app.js rendersssssssssssss')
   
  return (
    <QueryClientProvider client={queryClient}>
      <CustomFonts>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="home" component={Home}
              options={header_shown}
            />
            <Stack.Screen name="movieDetails" component={MovieDetails}
              options={header_shown}
            />
            <Stack.Screen name="actorsDetails" component={ActorsDetails}
              options={header_shown}
            />
            <Stack.Screen name="catagoryMovies" component={CatagoryMovies}
              options={header_shown}
            />
            <Stack.Screen name="movieGenre" component={MovieGenre}
              options={header_shown}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </CustomFonts>
    </QueryClientProvider>
  );
}

export default App;