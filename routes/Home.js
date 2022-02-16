import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Search } from '../screens/Search'
import { About } from '../screens/About'
import { Catagories } from '../screens/Catagories'
import { TabIcon } from '../components/TabIcon'
import { MainHeader } from '../components/MainHeader'
import { HomeScreen } from '../screens/HomeScreen'

const Tab = createBottomTabNavigator();

export default function Home() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: '#222',
                    height: 60,
                    borderTopColor: 'transparent'
                },
                header: () => <MainHeader />, 
                tabBarHideOnKeyboard: true
            }}
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

            <Tab.Screen name="catagories" component={Catagories}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon="movie"
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
                            icon="circle"
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}


