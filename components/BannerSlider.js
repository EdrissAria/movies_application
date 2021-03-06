import {memo} from 'react'
import { StyleSheet, View, Image} from 'react-native'
import { windowHeight, windowWidth } from '../globals/Dimension'

//width * height = 360X686

export default memo(({ data }) => {
    return (
        <View style={styles.banner}>
            <Image source={{uri: `https://image.tmdb.org/t/p/original${data.poster_path}`}} cacheKey={data.id} resizeMode="cover" resizeMethod="resize" style={styles.image} />
        </View>
    )
})

const styles = StyleSheet.create({
    banner: {
        width: windowWidth - 150,
        height: windowHeight / 2.5,
        marginHorizontal: 5,   
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 30,
    }
})
