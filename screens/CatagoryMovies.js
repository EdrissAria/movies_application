import { useState } from 'react'
import { StyleSheet, SafeAreaView, FlatList, ActivityIndicator } from 'react-native'
import RenderMovies from '../components/RenderMovies';
import Constants from 'expo-constants';
import * as api from '../api/Api'
import { useInfiniteQuery } from 'react-query'
import { colors, fonts } from '../globals/ConstantStyles'
import { Header } from '../components/Layout'

const CatagoryMovies = ({ navigation, route }) => {
    const [totalPages, setTotalPages] = useState(0)
    const { catagory } = route.params;


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
            <Header title={catagory == 'top_rated' ? 'Top rated' : catagory} />
            <FlatList
                numColumns={3}
                data={data?.pages?.flat()}
                extraData={data?.pages?.flat()}
                renderItem={renderCatagory}
                contentContainerStyle={{ paddingBottom: 20 }}
                onEndReachedThreshold={0.2}
                onEndReached={fetchNextPage}
                ListFooterComponent={isFetching ? <ActivityIndicator color={colors.orange} size="large" />: (!hasNextPage && null)}
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