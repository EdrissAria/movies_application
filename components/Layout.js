import { StyleSheet, View , TouchableOpacity, Text , Image } from 'react-native'
import { windowWidth } from '../globals/Dimension'
import Constants from 'expo-constants'
import { Entypo, Feather, Ionicons} from '@expo/vector-icons'

// the main header of app 

export const MainHeader = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.movies}>Movies</Text>
            <Image source={require('../assets/images/movies.png')} resizeMethod="resize" style={styles.logo} resizeMode="contain" />
        </View>
    )
}

// for flatlist to see more movie
export const ListFooter = ({navigateTo}) =>{
    // const navigateTo = () => navigation.navigate('catagoryMovies', {catagory}) 
    return(
        <TouchableOpacity onPress={navigateTo}>
             <View style={styles.plus}>
                <Entypo 
                    name="plus"
                    size={60}
                    color="rgb(234, 88, 12)"
                />
             </View>
        </TouchableOpacity>
    )
}

// function to see more actors 
export const MoreActors = ({setMoreActor, setShowListFooter}) =>{

    const action = ()=> {
        setMoreActor(true);
        setShowListFooter(false);
    }

    return(
        <TouchableOpacity onPress={action}>
             <View style={styles.plusActors}>
                <Entypo 
                    name="plus"
                    size={60}
                    color="rgb(234, 88, 12)"
                />
             </View>
        </TouchableOpacity>
    )
}

// icons for tab navigation 

export const TabIcon = ({ focused, icon }) => {
    return (
        <View style={styles.container}>
            {
                icon == 'grid-outline' ? (<Ionicons
                    name={icon}
                    size={24}
                    color={focused ? 'rgb(234, 88, 12)' : '#fff'}
                />) : (
                    icon == 'home' ? (<Entypo
                        name={icon}
                        size={24}
                        color={focused ? 'rgb(234, 88, 12)' : '#fff'}
                    />)
                        : (<Feather
                            name={icon}
                            size={24}
                            color={focused ? 'rgb(234, 88, 12)' : '#fff'}
                        />))
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    plus: {
        justifyContent: 'center',
        alignItems: 'center', 
        width: (windowWidth - 76)/3, 
        height: 140, 
        backgroundColor: '#222', 
        borderRadius: 14, 
        marginHorizontal: 6
    },
    plusActors: {
        justifyContent: 'center',
        alignItems: 'center', 
        width: 60,
        height: 80,
        backgroundColor: '#222', 
        borderRadius: 14, 
        marginHorizontal: 6
    },
    header: {
        marginTop: Constants.statusBarHeight, 
        backgroundColor: '#000', 
        height: 60, 
        paddingHorizontal: 20 
    }, 
    movies: {
        fontFamily: 'gothic',
        color: 'rgb(234, 88, 12)', 
        textTransform: 'uppercase', 
        position: 'absolute', 
        left: 20, 
        marginTop: 20
    }, 
    logo: {
        width: 26, 
        height: 26, 
        position: 'absolute', 
        right: 20, 
        marginTop: 18
    }
})

