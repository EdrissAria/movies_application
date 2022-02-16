import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'

export const SearchResults = ({ data, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('movieDetails', { data })}>
            <View
                style={{ flexDirection: 'row', width: '100%', height: 120, borderColor: 'rgb(234, 88, 12)', borderWidth: 1, borderRadius: 16, padding: 10 }}
            >
                <Image source={data?.image} style={{ width: 100, height: 100, borderRadius: 16 }} />
                <View
                    style={{ marginLeft: 10 , flexDirection: 'column'}}
                >
                    <Text style={{ color: '#eee', fontSize: 18,textTransform: 'capitalize' }}>{data?.name}</Text>
                    <View style={{ flexDirection: 'row', marginLeft: 3, marginTop: 10}}>
                        <Image source={require('../assets/images/star.png')} style={{ width: 15, height: 15, }} resizeMode="contain" />
                        <Text style={{ color: '#fff', fontSize: 14, marginLeft: 4, color: 'yellow' }}>
                            75.3
                        </Text>
                    </View>
                    <Text style={{ marginTop: 10, color: '#ccc', marginLeft: 4 }}>action, drama</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

})