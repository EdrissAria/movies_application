import React from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, TextInput, FlatList } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { populerMovies } from '../globals/Data';
import { SearchResults } from '../components/SearchResults';
import  Constants  from 'expo-constants';

export const Search = ({ navigation }) => {
    const searchHander = () => {
        console.log('searching....')
    }
    const searchResults = ({item}) =>{
        return <View style={{ marginVertical: 10 }}><SearchResults navigation={navigation} data={item} /></View>
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000', marginTop: Constants.statusBarHeight}}>
            {/* Search Bar */}
            <View style={{ marginVertical: 20, paddingHorizontal: 20}}>
                    <TextInput
                        onChangeText={() => searchHander}
                        placeholder="search here.."
                        style={styles.search}
                        placeholderTextColor="#bbb"
                        keyboardType="web-search"
                    />
            </View>
            <View style={{flex: 1, paddingBottom: 60}}>
                <FlatList
                    data={populerMovies}
                    renderItem={searchResults}
                    style={{paddingHorizontal: 20}}
                    contentContainerStyle={{ paddingBottom: 20 }}
                /> 
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    search: {
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 10,
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 18,
        borderColor: 'rgba(255, 255, 255, 0.4)',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderWidth: 1,
    }
})