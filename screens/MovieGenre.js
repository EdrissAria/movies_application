import {View, FlatList, ActivityIndicator} from 'react-native'
import RenderMovies from '../components/RenderMovies';
import { globalStyle } from '../globals/GlobalStyle';
import * as api from '../api/Api'
import { useInfiniteQuery } from 'react-query'
import { colors } from '../globals/ConstantStyles'
import { Header } from '../components/Layout'
 
const MovieGenre = ({ navigation, route }) => {
    const {id, genre} = route.params;
    
    const {data,hasNextPage, isFetching, fetchNextPage, isLoading} = useInfiniteQuery(['bygenre', id],({pageParam = 1})=> api.getByGenre(id, pageParam), {
        getNextPageParam: (_lastpage, pages) => {
            if(hasNextPage){
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
        <View style={globalStyle.container}>
            <Header title={genre} />
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
        </View>
    )
}

export default MovieGenre; 