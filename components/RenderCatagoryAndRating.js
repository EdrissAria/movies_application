import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Entypo } from '@expo/vector-icons'

export const RenderCatagoryAndRating = () => {
    return (
        <View style={{ flexDirection: 'column' }}>
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: 16,
                    alignItems: 'center',
                    paddingHorizontal: 20
                }}
            >
                {/* Users Scores */}
                <View
                    style={{ borderRightColor: '#999', borderRightWidth: 1, paddingRight: 10 }}
                >
                    <Text style={{ color: '#fff', fontSize: 16, letterSpacing: 2 }}>
                        User Score &nbsp;
                        <Entypo name="star" size={16} color="yellow" style={{ marginLeft: 10 }} />
                        <Text style={{ color: '#fff', fontSize: 14 }}>
                            75.3
                        </Text>
                    </Text>
                </View>
                {/* Rating */}
                <Text style={{ textAlign: 'left', marginLeft: 10 }}>
                    <Entypo name="controller-play" size={20} color="#f00" />
                    &nbsp;
                    <Text style={{ color: '#fff', fontSize: 16, letterSpacing: 2 }}>
                        Play Trailer
                    </Text>
                </Text>
            </View>
            {/* realize day and genre */}
            <View style={{alignItems: 'center',flexDirection: 'column', marginTop: 10, paddingHorizontal: 20, paddingVertical: 4, borderTopColor: '#222', borderTopWidth: 1}}>
                <Text style={{ fontSize: 16, color: '#ccc' }}>3/1/2022 (US)</Text>
                <Text style={{ fontSize: 16, color: 'rgba(255,255,255, 0.6)' }}>Action, Crime, Drama</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    catagoryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 10,
        backgroundColor: '#777'
    }
})