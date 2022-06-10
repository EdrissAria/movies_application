import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Search  from '../screens/Search'
import About from '../screens/About'
import MovieGenres from '../screens/MovieGenres'
import { MainHeader } from '../components/Layouts/MainHeader'
import { TabIcon } from '../components/Layouts/TabIcon'
import HomeScreen from '../screens/HomeScreen'
import { icons } from '../globals/icons'

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
        borderTopColor: 'transparent',
        marginHorizontal: 4, 
        zIndex: 0
    },
    header: () => <MainHeader />, 
}

export default function TabRoutes() {
    return (
        <Tab.Navigator
            screenOptions={options}
        >
            <Tab.Screen name="homeScreen" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.home}
                        />
                    ),
                }}
            />
            <Tab.Screen name="search" component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.search}
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
                            icon={icons.grid}
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
                            icon={icons.about}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}


