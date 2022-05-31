import {useState, useEffect} from 'react'
import {View, SafeAreaView, Text,FlatList, StyleSheet} from 'react-native'
import RenderGenres from '../components/RenderGenres';
import * as api from '../api/Api'
import { useQuery } from 'react-query'
import { globalStyle } from '../globals/GlobalStyle';
 
const MovieGenres = ({ navigation }) => { 
    console.log('Catagories.js renderssssssssssssss')

    const getMoviesGenre = useQuery('moviesgenre', api.getGenres);
 
    // useEffect(()=>{
    //     let isUnmounted = false; 
    //     !isUnmounted && setMoviesGenre(getMoviesGenre?.data?[...getMoviesGenre?.data?.genres]:null); 
    //     return ()=>{isUnmounted = true}
    // },[getMoviesGenre.data])

    const renderCatagories = ({ item }) => {
        return <RenderGenres data={item} navigation={navigation}/>
    }
    
    return (
        <SafeAreaView style={globalStyle.container}>
            <View style={styles.title}>
                <Text style={styles.genre}>Genres</Text>
            </View>
            <FlatList 
                numColumns={2}
                data={getMoviesGenre?.data?.genres}
                extraData={getMoviesGenre?.data?.genres}
                renderItem={renderCatagories}
                contentContainerStyle={{ paddingBottom: 64}}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        paddingVertical: 10, 
        marginTop: 10, 
        backgroundColor: 'rgba(0,0,0, 0.5)', 
        justifyContent: 'center'
    }, 
    genre: {
        fontSize: 21, 
        fontFamily: 'roboto', 
        color: 'rgb(234, 88, 12)', 
    }
})

export default MovieGenres; 