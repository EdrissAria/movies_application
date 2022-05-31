import { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, SafeAreaView, TextInput, TouchableWithoutFeedback, FlatList, Keyboard } from 'react-native'
import SearchResults from '../components/SearchResults';
import { AntDesign } from '@expo/vector-icons';
import { useQuery } from 'react-query'
import * as api from '../api/Api';
import { globalStyle } from '../globals/GlobalStyle';

const Search = ({ navigation }) => {
    console.log('out of the search')
    const [search, setSearch] = useState();
    const [dismiss, setDismiss] = useState(false);
    const desmiss = useRef(null);

    function debounce (fn, timeout = 300){
        let timer; 
        return (...args) =>{
            if(timer) clearTimeout(timer)
            timer = setTimeout(()=> fn(args), timeout); 
        }
    }
    const searchHander = debounce((query)=>{
        setSearch(query)
        setDismiss(true)
    })

    const searching = useQuery(['searching', search], () => api.search(search), { enabled: !!search });

    const clearSearch = () => {
        desmiss.current.clear();
        setDismiss(false)
        setSearchResult([])
    }

    // useEffect(() => {
    //     let isUnmounted = false;
    //     !isUnmounted && setSearchResult(searching?.data ? [...searching?.data?.results] : []);
    //     return () => { isUnmounted = true }
    // }, [searching.data])

    const searchResults = ({ item }) => {
        return <SearchResults navigation={navigation} data={item} />
    }

    return (
            <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
                <SafeAreaView style={globalStyle.container}>
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
                            data={searching?.data?.results}
                            extraData={searching?.data?.results}
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