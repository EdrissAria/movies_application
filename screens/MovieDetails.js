import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native';
import { RenderHeader } from '../components/RenderHeader';
import { RenderCatagoryAndRating } from '../components/RenderCatagoryAndRating';
import { RednerStoryLine } from '../components/RenderStoryLine';

export default function MovieDetails({ navigation, route }) {
    const { data } = route.params;
    const [selectedMovie, setSelectedMovie] = useState(null);
    useEffect(() => {
        setSelectedMovie(data);
    }, [])

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#000' }}>
            {/* Header */}
            <RenderHeader navigation={navigation} data={selectedMovie}/>
            {/* Catagory & rating */}
            <RenderCatagoryAndRating />
            {/* Story line */}
            <RednerStoryLine navigation={navigation} />
        </ScrollView>
    )
}
