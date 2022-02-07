import React from 'react'
import {StyleSheet, View, Text, Image } from 'react-native'
import { globalStyle } from '../globals/GlobalStyle'
import Constants from 'expo-constants'

export const MainHeader = () => {
    return (
        <View style={{ marginTop: Constants.statusBarHeight,backgroundColor: '#000', height: 40, justifyContent: 'center', paddingHorizontal: 20}}>
            <Text style={{ color: 'coral', textTransform: 'uppercase'}}>Movies</Text>
            <Image source={require('../assets/images/movies.png')} style={{ width: 20, height: 20, position: 'absolute', right: 20 }} />
        </View>
    )
}
 

