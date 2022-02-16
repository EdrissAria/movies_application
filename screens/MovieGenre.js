import React from 'react'
import { View, SafeAreaView, Text,TouchableOpacity, Image, FlatList} from 'react-native'
import { populerMovies } from '../globals/Data';
import { Genre } from '../components/Genre';
import Constants  from 'expo-constants';
 
export const MovieGenre = ({ navigation, route }) => {
    const renderGenre = ({ item, index }) => {
        return <View style={{ marginTop: 20 }}><Genre data={item} navigation={navigation}/></View>
    }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#000', paddingHorizontal: 20, marginTop: Constants.statusBarHeight}}>
            <View style={{ paddingVertical: 10, backgroundColor: 'rgba(0,0,0, 0.5)', justifyContent: 'center'}}>
                <Text style={{fontSize: 21, fontFamily: 'roboto-regular', color: '#ddd', textAlign: 'center'}}>Action</Text>
                <TouchableOpacity style={{ position: 'absolute', left: 10, padding: 6, backgroundColor: 'rgba(250,250,250, 0.18)', borderRadius: 20 }} onPress={()=> navigation.goBack()}>
                    <Image source={require('../assets/images/left-arrow.png')} style={{tintColor: 'rgb(234, 88, 12)', width: 20, height: 20}} />
                </TouchableOpacity>
            </View>
            <FlatList 
                numColumns={3}
                data={populerMovies}
                renderItem={renderGenre}
                initialNumToRender={6}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </SafeAreaView>
    )
}
