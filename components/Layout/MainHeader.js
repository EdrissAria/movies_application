import { StyleSheet, View , Text , Image } from 'react-native'
import Constants from 'expo-constants'
import { colors } from '../../globals/ConstantStyles'

export const MainHeader = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.movies}>Movies</Text>
            <Image source={require('../../assets/images/movies.png')} resizeMethod="resize" style={styles.logo} resizeMode="contain" />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: Constants.statusBarHeight, 
        backgroundColor: colors.black, 
        height: 60, 
        paddingHorizontal: 20 
    }, 
    movies: {
        fontFamily: 'gothic',
        color: colors.orange, 
        textTransform: 'uppercase', 
        position: 'absolute', 
        left: 20, 
        marginTop: 20
    }, 
    logo: {
        width: 20, 
        height: 20, 
        position: 'absolute', 
        right: 20, 
        marginTop: 18
    }
})