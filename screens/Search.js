import React, {useRef}from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, TextInput, TouchableWithoutFeedback, FlatList } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { populerMovies } from '../globals/Data';
import { SearchResults } from '../components/SearchResults';
import  Constants  from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';

export const Search = ({ navigation }) => {
    const searchHander = () => {
        console.log('searching....')
    }
    const searchResults = ({item}) =>{
        return <View style={{ marginVertical: 10 }}><SearchResults navigation={navigation} data={item} /></View>
    }
    const desmiss = useRef(null); 

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000', marginTop: Constants.statusBarHeight, paddingHorizontal: 20}}>
            {/* Search Bar */}
            <View style={styles.search}>
                    <TouchableWithoutFeedback onPress={() => desmiss.current.clear()}>
                        <AntDesign name="delete" size={22} color="rgb(234, 88, 12)"/>
                    </TouchableWithoutFeedback>
                    <TextInput
                        ref={desmiss}
                        onChangeText={() => searchHander}
                        placeholder="search here.."
                        placeholderTextColor="#bbb"
                        keyboardType="web-search"
                        style={{ color:'#ddd', marginHorizontal: 3,fontSize: 18, width: 240, padding: 2}}
                    />
                    <AntDesign name="find" size={24} color="rgb(234, 88, 12)"/>
            </View>
            <View style={{flex: 1, paddingBottom: 60}}>
                <FlatList
                    data={populerMovies}
                    renderItem={searchResults}
                    contentContainerStyle={{ paddingBottom: 20,}}
                /> 
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    search: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 30,
        borderColor: 'rgb(234, 88, 12)',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderWidth: 1,
        marginVertical: 20,
    }
})