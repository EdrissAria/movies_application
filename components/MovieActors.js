import React, {memo} from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import ExpoFastImage from 'expo-fast-image'

export default memo(({ data, navigation }) => {
    return(
        <TouchableOpacity onPress={()=> navigation.navigate('actorsDetails', {data})}>
            {
            data?.profile_path == null ?
            <Image source={require('../assets/images/user.png')} style={styles.cast}/>:
            <ExpoFastImage uri={`https://image.tmdb.org/t/p/original${data?.profile_path}`} cacheKey={data.credit_id} style={styles.cast}/>
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