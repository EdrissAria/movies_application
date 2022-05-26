import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Search  from '../screens/Search'
import About from '../screens/About'
import MovieGenres from '../screens/MovieGenres'
import { MainHeader, TabIcon } from '../components/Layout'
import HomeScreen from '../screens/HomeScreen'

const Tab = createBottomTabNavigator();
console.log('Route.js renderssssssssssssss')
const options = {
    tabBarShowLabel: false,
    tabBarStyle: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        elevation: 0,
        backgroundColor: '#111',
        borderRadius: 30,
        height: 60,
        borderTopColor: 'transparent'
    },
    header: () => <MainHeader />, 
    tabBarHideOnKeyboard: true
}

export default function Home() {
    return (
        <Tab.Navigator
            screenOptions={options}
        >
            <Tab.Screen name="homeScreen" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon="home"
                        />
                    ),
                }}
            />
            <Tab.Screen name="search" component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon="search"
                        />
                    ),
                    headerShown: false
                }}
            />

            <Tab.Screen name="movieGenres" component={MovieGenres}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon="grid-outline"
                        />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen name="about" component={About}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon="user"
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}


