import React, {memo} from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import ExpoFastImage from 'expo-fast-image'
import { useNavigate } from '../hooks/useNavigate'

export default memo(({ data }) => {
    
    const [navigateTo] = useNavigate('actorsDetails', {id: data.id}); 

    return(
        <TouchableOpacity onPress={navigateTo}>
            {
            data?.profile_path == null ?
            <Image source={require('../assets/images/user.png')} resizeMethod="resize" style={styles.cast}/>:
            // <Image source={{uri:`https://image.tmdb.org/t/p/w185${data?.profile_path}`}} resizeMode="cover" style={styles.cast}/>
            <ExpoFastImage uri={`https://image.tmdb.org/t/p/original${data?.profile_path}`} resizeMode="cover" cacheKey={data.credit_id} style={styles.cast}/>
            }
        </TouchableOpacity>
    )
})
const styles = StyleSheet.create({
    cast: {
        width: 60,
        height: 80,
        borderRadius: 10,
        marginHorizontal: 6
    }
})