import React, { useState, useEffect } from 'react'
import { View, SafeAreaView, Text,TouchableOpacity, Image, FlatList} from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { populerMovies } from '../globals/Data';
import { Catagory } from '../components/Catagory';
import Constants  from 'expo-constants';
 
export const MovieCatagory = ({ navigation, route }) => {
    const renderCatagory = ({ item, index }) => {
        return <View style={{ marginTop: 20 }}><Catagory data={item} navigation={navigation}/></View>
    }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#000', paddingHorizontal: 20, marginTop: Constants.statusBarHeight}}>
            <View style={{ paddingVertical: 10, backgroundColor: 'rgba(0,0,0, 0.5)', justifyContent: 'center'}}>
                <Text style={{fontSize: 21, fontFamily: 'roboto-regular', color: 'rgb(234, 88, 12)', textAlign: 'center'}}>Populer Movies</Text>
                <TouchableOpacity style={{ position: 'absolute', left: 10, padding: 6, backgroundColor: 'rgba(250,250,250, 0.18)', borderRadius: 20 }} onPress={()=> navigation.goBack()}>
                    <Entypo name="chevron-thin-left" size={20} color='rgb(234, 88, 12)' />
                </TouchableOpacity>
            </View>
            <FlatList 
                numColumns={3}
                data={populerMovies}
                renderItem={renderCatagory}
                initialNumToRender={4}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </SafeAreaView>
    )
}

