import React from 'react'
import {View, SafeAreaView, Text,FlatList} from 'react-native'
import Constants  from 'expo-constants';
import { MovieCatagories } from '../globals/Data';
import { RenderCatagories } from '../components/RenderCatagories';
 
export const Catagories = ({ navigation, route }) => {
    const renderCatagories = ({ item, index }) => {
        return <View style={{ marginTop: 20 }}><RenderCatagories data={item} navigation={navigation}/></View>
    }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#000', paddingHorizontal: 20, marginTop: Constants.statusBarHeight}}>
            <View style={{ paddingVertical: 10, marginTop: 10, backgroundColor: 'rgba(0,0,0, 0.5)', justifyContent: 'center'}}>
                <Text style={{fontSize: 21, fontFamily: 'roboto-regular', color: 'rgb(234, 88, 12)', textAlign: 'center'}}>Movies By Genres</Text>
            </View>
            <FlatList 
                numColumns={2}
                data={MovieCatagories}
                renderItem={renderCatagories}
                initialNumToRender={4}
                contentContainerStyle={{ paddingBottom: 64}}
            />
        </SafeAreaView>
    )
}
