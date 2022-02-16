import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { globalStyle } from '../globals/GlobalStyle'
import Constants from 'expo-constants'

export const MainHeader = () => {
    return (
        <View style={{ marginTop: Constants.statusBarHeight, backgroundColor: '#000', height: 60, paddingHorizontal: 20 }}>
            <Text style={{flexDirection: 'row', flexWrap: 'wrap',paddingBottom: 8}}>
                <Text style={{ color: 'rgb(234, 88, 12)', textTransform: 'uppercase'}}>Movies</Text>
                <Image source={require('../assets/images/movies.png')} style={{ width: 30, height: 30}} />
            </Text>
        </View>
    )
}


