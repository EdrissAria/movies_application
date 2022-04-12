import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { windowHeight, windowWidth } from '../globals/Dimension'

const BannerSlider = ({ data }) => {
    return (
        <View style={styles.banner}>
            <Image source={{ uri: "https://image.tmdb.org/t/p/w300" + data.poster_path }} resizeMode="stretch" style={styles.image} />
        </View>
    )
}

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

export default React.memo(BannerSlider)