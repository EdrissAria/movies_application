import { ScrollView } from 'react-native';
import { RenderHeader, RenderCatagoryAndRating, RenderStoryLine } from '../components/MovieSections'; 
import { useQuery } from 'react-query'
import * as api from '../api/Api';


export default function MovieDetails({ navigation, route }) {
    const { id } = route.params;
    const getMovie = useQuery(['movie', id], () => api.getMovie(id));

    
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#000' }}>
            {/* Header */}
            <RenderHeader navigation={navigation} data={getMovie?.data} type="movie" />
            {/* Catagory & rating */}
            <RenderCatagoryAndRating movie={getMovie?.data} />
            {/* Story line */}
            <RenderStoryLine navigation={navigation} movie={getMovie?.data} />
        </ScrollView>
    )
}
