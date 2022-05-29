import { useState, useEffect } from 'react'
import { ScrollView } from 'react-native';
import { MovieHeader, CatagoryAndRating, StoryLine } from '../components/movieSections'; 
import { useQuery } from 'react-query'
import * as api from '../api/Api';

export default function MovieDetails({ navigation, route }) {
    const { id } = route.params;
    const [selectedMovie, setSelectedMovie] = useState({});

    const getMovie = useQuery(['movie', id], () => api.getMovie(id));

    useEffect(() => {
        let isUnmounted = false; 

        !isUnmounted && setSelectedMovie(getMovie?.data ? getMovie?.data : {});
    
        return () => {isUnmounted = true}
        
    }, [getMovie.data])
    
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#000' }}>
            {selectedMovie && (
                <>
                {/* Header */}
                <MovieHeader navigation={navigation} data={selectedMovie} type="movie" />
                
                {/* Catagory & rating */}
                <CatagoryAndRating movie={selectedMovie} />

                {/* Story line */}
                <StoryLine navigation={navigation} movie={selectedMovie} />
                </>
            )}
        </ScrollView>
    )
}
