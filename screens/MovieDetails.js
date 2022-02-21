import React from 'react'
import { ScrollView } from 'react-native';
import { RenderHeader } from '../components/RenderHeader';
import { RenderCatagoryAndRating } from '../components/RenderCatagoryAndRating';
import { RednerStoryLine } from '../components/RenderStoryLine';

export default function MovieDetails({ navigation, route }) {
    const { data } = route.params;
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#000' }}>
            {/* Header */}
            <RenderHeader navigation={navigation} data={data}/>
            {/* Catagory & rating */}
            <RenderCatagoryAndRating data={data}/>
            {/* Story line */}
            <RednerStoryLine navigation={navigation} data={data}/>
        </ScrollView>
    )
}
