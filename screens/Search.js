import { useRef, useState } from 'react';
import { StyleSheet, View, SafeAreaView, TextInput, TouchableWithoutFeedback, FlatList, Keyboard, ActivityIndicator } from 'react-native'
import SearchResults from '../components/SearchResults';
import { AntDesign } from '@expo/vector-icons';
import { useQuery } from 'react-query'
import * as api from '../api/Api';
import { globalStyle } from '../globals/GlobalStyle';
import { colors, fonts } from '../globals/ConstantStyles'


const Search = ({ navigation }) => {
    const [search, setSearch] = useState(null);
    const [dismiss, setDismiss] = useState(false);
    const desmiss = useRef(null);

    function debounce (fn, timeout = 300){
        let timer; 
        return (...args) =>{
            if(timer) clearTimeout(timer)
            timer = setTimeout(()=> fn(args), timeout); 
        }
    }

    const { data, isLoading } = useQuery(['searching', search], () => api.search(search), { enabled: !!search });

    const searchHander = debounce((query)=>{
        setSearch(query)
        setDismiss(true)
    }, 500)

    const clearSearch = () => {
        desmiss.current.clear();
        setDismiss(false)
    }

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
                                <AntDesign name="close" size={22} color={colors.orange} />
                            </TouchableWithoutFeedback> : null
                        }
                        <TextInput
                            ref={desmiss}
                            onChangeText={searchHander}
                            placeholder="search here.."
                            placeholderTextColor={colors.darkGray}
                            keyboardType="web-search"
                            style={styles.searchInput}
                        />
                        <AntDesign name="search1" size={24} color={colors.orange} />
                    </View>
                    <View style={styles.view}>
                    {search == '' ? null : (isLoading ? <ActivityIndicator size="large" color={colors.orange} style={{ marginTop: 20 }} /> :
                        <FlatList
                            data={data?.results}
                            extraData={data?.results}
                            renderItem={searchResults}
                            scrollEnabled
                            scrollEventThrottle={16}
                            decelerationRate="fast"
                            contentContainerStyle={{ paddingBottom: 20, }}
                        />
                    )}
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
        fontSize: fonts.large,
        color: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 30,
        borderColor: colors.orange,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderWidth: 1,
        marginVertical: 20,
    },
    searchInput: {
        color: colors.lightGray,
        marginHorizontal: 3,
        fontSize: fonts.large,
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