import React, { useState, useEffect } from 'react'
import { ScrollView} from 'react-native'
import { RenderCastHeader } from '../components/RenderCastHeader';
import { RenderCastsAbout } from '../components/RenderCastsAbout';

export default function ActorsDetails({ navigation, route }) {
    const { data } = route.params;
    const [selectedActor, setSelectedActor] = useState(null);

    useEffect(() => {
        setSelectedActor(data);
    }, [])
    
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#000' }}>
            {/* Header */}
            <RenderCastHeader actor={selectedActor} data={data} navigation={navigation}/>
            {/* about actors */}
            {<RenderCastsAbout actor={selectedActor} />}
        </ScrollView>
    )
}

