import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import TabRoutes from './TabRoutes';
import MovieDetails from '../screens/MovieDetails'
import ActorsDetails from '../screens/ActorsDetails';
import CatagoryMovies from '../screens/CatagoryMovies'
import CustomFonts from '../globals/CustomFonts';
import MovieGenre from '../screens/MovieGenre';


const Stack = createNativeStackNavigator();

const header_shown = {
  headerShown: false
}

const StackRoutes = () => {
   
  return (
      <CustomFonts>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ 
              initialRouteName: 'tabRoutes',
              initialRouteParams: { transition: 'vertical' },
           }}>
            <Stack.Screen name="tabRoutes" component={TabRoutes}
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
  );
}

export default StackRoutes;