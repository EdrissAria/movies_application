import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { windowHeight, windowWidth } from '../globals/Dimension'
import { windowHight } from '../globals/Dimension'

export const BannerSlider = ({ data }) => {
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
        marginHorizontal: 5
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    }
})