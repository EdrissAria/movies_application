import React, { useState, useMemo} from 'react'
import { View, Text, FlatList, TouchableWithoutFeedback } from 'react-native'
import { MovieActors } from '../components/MovieActors';
import * as api from './api/Api'
import { useQuery } from 'react-query'

export const RednerStoryLine = ({ navigation, data }) => {
    const [casts, setCasts] = useState([])
    const [more, setMore] = useState(false);

    const getCasts = useQuery(['casts', data?.id],()=> api.getCasts(data?.id)); 

    useMemo(()=>{
        setCasts(getCasts?.data?getCasts?.data?.cast:[])
    }, [getCasts?.data]) 
 
    const renderActors = ({ item }) => {
        return <MovieActors data={item} navigation={navigation} />
    }
    return (
        <View style={{ flex: 1, marginTop: 10, paddingHorizontal: 20, flexDirection: 'column' }}>
            {/* story line */}
            <Text style={{ color: '#eee', fontSize: 18, letterSpacing: 1 }}>Overview</Text>
            <Text style={{ color: '#ccc', fontSize: 14, marginTop: 10, fontFamily: 'roboto' }}>
                {
                    more ? data?.overview : (
                        data?.overview?.length > 200 ? <Text>
                        {data?.overview?.slice(0, 200)} <TouchableWithoutFeedback onPress={() => setMore(true)}>
                            <Text style={{ color: 'red', fontSize: 14 }}>more</Text>
                        </TouchableWithoutFeedback>...</Text> :
                        data?.overview
                    )
                }
            </Text>
            <View style={{ marginTop: 10, paddingBottom: 20 }}>
                <Text style={{ color: '#ddd', fontSize: 16, marginBottom: 10, letterSpacing: 1 }}>Top Billed Cast</Text>
                <FlatList
                    data={casts}
                    renderItem={renderActors}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                />
            </View>
        </View>
    )
}