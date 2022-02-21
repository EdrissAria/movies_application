import React, { useState } from 'react'
import { View, Text, FlatList, TouchableWithoutFeedback } from 'react-native'
import { movieActors } from '../globals/Data';
import { MovieActors } from '../components/MovieActors';

export const RednerStoryLine = ({ navigation, data }) => {

    const [more, setMore] = useState(false);

    const renderActors = ({ item, index }) => {
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
                    data={movieActors}
                    renderItem={renderActors}
                    horizontal={true}
                />
            </View>
        </View>
    )
}