import React from 'react'
import { View, Text, Image } from 'react-native'
import Constants from 'expo-constants'

export const MainHeader = () => {
    return (
        <View style={{marginTop: Constants.statusBarHeight, backgroundColor: '#000', height: 60, paddingHorizontal: 20 }}>
            <Text style={{ color: 'rgb(234, 88, 12)', textTransform: 'uppercase', position: 'absolute', left: 20, marginTop: 20}}>Movies</Text>
            <Image source={require('../assets/images/movies.png')} style={{ width: 28, height: 26, position: 'absolute', right: 20, marginTop: 18}} resizeMode="contain" />
        </View>
    )
}


