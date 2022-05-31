import {useEffect, useState} from 'react'
import {StyleSheet, View, SafeAreaView, Text,TouchableOpacity, FlatList, ActivityIndicator} from 'react-native'
import RenderMovies from '../components/RenderMovies';
import { AntDesign } from '@expo/vector-icons';
import { globalStyle } from '../globals/GlobalStyle';
import * as api from '../api/Api'
import { useQuery } from 'react-query'
 
const MovieGenre = ({ navigation, route }) => {
    console.log('MovieGenre.js renderssssssssssssss')
    const {id, genre} = route.params;
    
    const getMoviesByGenre = useQuery(['bygenre', id],()=> api.getByGenre(id));  
    
    // useEffect(()=>{

    //     let isUnmounted = false; 

    //     !isUnmounted && setGenreMovie(getMoviesByGenre?.data?[...getMoviesByGenre?.data?.data?.results]:[]);
        
    //     return () => {isUnmounted = true}
        
    // }, [getMoviesByGenre.data])
   
    const renderGenre = ({ item }) => {
        return <RenderMovies data={item} navigation={navigation} />
    }
    
    const navigateTo = ()=> navigation.goBack()

    return (
        <SafeAreaView style={globalStyle.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.back} onPress={navigateTo}>
                    <AntDesign name="left" size={20} color='rgb(234, 88, 12)' />
                </TouchableOpacity>
                <Text style={styles.title}>{genre}</Text>
            </View>
            {getMoviesByGenre.isLoading?<ActivityIndicator size="large" color="rgb(234, 88, 12)" style={{marginTop: 20}}/>:
            <FlatList 
                numColumns={3}
                data={getMoviesByGenre?.data?.data?.results}
                extraData={getMoviesByGenre?.data?.data?.results}
                renderItem={renderGenre}
                contentContainerStyle={{ paddingBottom: 20 }}
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
        backgroundColor: 'rgba(0,0,0, 0.5)', 
    }, 
    title: {
        fontSize: 21,
        marginLeft: 16, 
        fontFamily: 'roboto', 
        color: 'rgb(234, 88, 12)', 
        textAlign: 'center', 
        textTransform: 'capitalize'
    }, 
    back: { 
        padding: 6, 
        backgroundColor: 'rgba(250,250,250, 0.18)', 
        borderRadius: 20 
    }
})

export default MovieGenre; 