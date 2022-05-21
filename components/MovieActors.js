import React, {memo} from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import ExpoFastImage from 'expo-fast-image'

export default memo(({ data, navigation }) => {
    const navigateTo = () => navigation.navigate('actorsDetails', {data})
    return(
        <TouchableOpacity onPress={navigateTo}>
            {
            data?.profile_path == null ?
            <Image source={require('../assets/images/user.png')} resizeMethod="resize" style={styles.cast}/>:
            // <Image source={{uri:`https://image.tmdb.org/t/p/w45${data?.profile_path}`}} resizeMethod="scale" style={styles.cast}/>
            <ExpoFastImage uri={`https://image.tmdb.org/t/p/w185${data?.profile_path}`} resizeMode="cover" cacheKey={data.credit_id} style={styles.cast}/>
            }
        </TouchableOpacity>
    )
})
const styles = StyleSheet.create({
    title: {
        color: '#eee',
        fontSize: 12,
    },
    genre: {
        color: '#fff',
        fontSize: 12,
        opacity: 0.6
    },
    cast: {
        width: 60,
        height: 80,
        borderRadius: 10,
        marginHorizontal: 6
    }
})