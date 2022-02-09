import React, { useState, useEffect } from 'react'
import { StyleSheet, View, SafeAreaView, Text,TouchableOpacity, Image, FlatList} from 'react-native'
import { windowHeight } from '../globals/Dimension';
import { populerMovies } from '../globals/Data';
import { Catagory } from '../components/Catagory';
import Constants  from 'expo-constants';

 
export const MovieCatagory = ({ navigation, route }) => {
    const renderCatagory = ({ item, index }) => {
        return <View style={{ marginTop: 20 }}><Catagory data={item} navigation={navigation}/></View>
    }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#000', paddingHorizontal: 20, marginTop: Constants.statusBarHeight}}>
            <View style={{ paddingVertical: 10, backgroundColor: 'transparent', justifyContent: 'center'}}>
                <Text style={{ fontSize: 21, fontFamily: 'roboto-regular', color: '#ddd', textAlign: 'center'}}>Populer Movies</Text>
                
                <Image source={require('../assets/images/left-arrow.png')} style={{tintColor: '#ddd', width: 20, height: 20, position: 'absolute', left: 10}} />
            </View>
            <FlatList 
                numColumns={2}
                data={populerMovies}
                renderItem={renderCatagory}
                initialNumToRender={4}
            />
        </SafeAreaView>
    )
}

