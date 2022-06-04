import { useState } from 'react'
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import RenderMovies from '../components/RenderMovies';
import Constants from 'expo-constants';
import * as api from '../api/Api'
import { useInfiniteQuery } from 'react-query'
import { colors, fonts } from '../globals/ConstantStyles'

const CatagoryMovies = ({ navigation, route }) => {
    const [totalPages, setTotalPages] = useState(0)
    const { catagory } = route.params;

    console.log('CatagoryMovies.js renderssssssssssssss')

    const {data, hasNextPage, isFetching, fetchNextPage } = useInfiniteQuery(['movies', catagory], ({pageParam = 1}) => api.getMovies(pageParam, catagory, setTotalPages),{
        getNextPageParam: (_lastpage, pages) => {
            if(pages.length < totalPages){
                return pages.length + 1
            }else{
                return undefined
            }
        }
    });

    const renderCatagory = ({ item }) => {
        return <RenderMovies data={item} navigation={navigation} />
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-thin-left" size={22} color={colors.orange} />
                </TouchableOpacity>
                <Text style={styles.title}>{catagory == 'top_rated' ? 'Top rated' : catagory} Movies</Text>
            </View>
            <FlatList
                numColumns={3}
                data={data?.pages?.flat()}
                extraData={data?.pages?.flat()}
                renderItem={renderCatagory}
                contentContainerStyle={{ paddingBottom: 20 }}
                onEndReachedThreshold={0.2}
                onEndReached={fetchNextPage}
                ListFooterComponent={isFetching ? <ActivityIndicator color="red" size="large" />: (!hasNextPage ? <Text style={{ color: 'red', textAlign: 'center', fontSize: fonts.medium }}>no more movies!</Text>:null)}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        paddingHorizontal: 20,
        marginTop: Constants.statusBarHeight
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        paddingVertical: 10,
        backgroundColor: colors.transparent,
    },
    title: {
        fontSize: fonts.large,
        marginLeft: 16,
        fontFamily: 'roboto',
        color: colors.orange, 
        textTransform: 'capitalize'
    },
    backBtn: {
        padding: 6,
        borderRadius: 20
    }
})

export default CatagoryMovies;