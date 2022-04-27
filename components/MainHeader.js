import React from 'react'
import { StyleSheet, View, Text , Image} from 'react-native'
import Constants from 'expo-constants'

export const MainHeader = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.movies}>Movies</Text>
            <Image source={require('../assets/images/movies.png')}  style={styles.logo} resizeMode="contain" />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: Constants.statusBarHeight, 
        backgroundColor: '#000', 
        height: 60, 
        paddingHorizontal: 20 
    }, 
    movies: {
        color: 'rgb(234, 88, 12)', 
        textTransform: 'uppercase', 
        position: 'absolute', 
        left: 20, 
        marginTop: 20
    }, 
    logo: {
        width: 28, 
        height: 26, 
        position: 'absolute', 
        right: 20, 
        marginTop: 18
    }
})

