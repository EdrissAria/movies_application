import React, { useState, useEffect, memo } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useQuery } from 'react-query'
import * as api from '../api/Api'
// import ExpoFastImage from 'expo-fast-image'

export default memo(({ data, navigation }) => {
    const [genres, setGenres] = useState([]);
    
    const getGenres = useQuery('genres', api.getGenres);
    
    const navigateTo = () => navigation.navigate('movieDetails', { id: data?.id })

    useEffect(() => {
        let isUnmounted = false; 
        !isUnmounted && setGenres(getGenres?.data ? getGenres?.data?.genres : [])
        return ()=>{isUnmounted = true}
    }, [getGenres.data])

    const Gen = [];
    genres.map(g => {
        data?.genre_ids.filter(n => { g.id == n ? Gen.push(g.name) : null })
    })

    return (
        <SafeAreaView>
            <TouchableOpacity onPress={navigateTo}>
                <View
                    style={styles.results}
                >
                    <Image source={{ uri:`https://image.tmdb.org/t/p/w154${data.poster_path}` }} resizeMethod="scale" style={styles.image}/>
                    {/* <ExpoFastImage uri={`https://image.tmdb.org/t/p/w154${data.poster_path}`} cacheKey={data.id} resizeMethod="scale" style={styles.image} /> */}
                    <View
                        style={styles.search}
                    >
                        <Text style={styles.title}>{data?.title?.length > 20 ? data?.title?.slice(0, 20) + '..' : data?.title}</Text>
                        <View style={styles.movie}>
                            <AntDesign name="star" size={16} color="yellow" />
                            <Text style={styles.vote}>
                                {data?.vote_count}
                            </Text>
                        </View>
                        <Text style={styles.genre}>{Gen.map(g => g + ', ')}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
})

const styles = StyleSheet.create({
    results: {
        flexDirection: 'row',
        width: '100%',
        height: 120,
        borderColor: 'rgb(234, 88, 12)',
        borderWidth: 1,
        borderRadius: 16,
        padding: 10,
        marginVertical: 10
    },
    search: {
        marginLeft: 10,
        flexDirection: 'column'
    },
    title: {
        color: '#eee',
        fontSize: 18,
        textTransform: 'capitalize'
    },
    movie: {
        flexDirection: 'row',
        marginLeft: 3,
        marginTop: 10
    },
    vote: {
        color: '#fff',
        fontSize: 14,
        marginLeft: 4,
        color: 'yellow'
    },
    genre: {
        fontSize: 12,
        marginTop: 10,
        color: '#ccc',
        marginLeft: 4,
        width: 190
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 16
    }
})