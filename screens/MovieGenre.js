import React, {useEffect, useState} from 'react'
import {StyleSheet, View, SafeAreaView, Text,TouchableOpacity, FlatList, ActivityIndicator} from 'react-native'
import RenderMovies from '../components/RenderMovies';
import Constants  from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import * as api from '../api/Api'
import { useQuery } from 'react-query'
 
const MovieGenre = ({ navigation, route }) => {
    console.log('MovieGenre.js renderssssssssssssss')
    const {id, genre} = route.params;
    
    const [genreMovie, setGenreMovie] = useState([]);

    const getMoviesByGenre = useQuery(['bygenre', id],()=> api.getByGenre(id));  
    
    useEffect(()=>{
        setGenreMovie(getMoviesByGenre?.data?[...getMoviesByGenre?.data?.data?.results]:[]);
    }, [getMoviesByGenre.data])
   
    const renderGenre = ({ item, index }) => {
        return <RenderMovies data={item} navigation={navigation} />
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{genre}</Text>
                <TouchableOpacity style={styles.back} onPress={()=> navigation.goBack()}>
                    <AntDesign name="left" size={20} color='rgb(234, 88, 12)' />
                </TouchableOpacity>
            </View>
            {getMoviesByGenre.isLoading?<ActivityIndicator size="large" color="rgb(234, 88, 12)" style={{marginTop: 20}}/>:
            <FlatList 
                numColumns={3}
                data={genreMovie}
                extraData={genreMovie}
                renderItem={renderGenre}
                initialNumToRender={6}
                contentContainerStyle={{ paddingBottom: 20 }}
            />}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#000', 
        paddingHorizontal: 20, 
        marginTop: Constants.statusBarHeight
    }, 
    header: {
        height: 60, 
        paddingVertical: 10, 
        backgroundColor: 'rgba(0,0,0, 0.5)', 
        justifyContent: 'center'
    }, 
    title: {
        fontSize: 21, 
        fontFamily: 'roboto-regular', 
        color: 'rgb(234, 88, 12)', 
        textAlign: 'center', 
        textTransform: 'capitalize'
    }, 
    back: {
        position: 'absolute', 
        left: 10, 
        padding: 6, 
        backgroundColor: 'rgba(250,250,250, 0.18)', 
        borderRadius: 20 
    }
})

export default MovieGenre; 