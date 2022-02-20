import React from 'react'
import { View, Text} from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export const RenderCastsAbout = ({actor}) => {
    return (
        <View style={{ flex: 1, marginTop: 10, paddingHorizontal: 20}}>
            {/* Social Media */}
            <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                <FontAwesome
                    name="twitter"
                    size={24}
                    color="#ccc"
                    style={{ marginHorizontal: 8 }}
                />
                <FontAwesome
                    name="instagram"
                    size={24}
                    color="#ccc"
                    style={{ marginHorizontal: 8 }}
                />
                <Ionicons
                    name="link"
                    size={24}
                    color="#ccc"
                    style={{ marginHorizontal: 8 }}
                />
            </View>
            {/* Personal Info */}
            <View style={{ marginTop: 10, paddingTop: 10, borderTopColor: '#333', borderTopWidth: 1}}>
                <Text style={{ color: '#ddd', fontSize: 20, letterSpacing: 1, fontWeight: 'bold' }}>Personal Info</Text>
                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', letterSpacing: 1 }}>Known For</Text>
                        <Text style={{ fontSize: 14, color: '#ddd', letterSpacing: 1, marginTop: 3 }}>Acting</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', letterSpacing: 1 }}>Known Credits</Text>
                        <Text style={{ fontSize: 14, color: '#ddd', letterSpacing: 1, marginTop: 3 }}>233</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', letterSpacing: 1 }}>Gender</Text>
                        <Text style={{ fontSize: 14, color: '#ddd', letterSpacing: 1, marginTop: 3 }}>Male</Text>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', letterSpacing: 1 }}>Birthday</Text>
                        <Text style={{ fontSize: 14, color: '#ddd', marginTop: 3 }}>1977/2/3 (44 years old)</Text>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff', letterSpacing: 1 }}>Place Of Birth</Text>
                    <Text style={{ fontSize: 14, color: '#ddd', marginTop: 3 }}>West Newbury, Massachusetts, USA</Text>
                </View>
            </View>
            {/* Biography */}
            <View style={{ marginTop: 12, paddingTop: 10, borderTopColor: '#333', borderTopWidth: 1}}>
                <Text style={{ color: '#ddd', fontSize: 20, letterSpacing: 1, fontWeight: 'bold' }}>Biography</Text>
                <Text style={{ color: '#ddd', fontSize: 16, letterSpacing: 2, lineHeight: 24,marginTop: 6}}>
                    {actor?.about}
                </Text>
            </View>
        </View>
    )
}