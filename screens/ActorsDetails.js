import { ScrollView } from 'react-native'
import {RenderCastAbout, RenderHeader} from '../components/MovieSections'
import * as api from '../api/Api'
import { useQuery } from 'react-query'
import { colors } from '../globals/ConstantStyles'
 
 
const ActorsDetails = ({ navigation, route }) => {
    console.log('ActorsDetails.js renderssssssssssssss')
    const { id } = route.params;
   
    const getActor = useQuery(['actor', id],()=> api.getActor(id), {enabled: !!id});

    return (
        <ScrollView  style={{ flex: 1, backgroundColor: colors.black, paddingBottom: 20 }}>
            {/* Header */}
            <RenderHeader data={getActor?.data} type="actor" navigation={navigation} />
            {/* about actors */}
            <RenderCastAbout actor={getActor?.data} />
        </ScrollView>
    )
} 

export default ActorsDetails; 