import {View, SafeAreaView, Text,FlatList, StyleSheet} from 'react-native'
import RenderGenres from '../components/RenderGenres';
import * as api from '../api/Api'
import { useQuery } from 'react-query'
import { globalStyle } from '../globals/GlobalStyle';
import { colors, fonts } from '../globals/ConstantStyles'
 
const MovieGenres = ({ navigation }) => { 

    const getMoviesGenre = useQuery('moviesgenre', api.getGenres);

    const renderCatagories = ({ item }) => {
        return <RenderGenres data={item} navigation={navigation}/>
    }
    
    return (
        <SafeAreaView style={globalStyle.container}>
            <View style={styles.title}>
                <Text style={styles.genre}>Movies Genre</Text>
            </View>
            <FlatList 
                numColumns={2}
                data={getMoviesGenre?.data?.genres}
                extraData={getMoviesGenre?.data?.genres}
                renderItem={renderCatagories}
                contentContainerStyle={{ paddingBottom: 74}}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        paddingVertical: 10, 
        marginTop: 10, 
        backgroundColor: colors.transparent
    }, 
    genre: {
        fontSize: fonts.large, 
        fontFamily: 'roboto', 
        color: colors.orange, 
        marginLeft: 6
    }
})

export default MovieGenres; 