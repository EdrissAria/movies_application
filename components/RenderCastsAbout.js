import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export const RenderCastsAbout = ({ actor }) => {
    return (
        <View style={styles.container}>
            {/* Social Media */}
            <View style={styles.media}>
                <FontAwesome
                    name="twitter"
                    size={24}
                    color="#ccc"
                    style={styles.icon}
                />
                <FontAwesome
                    name="instagram"
                    size={24}
                    color="#ccc"
                    style={styles.icon}
                />
                <Ionicons
                    name="link"
                    size={24}
                    color="#ccc"
                    style={styles.icon}
                />
            </View>
            {/* Personal Info */}
            <View style={styles.info}>
                <Text style={styles.title}>Personal Info</Text>
                <View style={styles.content}>
                    <View>
                        <Text style={styles.subtitle}>Known For</Text>
                        <Text style={styles.text}>Acting</Text>
                    </View>
                    <View>
                        <Text style={styles.subtitle}>Known Credits</Text>
                        <Text style={styles.text}>233</Text>
                    </View>
                    <View>
                        <Text style={styles.subtitle}>Gender</Text>
                        <Text style={styles.text}>Male</Text>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <View>
                        <Text style={styles.subtitle}>Birthday</Text>
                        <Text style={styles.text}>1977/2/3 (44 years old)</Text>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.subtitle}>Place Of Birth</Text>
                    <Text style={styles.text}>West Newbury, Massachusetts, USA</Text>
                </View>
            </View>
            {/* Biography */}
            <View style={styles.biography}>
                <Text style={styles.bio}>Biography</Text>
                <Text style={styles.about}>
                    {actor?.about}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        paddingHorizontal: 20
    },
    media: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    icon: {
        marginHorizontal: 8
    },
    info: {
        marginTop: 10,
        paddingTop: 10,
        borderTopColor: '#333',
        borderTopWidth: 1
    },
    title: {
        color: '#ddd',
        fontSize: 20,
        letterSpacing: 1,
        fontWeight: 'bold'
    },
    content: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between'
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: 1
    },
    text: {
        fontSize: 14,
        color: '#ddd',
        letterSpacing: 1,
        marginTop: 3
    },
    biography: {
        marginTop: 12,
        paddingTop: 10,
        borderTopColor: '#333',
        borderTopWidth: 1
    },
    bio: {
        color: '#ddd',
        fontSize: 20,
        letterSpacing: 1,
        fontWeight: 'bold'
    },
    about: {
        color: '#ddd',
        fontSize: 16,
        letterSpacing: 2,
        lineHeight: 24,
        marginTop: 6
    }
})