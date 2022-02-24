import React, {useState, useMemo} from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useQuery } from 'react-query'
import * as api from '../components/api/Api'

export const SearchResults = ({ data, navigation }) => {
    const [genres, setGenres] = useState([]); 

    const getGenres = useQuery('genres', api.getGenres); 

    useMemo(()=>{
        setGenres(getGenres?.data?getGenres?.data?.genres:[]) 
    }, [getGenres.data])

    const Gen = []; 
    genres.map(g=>{
        data?.genre_ids.filter(n => {g.id == n ? Gen.push(g.name) : null})
    }) 
     
    return (
        <TouchableOpacity onPress={() => navigation.navigate('movieDetails', { id: data?.id })}>
            <View
                style={{ flexDirection: 'row',width: '100%', height: 120, borderColor: 'rgb(234, 88, 12)', borderWidth: 1, borderRadius: 16, padding: 10}}
            >
                <Image source={{ uri: "https://image.tmdb.org/t/p/w300"+data.poster_path }} resizeMode="stretch" style={{ width: 100, height: 100, borderRadius: 16 }} />
                <View
                    style={{ marginLeft: 10 , flexDirection: 'column'}}
                >
                    <Text style={{ color: '#eee', fontSize: 18,textTransform: 'capitalize' }}>{data?.title?.length > 20? data?.title?.slice(0, 20)+'..':data?.title}</Text>
                    <View style={{ flexDirection: 'row', marginLeft: 3, marginTop: 10}}>
                        <AntDesign name="star" size={16} color="yellow" />
                        <Text style={{ color: '#fff', fontSize: 14, marginLeft: 4, color: 'yellow' }}>
                            {data?.vote_count}
                        </Text>
                    </View>
                    <Text style={{fontSize: 12,marginTop: 10, color: '#ccc', marginLeft: 4, width: 190}}>{Gen.map(g=> g+', ')}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}