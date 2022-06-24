import { memo, useState } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableWithoutFeedback } from 'react-native'
import * as api from '../../api/Api'
import { useQuery } from 'react-query'
import  MovieActors  from '../MovieActors';
import { MoreActors } from '../Layout'
import { colors, fonts } from '../../globals/ConstantStyles';


export const RenderStoryLine = memo(({ navigation, movie }) => {

    const [more, setMore] = useState(false);
    const [moreActor, setMoreActor] = useState(false)
    const [showListFooter, setShowListFooter] = useState(true)

    const { data } = useQuery(['casts', movie?.id],()=> api.getCasts(movie?.id), {enabled: !!movie?.id}); 
    
    const renderActors = ({ item }) => {
        return <MovieActors data={item} navigation={navigation} />
    }
     
    return (
        <View style={styles.container}>
            {/* story line */}
            <Text style={styles.title}>Overview</Text>
            <Text style={styles.overview}>
                {
                    more ? movie?.overview : (
                        movie?.overview?.length > 200 ? <Text>
                        {movie?.overview?.slice(0, 200)} <TouchableWithoutFeedback onPress={() => setMore(true)}>
                        <Text style={styles.more}>Read More...</Text>
                        </TouchableWithoutFeedback></Text> :
                        movie?.overview
                    )
                }
            </Text>
            <View style={styles.casts}>
                <Text style={styles.castTitle}>Top Billed Cast</Text>
                <FlatList
                    data={
                        moreActor ? data?.cast : (
                            data?.cast?.length > 6 ? data?.cast?.slice(0, 6):
                            data?.cast
                        )
                    }
                    extraData={data?.cast}
                    renderItem={renderActors}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    ListFooterComponent={data?.cast?.length < 6 ? null :(showListFooter ? <MoreActors setMoreActor={setMoreActor} setShowListFooter={setShowListFooter}/>:null)}
                />
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginTop: 10, 
        paddingHorizontal: 20, 
        flexDirection: 'column'
    }, 
    title: {
        color: colors.lightGray,
        fontSize: fonts.large,
        letterSpacing: 1
    }, 
    overview: {
        color: colors.lightGray, 
        fontSize: fonts.small, 
        marginTop: 10, 
        fontFamily: 'roboto'
    }, 
    more: {
        color: 'red', 
        fontSize: fonts.small
    }, 
    casts: {
        marginTop: 10, 
        paddingBottom: 20 
    }, 
    castTitle: {
        color: colors.lightGray, 
        fontSize: fonts.medium, 
        marginBottom: 10, 
        letterSpacing: 1 
    }
})