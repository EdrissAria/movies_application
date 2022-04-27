import React, {memo} from 'react'
import { StyleSheet, View} from 'react-native'
import { windowHeight, windowWidth } from '../globals/Dimension'
import ExpoFastImage from 'expo-fast-image'

export default memo(({ data }) => {
    console.log(windowWidth+'X'+windowHeight)
    return (
        <View style={styles.banner}>
            <ExpoFastImage uri={`https://image.tmdb.org/t/p/original${data.poster_path}`} cacheKey={data.id}  resizeMethod="scale" resizeMode="contain" style={styles.image} />
        </View>
    )
})

const styles = StyleSheet.create({
    banner: {
        width: windowWidth - 50,
        height: windowHeight / 2.5,
        marginHorizontal: 5,  
        borderRadius: 40, 
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    }
})
