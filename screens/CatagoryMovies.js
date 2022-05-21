import React, { useState, useEffect } from 'react'
import { StyleSheet, View, SafeAreaView, Text,TouchableOpacity,FlatList, ActivityIndicator} from 'react-native'
import { Entypo } from '@expo/vector-icons'
import RenderMovies  from '../components/RenderMovies';
import Constants  from 'expo-constants';
import * as api from '../api/Api'
import { useQuery } from 'react-query'
 
const CatagoryMovies = ({ navigation, route }) => {
    const {catagory, data} = route.params;

    console.log('CatagoryMovies.js renderssssssssssssss')

    const [page, setPage] = useState(2); 
    const [allMovies, setAllMovies] = useState([...data]); 
    const [movies, setMovies] = useState([]); 

    const getMovies = useQuery(['movies', page, catagory],() => api.getMovies(page, catagory));
    
    useEffect(()=>{   
        let isUnmounted = false; 
        !isUnmounted && setMovies(getMovies?.data?[...getMovies?.data?.results]:null); 
        return ()=> isUnmounted = true; 
    },[])
    
    const endReached = () => {
        console.log('page: ', page)
        setPage(p => p + 1); 
        setMovies(getMovies?.data?[...getMovies?.data?.results]:null); 
        movies && setAllMovies(prev => [...prev, ...movies]);
    }

    const renderCatagory = ({ item }) => {
        return <RenderMovies data={item} navigation={navigation}/>
    }

    const navigateTo = ()=> navigation.goBack()
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{catagory == 'top_rated'?'Top rated': catagory} Movies</Text>
                <TouchableOpacity style={styles.backBtn} onPress={navigateTo}>
                    <Entypo name="chevron-thin-left" size={22} color='rgb(234, 88, 12)' />
                </TouchableOpacity>
            </View>
            {/* {getAllMovies.isLoading?<ActivityIndicator size="large" color="red" style={styles.loading}/>: */}
            <FlatList 
                numColumns={3}
                data={allMovies}
                extraData={movies}
                renderItem={renderCatagory}
                contentContainerStyle={{ paddingBottom: 20 }}
                onEndReachedThreshold={0}
                onEndReached={endReached}
                ListFooterComponent={()=> movies != null?<ActivityIndicator size="large" color="red" style={{marginTop: 20}}/>:null}

            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#000', 
        paddingHorizontal: 20, 
        marginTop: Constants.statusBarHeight
    }, 
    header: {
        height: 60, 
        paddingVertical: 10, 
        backgroundColor: 'rgba(0,0,0, 0.5)', 
        justifyContent: 'center'
    }, 
    title: {
        fontSize: 21, 
        fontFamily: 'roboto', 
        color: 'rgb(234, 88, 12)', 
        textAlign: 'center', 
        textTransform: 'capitalize'
    }, 
    backBtn: { 
        position: 'absolute', 
        left: 10, 
        padding: 6, 
        backgroundColor: 'rgba(250,250,250, 0.18)', 
        borderRadius: 20 
    }, 
    loading: {
        flex: 1, 
        alignSelf: 'center'
    }
})

export default CatagoryMovies; 