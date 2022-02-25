import React, {useState, useMemo} from 'react'
import {View, SafeAreaView, Text,FlatList} from 'react-native'
import Constants  from 'expo-constants';
import { RenderCatagories } from '../components/RenderCatagories';
import * as api from '../components/api/Api'
import { useQuery } from 'react-query'
 
export const Catagories = ({ navigation }) => { 
    const [moviesGenre, setMoviesGenre] = useState([]); 
    
    const getMoviesGenre = useQuery('moviesgenre', api.getGenres);
 
    useMemo(()=>{
        setMoviesGenre(getMoviesGenre?.data?getMoviesGenre?.data?.genres:null); 
    },[getMoviesGenre.data])

    const renderCatagories = ({ item, index }) => {
        return <View style={{ marginTop: 20 }}><RenderCatagories data={item} navigation={navigation}/></View>
    }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#000', paddingHorizontal: 20, marginTop: Constants.statusBarHeight}}>
            <View style={{ paddingVertical: 10, marginTop: 10, backgroundColor: 'rgba(0,0,0, 0.5)', justifyContent: 'center'}}>
                <Text style={{fontSize: 21, fontFamily: 'roboto-regular', color: 'rgb(234, 88, 12)', textAlign: 'center'}}>Movies Genre</Text>
            </View>
            <FlatList 
                numColumns={2}
                data={moviesGenre}
                renderItem={renderCatagories}
                initialNumToRender={4}
                contentContainerStyle={{ paddingBottom: 64}}
            />
        </SafeAreaView>
    )
}
