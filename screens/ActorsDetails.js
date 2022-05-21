import React, { useState, useEffect } from 'react'
import { ScrollView} from 'react-native'
import {RenderCastAbout} from '../components/RenderCastAbout'
import {RenderHeader} from '../components/MovieSections'
import * as api from '../api/Api'
import { useQuery } from 'react-query'
 
const ActorsDetails = ({ navigation, route }) => {
    console.log('ActorsDetails.js renderssssssssssssss')
    const { data } = route.params;
    const [selectedActor, setSelectedActor] = useState({});
     
    const getActor = useQuery(['actor', data.id],()=> api.getActor(data.id), {enabled: !!data.id});

    useEffect(() => {

        let isUnmounted = false; 

        !isUnmounted && setSelectedActor(getActor?.data ? getActor?.data:{})
    
        return () => { isUnmounted = true }

    }, [getActor.data])

    return (
        <ScrollView  style={{ flex: 1, backgroundColor: '#000', paddingBottom: 20 }}>
            {/* Header */}
            <RenderHeader data={selectedActor} type="actor" navigation={navigation} />
            {/* about actors */}
            <RenderCastAbout actor={selectedActor} />
        </ScrollView>
    )
} 

export default ActorsDetails; 