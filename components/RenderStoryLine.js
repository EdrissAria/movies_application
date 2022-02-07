import React from 'react'
import { StyleSheet, View, Text, FlatList, TouchableWithoutFeedback} from 'react-native'
import { movieActors } from '../globals/Data';
import { MovieActors } from '../components/MovieActors';
 
export const RednerStoryLine = ({navigation}) => {
    const renderActors = ({ item, index }) => {
        return <MovieActors data={item} navigation={navigation}/>
    }
    return (
        <View style={{ flex: 1, marginTop: 20, paddingHorizontal: 20, flexDirection: 'column' }}>
            {/* story line */}
            <Text style={{ color: '#eee', fontSize: 18, }}>Story line</Text>
            <Text style={{ color: '#ccc', fontSize: 14, marginTop: 10 }}>
                this is a movie for who can see it at knight alone and get enjoy
                this is a movie for who can see it at knight alone and get enjoy
                this is a movie for who can see it at knight alone and get enjoy
                this is a movie for who can see it at knight alone and get enjoy...
                <TouchableWithoutFeedback>
                    <Text style={{ color: 'red', fontSize: 14 }}>more</Text>
                </TouchableWithoutFeedback>
            </Text>
            <View style={{ marginTop: 10, paddingBottom: 20 }}>
                <Text style={{ color: '#ddd', fontSize: 16, marginBottom: 10}}>Actors</Text>
                <FlatList
                    data={movieActors}
                    renderItem={renderActors}
                    horizontal={true}
                />
            </View>
        </View>
    )
}