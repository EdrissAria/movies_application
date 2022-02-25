import React, { useMemo, useRef, useState } from 'react';
import { StyleSheet, View, SafeAreaView, TextInput, TouchableWithoutFeedback, FlatList, ActivityIndicator, Keyboard, Text } from 'react-native'
import { SearchResults } from '../components/SearchResults';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import { useQuery } from 'react-query'
import * as api from '../components/api/Api';

export const Search = ({ navigation }) => {
    const [search, setSearch] = useState();
    const [dismiss, setDismiss] = useState(false);
    const [searchResult, setSearchResult] = useState();

    const searchHander = (query) => {
        setSearch(query)
        setDismiss(true)
    }

    const searching = useQuery(['searching', search], () => api.search(search));

    useMemo(() => {
        setSearchResult(searching?.data ? searching?.data?.results : []);
    }, [searching?.data])

    const searchResults = ({ item }) => {
        return <View style={{ marginVertical: 10 }}><SearchResults navigation={navigation} data={item} /></View>
    }

    const desmiss = useRef(null);

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#000', marginTop: Constants.statusBarHeight, paddingHorizontal: 20 }}>
                {/* Search Bar */}
                <View style={styles.search}>
                    {dismiss ?
                        <TouchableWithoutFeedback onPress={() => { desmiss.current.clear(); setDismiss(false) }}>
                            <AntDesign name="close" size={22} color="rgb(234, 88, 12)" />
                        </TouchableWithoutFeedback> : null
                    }
                    <TextInput
                        ref={desmiss}
                        onChangeText={searchHander}
                        placeholder="search here.."
                        placeholderTextColor="#bbb"
                        keyboardType="web-search"
                        style={{ color: '#ddd', marginHorizontal: 3, fontSize: 18, width: 240, paddingVertical: 2, paddingHorizontal: 4 }}
                    />
                    <AntDesign name="search1" size={24} color="rgb(234, 88, 12)" />
                </View>
                <View style={{ flex: 1, paddingBottom: 60 }}>
                    {
                        search == undefined ? null : (searching.isLoading ? <ActivityIndicator size="large" color="rgb(234, 88, 12)" style={{ marginTop: 20 }} /> :
                            <FlatList
                                data={searchResult}
                                renderItem={searchResults}
                                contentContainerStyle={{ paddingBottom: 20, }}
                            />
                        )
                    }

                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
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