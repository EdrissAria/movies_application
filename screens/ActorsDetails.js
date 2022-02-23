import React, { useState, useMemo, useEffect } from 'react'
import { ScrollView, ActivityIndicator } from 'react-native'
import { RenderCastHeader } from '../components/RenderCastHeader';
import { RenderCastsAbout } from '../components/RenderCastsAbout';
import * as api from '../components/api/Api'
import { useQuery } from 'react-query';

export default function ActorsDetails({ navigation, route }) {
    const { data } = route.params;
    const [selectedActor, setSelectedActor] = useState([]);
    // const getCast = useQuery(['singleCast', data?.credit_id], () => api.getSingleCast(data.credit_id))

    // useMemo(() => {
    //     setSelectedActor(getCast?.data ? getCast?.data : []);
    // }, [getCast.data])

    useEffect(() => {
        setSelectedActor(data)
    })
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#000' }}>
            {/* Header */}
            <RenderCastHeader actor={selectedActor} navigation={navigation} />
            {/* about actors */}
            {/* {<RenderCastsAbout actor={selectedActor} />} */}
        </ScrollView>
    )
} 


