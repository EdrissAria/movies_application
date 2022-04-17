import React, { useState, useEffect } from 'react'
import { ScrollView} from 'react-native'
import RenderCastHeader from '../components/RenderCastHeader';
// import { RenderCastsAbout } from '../components/RenderCastsAbout';
 
export default function ActorsDetails({ navigation, route }) {
    console.log('ActorsDetails.js renderssssssssssssss')
    const { data } = route.params;
    const [selectedActor, setSelectedActor] = useState([]);
     
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


