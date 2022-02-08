import React from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './routes/Home'
import MovieDetails from './screens/MovieDetails';
import ActorsDetails from './screens/ActorsDetails';
import MovieCatagory from './screens/MovieCatagory';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App; 