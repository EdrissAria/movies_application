import { memo, useState } from 'react'
import { View, Text, FlatList, TouchableWithoutFeedback } from 'react-native'
import * as api from '../../api/Api'
import { useQuery } from 'react-query'
import  MovieActors  from '../MovieActors';
import { MoreActors } from '../Layouts/MoreActors'
import {styles} from './index'


export const RenderStoryLine = memo(({ navigation, movie }) => {

    const [more, setMore] = useState(false);
    const [moreActor, setMoreActor] = useState(false)
    const [showListFooter, setShowListFooter] = useState(true)

    const getCasts = useQuery(['casts', movie?.id],()=> api.getCasts(movie?.id), {enabled: !!movie?.id}); 

    // useEffect(() => {
    //     let isUnmounted = false; 
    //     !isUnmounted && setCasts(getCasts?.data?[...getCasts?.data?.cast]:[])
    //     return ()=>{isUnmounted = true}
    // }, [getCasts?.data])
    
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
                        moreActor ? getCasts?.data?.cast : (
                            getCasts?.data?.cast?.length > 6 ? getCasts?.data?.cast?.slice(0, 6):
                            getCasts?.data?.cast
                        )
                    }
                    extraData={getCasts?.data?.cast}
                    renderItem={renderActors}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    ListFooterComponent={getCasts?.data?.cast?.length < 6 ? null :(showListFooter ? <MoreActors setMoreActor={setMoreActor} setShowListFooter={setShowListFooter}/>:null)}
                />
            </View>
        </View>
    )
})