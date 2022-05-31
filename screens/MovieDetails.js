import { useState, useEffect } from 'react'
import { ScrollView } from 'react-native';
// import { RenderHeader, RenderCatagoryAndRating, RenderStoryLine } from '../components/MovieSections'; 
import { RenderHeader } from '../components/MovieSections/RenderHeader';
import { RenderCatagoryAndRating } from '../components/MovieSections/RenderCatagoryAndRating'
import { RenderStoryLine } from '../components/MovieSections/RenderStoryLine'
import { useQuery } from 'react-query'
import * as api from '../api/Api';


export default function MovieDetails({ navigation, route }) {
    const { id } = route.params;
    const getMovie = useQuery(['movie', id], () => api.getMovie(id));

    // useEffect(() => {
    //     let isUnmounted = false; 

    //     !isUnmounted && setSelectedMovie(getMovie?.data ? getMovie?.data : {});
    
    //     return () => {isUnmounted = true}
        
    // }, [getMovie.data])
    
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#000' }}>
            {/* Header */}
            <RenderHeader navigation={navigation} data={getMovie?.data} type="movie" />
            {/* Catagory & rating */}
            <RenderCatagoryAndRating movie={getMovie?.data} />
            {/* Story line */}
            <RenderStoryLine navigation={navigation} movie={getMovie?.data} />
        </ScrollView>
    )
}
