import { View , Text , Image } from 'react-native'
import {styles} from './index'

export const MainHeader = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.movies}>Movies</Text>
            <Image source={require('../../assets/images/movies.png')} resizeMethod="resize" style={styles.logo} resizeMode="contain" />
        </View>
    )
}