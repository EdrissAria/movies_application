import React from 'react'
import { StyleSheet, View, Text,TouchableOpacity, Image, Platform, ImageBackground } from 'react-native'
import { windowHeight } from '../globals/Dimension';
 
export const RenderCatagoryAndRating = () => {
    return (
        <View
            style={{
                flexDirection: 'row',
                marginTop: 16,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {/* Age */}
            <View
                style={[
                    styles.catagoryContainer,
                    {
                        marginLeft: 0
                    }
                ]}
            >
                <Text style={{ color: '#fff', fontSize: 14 }}>
                    18+
                </Text>
            </View>
            {/* Genre */}
            <View
                style={[
                    styles.catagoryContainer,
                    {
                        paddingHorizontal: 8,
                    }
                ]}
            >
                <Text style={{ color: '#fff', fontSize: 14 }}>
                    scintific
                </Text>
            </View>
            {/* Rating */}
            <View
                style={styles.catagoryContainer}>
                <Image source={require('../assets/images/star.png')} style={{ width: 15, height: 15, }} resizeMode="contain" />
                <Text style={{ color: '#fff', fontSize: 14 }}>
                    75.3
                </Text>
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