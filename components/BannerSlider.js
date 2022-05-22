import React, {memo} from 'react'
import { StyleSheet, View} from 'react-native'
import { windowHeight, windowWidth } from '../globals/Dimension'
import ExpoFastImage from 'expo-fast-image'

//width * height = 360X686

export default memo(({ data }) => {
    return (
        <View style={styles.banner}>
            <ExpoFastImage uri={`https://image.tmdb.org/t/p/w780${data.poster_path}`} cacheKey={data.id} resizeMode="cover" style={styles.image} />
        </View>
    )
})

const styles = StyleSheet.create({
    banner: {
        width: windowWidth - 150,
        height: windowHeight / 2.5,
        marginHorizontal: 5,  
        borderRadius: 40, 
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    }
})
