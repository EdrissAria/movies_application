import { StyleSheet, View , TouchableOpacity, Text , Image } from 'react-native'
import { windowWidth } from '../../globals/Dimension'
import Constants from 'expo-constants'
// import { Entypo, Feather, Ionicons} from '@expo/vector-icons'

export const styles = StyleSheet.create({
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
        width: 20, 
        height: 20, 
        position: 'absolute', 
        right: 20, 
        marginTop: 18
    }
})