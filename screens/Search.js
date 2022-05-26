import { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, SafeAreaView, TextInput, TouchableWithoutFeedback, FlatList, Keyboard } from 'react-native'
import SearchResults from '../components/SearchResults';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import { useQuery } from 'react-query'
import * as api from '../api/Api';

const Search = ({ navigation }) => {
    console.log('out of the search')
    const [search, setSearch] = useState();
    const [dismiss, setDismiss] = useState(false);
    const [searchResult, setSearchResult] = useState();

    const desmiss = useRef(null);

    const searchHander = (query) => {
        setTimeout(() => {
            setSearch(query)
        }, 500)
        setDismiss(true)
    }

    const searching = useQuery(['searching', search], () => api.search(search), { enabled: !!search });

    const clearSearch = () => {
        desmiss.current.clear();
        setDismiss(false)
        setSearchResult([])
    }

    useEffect(() => {
        let isUnmounted = false;
        !isUnmounted && setSearchResult(searching?.data ? [...searching?.data?.results] : []);
        return () => { isUnmounted = true }
    }, [searching.data])

    const searchResults = ({ item }) => {
        return <SearchResults navigation={navigation} data={item} />
    }

    return (
            <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
                <SafeAreaView style={styles.container}>
                    {/* Search Bar */}
                    <View style={styles.search}>
                        {dismiss ?
                            <TouchableWithoutFeedback onPress={clearSearch}>
                                <AntDesign name="close" size={22} color="rgb(234, 88, 12)" />
                            </TouchableWithoutFeedback> : null
                        }
                        <TextInput
                            ref={desmiss}
                            onChangeText={searchHander}
                            placeholder="search here.."
                            placeholderTextColor="#bbb"
                            keyboardType="web-search"
                            style={styles.searchInput}
                        />
                        <AntDesign name="search1" size={24} color="rgb(234, 88, 12)" />
                    </View>
                    <View style={styles.view}>
                        <FlatList
                            data={searchResult}
                            extraData={searchResult}
                            renderItem={searchResults}
                            scrollEnabled
                            scrollEventThrottle={16}
                            decelerationRate="fast"
                            contentContainerStyle={{ paddingBottom: 20, }}
                        />
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
    },
    container: {
        flex: 1,
        backgroundColor: '#000',
        marginTop: Constants.statusBarHeight,
        paddingHorizontal: 20
    },
    searchInput: {
        color: '#ddd',
        marginHorizontal: 3,
        fontSize: 18,
        width: 230,
        paddingVertical: 2,
        paddingHorizontal: 4
    },
    view: {
        flex: 1,
        paddingBottom: 60
    }
})

export default Search;