import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from './screens/Home'
import { Search } from './screens/Search'
import { Me } from './screens/Me'
import { Downloads } from './screens/Downloads'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
            headerShown: false
          }}
      >
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="search" component={Search} />
        <Tab.Screen name="downloads" component={Downloads} />
        <Tab.Screen name="me" component={Me} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

 
