import { useState } from 'react';
import {StyleSheet, View, SafeAreaView, Text,TouchableOpacity, FlatList, ActivityIndicator} from 'react-native'
import RenderMovies from '../components/RenderMovies';
import { Entypo } from '@expo/vector-icons';
import { globalStyle } from '../globals/GlobalStyle';
import * as api from '../api/Api'
import { useInfiniteQuery } from 'react-query'
import { colors, fonts } from '../globals/ConstantStyles'

 
const MovieGenre = ({ navigation, route }) => {
    const [totalPages, setTotalPages] = useState(0)
    const {id, genre} = route.params;
    
    const {data, hasNextPage, isFetching, fetchNextPage, isLoading } = useInfiniteQuery(['bygenre', id],({pageParam = 1})=> api.getByGenre(id, pageParam, setTotalPages), {
        getNextPageParam: (_lastpage, pages) => {
            if(pages.length < totalPages){
                return pages.length + 1
            }else{
                return undefined
            }
        }
    });  

    const renderGenre = ({ item }) => {
        return <RenderMovies data={item} navigation={navigation} />
    }

    return (
        <SafeAreaView style={globalStyle.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.back} onPress={()=> navigation.goBack()}>
                    <Entypo name="chevron-thin-left" size={22} color={colors.orange} />
                </TouchableOpacity>
                <Text style={styles.title}>{genre}</Text>
            </View>
            {isLoading?<ActivityIndicator size="large" color={colors.orange} style={{ marginTop: 20 }}/>:
            <FlatList 
                numColumns={3}
                data={data?.pages?.flat()}
                extraData={data?.pages?.flat()}
                renderItem={renderGenre}
                contentContainerStyle={{ paddingBottom: 20 }}
                onEndReachedThreshold={0.2}
                onEndReached={fetchNextPage}
                ListFooterComponent={isFetching ? <ActivityIndicator color={colors.orange} size="large" />: (!hasNextPage && null)}
            />}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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
        textAlign: 'center', 
        textTransform: 'capitalize'
    }, 
    back: { 
        padding: 6, 
        borderRadius: 20 
    }
})

export default MovieGenre; 