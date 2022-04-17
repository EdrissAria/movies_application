import React, {useState, useMemo, useEffect} from 'react'
import { ScrollView } from 'react-native';
import RenderHeader from '../components/RenderHeader';
import RenderCatagoryAndRating from '../components/RenderCatagoryAndRating';
import RednerStoryLine from '../components/RenderStoryLine';
import { useQuery } from 'react-query'
import * as api from '../api/Api';

function MovieDetails({ navigation, route }) {
    console.log('MovieDetails.js renderssssssssssssss')
    const { id } = route.params;
    const [selectedMovie, setSelectedMovie] = useState({}); 

    const getMovie = useQuery(['movie',  id],() => api.getMovie(id));
    
    useEffect(()=>{
        setSelectedMovie(getMovie?.data?getMovie?.data:{}); 
    },[getMovie.data])

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#000' }}>
            {/* Header */}
            <RenderHeader navigation={navigation} movie={selectedMovie}/>
            {/* Catagory & rating */}
            <RenderCatagoryAndRating movie={selectedMovie}/>
            {/* Story line */}
            <RednerStoryLine navigation={navigation} movie={selectedMovie}/>
        </ScrollView>
    )
}

export default React.memo(MovieDetails)