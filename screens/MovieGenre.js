import React, {useMemo, useState, useEffect} from 'react'
import { View, SafeAreaView, Text,TouchableOpacity, FlatList, Alert} from 'react-native'
import { Genre } from '../components/Genre';
import Constants  from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import * as api from '../components/api/Api'
import { useQuery } from 'react-query'
 
export const MovieGenre = ({ navigation, route }) => {
    const {id} = route.params;
    
    const [genreMovie, setGenreMovie] = useState([]);

    const getMoviesByGenre = useQuery(['bygenre', id],()=> api.getByGenre(id));  
    
    // useMemo(()=>{
    //     setGenreMovie(getMoviesByGenre?.data?getMoviesByGenre?.data?.results:[]);
    // }, [getMoviesByGenre.data])

    useEffect(()=>{
        setGenreMovie(getMoviesByGenre?.data?getMoviesByGenre?.data?.results:[]);
    })

    console.log(genreMovie)

    const renderGenre = ({ item, index }) => {
        return <View style={{ marginTop: 20 }}><Genre data={item} navigation={navigation}/></View>
    }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#000', paddingHorizontal: 20, marginTop: Constants.statusBarHeight}}>
            <View style={{ paddingVertical: 10, backgroundColor: 'rgba(0,0,0, 0.5)', justifyContent: 'center'}}>
                <Text style={{fontSize: 21, fontFamily: 'roboto-regular', color: 'rgb(234, 88, 12)', textAlign: 'center'}}>Action</Text>
                <TouchableOpacity style={{ position: 'absolute', left: 10, padding: 6, backgroundColor: 'rgba(250,250,250, 0.18)', borderRadius: 20 }} onPress={()=> navigation.goBack()}>
                    <AntDesign name="left" size={20} color='rgb(234, 88, 12)' />
                </TouchableOpacity>
            </View>
            <FlatList 
                numColumns={3}
                data={genreMovie}
                renderItem={renderGenre}
                initialNumToRender={6}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </SafeAreaView>
    )
}
