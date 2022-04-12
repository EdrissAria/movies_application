import React, { useState, useEffect} from 'react'
import { StyleSheet, View, Text, FlatList, TouchableWithoutFeedback } from 'react-native'
import  MovieActors  from '../components/MovieActors';
import * as api from '../api/Api'
import { useQuery } from 'react-query'

export const RednerStoryLine = ({ navigation, movie }) => {

    const [casts, setCasts] = useState([])
    const [more, setMore] = useState(false);

    const getCasts = useQuery(['casts', movie?.id],()=> api.getCasts(movie?.id), {enabled: !!movie.id}); 

    useEffect(() => {
        setCasts(getCasts?.data?getCasts?.data?.cast:[])
    }, [getCasts?.data])
    
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
                        <Text style={styles.more}>more</Text>
                        </TouchableWithoutFeedback>...</Text> :
                        movie?.overview
                    )
                }
            </Text>
            <View style={styles.casts}>
                <Text style={styles.castTitle}>Top Billed Cast</Text>
                <FlatList
                    data={casts}
                    renderItem={renderActors}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginTop: 10, 
        paddingHorizontal: 20, 
        flexDirection: 'column'
    }, 
    title: {
        color: '#eee',
        fontSize: 18,
        letterSpacing: 1
    }, 
    overview: {
        color: '#ccc', 
        fontSize: 14, 
        marginTop: 10, 
        fontFamily: 'roboto'
    }, 
    more: {
        color: 'red', 
        fontSize: 14
    }, 
    casts: {
        marginTop: 10, 
        paddingBottom: 20 
    }, 
    castTitle: {
        color: '#ddd', 
        fontSize: 16, 
        marginBottom: 10, 
        letterSpacing: 1 
    }
})