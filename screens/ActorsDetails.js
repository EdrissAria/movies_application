import React, { useState, useEffect } from 'react'
import { ScrollView} from 'react-native'
import RenderCastHeader from '../components/RenderCastHeader';
import RenderCastsAbout from '../components/RenderCastsAbout';
import * as api from '../api/Api'
import { useQuery } from 'react-query'
 
const ActorsDetails = ({ navigation, route }) => {
    console.log('ActorsDetails.js renderssssssssssssss')
    const { data } = route.params;
    const [selectedActor, setSelectedActor] = useState({});
     
    const getActor = useQuery(['actor', data.id],()=> api.getActor(data.id), {enabled: !!data.id});

    useEffect(() => {
        setSelectedActor(getActor?.data ? getActor?.data:{})
    }, [getActor.data])

    return (
        <ScrollView  style={{ flex: 1, backgroundColor: '#000', paddingBottom: 20 }}>
            {/* Header */}
            <RenderCastHeader actor={selectedActor} navigation={navigation} />
            {/* about actors */}
            <RenderCastsAbout actor={selectedActor} />
        </ScrollView>
    )
} 

export default ActorsDetails; 