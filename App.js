import React from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './routes/Home'
import MovieDetails from './screens/MovieDetails';
import ActorsDetails from './screens/ActorsDetails';
import { MovieCatagory } from './screens/MovieCatagory'
import CustomFonts from './globals/CustomFonts';
import { MainHeader } from './components/MainHeader';
import { MovieGenre } from './screens/MovieGenre';
import { QueryClient, QueryClientProvider } from 'react-query'
import { I18nManager } from 'react-native';

I18nManager.allowRTL(false); 

const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CustomFonts>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="home" component={Home}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name="movieDetails" component={MovieDetails}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name="actorsDetails" component={ActorsDetails}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name="movieCatagory" component={MovieCatagory}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name="movieGenre" component={MovieGenre}
              options={{
                headerShown: false
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </CustomFonts>
    </QueryClientProvider>
  );
}

export default App;