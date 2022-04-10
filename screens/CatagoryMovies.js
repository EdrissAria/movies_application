import React, { useState, useMemo, useEffect} from 'react'
import { View, SafeAreaView, Text,TouchableOpacity,ActivityIndicator, FlatList} from 'react-native'
import { Entypo } from '@expo/vector-icons'
import Catagory  from '../components/Catagory';
import Constants  from 'expo-constants';
import * as api from '../components/api/Api'
import { useQuery } from 'react-query'
 
export const CatagoryMovies = ({ navigation, route }) => {
    const {catagory} = route.params;
    const [page, setPage] = useState(1); 
    const [allMovies, setAllMovies] = useState([]); 
    const [movies, setMovies] = useState([]); 
    
    const getAllMovies = useQuery(['allmovies', catagory],() => api.getAllMovies(catagory));
    const getMovies = useQuery(['movies', page, catagory],() => api.getMovies(page, catagory));
      
    useMemo(()=>{
        setAllMovies(getAllMovies?.data?getAllMovies?.data?.results:null); 
        setMovies(getMovies?.data?getMovies?.data?.results:null); 
    },[getMovies.data, getAllMovies.data])

    const renderCatagory = ({ item }) => {
        return <View style={{ marginTop: 20 }}><Catagory data={item} navigation={navigation}/></View>
    }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#000', paddingHorizontal: 20, marginTop: Constants.statusBarHeight}}>
            <View style={{height: 60,paddingVertical: 10, backgroundColor: 'rgba(0,0,0, 0.5)', justifyContent: 'center'}}>
                <Text style={{fontSize: 21, fontFamily: 'roboto-regular', color: 'rgb(234, 88, 12)', textAlign: 'center', textTransform: 'capitalize'}}>{catagory == 'top_rated'?'Top rated': catagory} Movies</Text>
                <TouchableOpacity style={{ position: 'absolute', left: 10, padding: 6, backgroundColor: 'rgba(250,250,250, 0.18)', borderRadius: 20 }} onPress={()=> navigation.goBack()}>
                    <Entypo name="chevron-thin-left" size={22} color='rgb(234, 88, 12)' />
                </TouchableOpacity>
            </View>
            {getAllMovies.isLoading?<ActivityIndicator size="large" color="red" style={{marginTop:20, alignSelf: 'center'}}/>:
            <FlatList 
                numColumns={3}
                data={allMovies}
                extraData={allMovies}
                renderItem={renderCatagory}
                initialNumToRender={4}
                contentContainerStyle={{ paddingBottom: 20 }}
                onEndReachedThreshold={0}
                onEndReached={() => {
                    setPage(p => p+1); 
                    movies != null && allMovies.push(...movies);
                }}
                ListFooterComponent={()=> movies != null?<ActivityIndicator size="large" color="red" style={{marginTop: 20}}/>:null}
            />}
        </SafeAreaView>
    )
}

