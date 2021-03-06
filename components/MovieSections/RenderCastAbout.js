import { memo, useState } from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { colors, fonts } from '../../globals/ConstantStyles';

export const RenderCastAbout = memo(({ actor }) => {

    const readMore = () => setMore(true)
    const [more, setMore] = useState(false); 

    return (
        <View style={styles.container}>
            {/* Personal Info */}
            <View style={styles.info}>
                <Text style={styles.title}>Personal Info</Text>
                <View style={styles.content}>
                    <View>
                        <Text style={styles.subtitle}>Known For</Text>
                        <Text style={styles.text}>{actor?.known_for_department}</Text>
                    </View>
                    <View>
                        <Text style={styles.subtitle}>Gender</Text>
                        <Text style={styles.text}>{actor?.gender == 1 ? 'Female' : 'Male'}</Text>
                    </View>
                    <View>
                        <Text style={styles.subtitle}>Popularity</Text>
                        <Text style={styles.text}>{actor?.popularity} <AntDesign color="red" name="heart"/></Text>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <View>
                        <Text style={styles.subtitle}>Birthday</Text>
                        <Text style={styles.text}>{actor?.birthday}</Text>
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.subtitle}>Place Of Birth</Text>
                    <Text style={styles.text}>{actor?.place_of_birth}</Text>
                </View>
            </View>
            {/* Biography */}
            <View style={styles.biography}>
                <Text style={styles.bio}>Biography</Text>
                <Text style={styles.about}>
                    {
                        more ? actor?.biography : (
                            actor?.biography?.length > 300 ? <Text>
                                {actor?.biography?.slice(0, 200)} <TouchableWithoutFeedback onPress={readMore}>
                                    <Text style={styles.more}>Read More...</Text>
                                </TouchableWithoutFeedback></Text> :
                                actor?.biography
                        )
                    }
                </Text>
            </View>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        paddingHorizontal: 20
    },
    info: {
        marginTop: 10,
        paddingTop: 10,
        borderTopColor: colors.darkGray,
        borderTopWidth: 1
    },
    title: {
        color: colors.lightGray,
        fontSize: fonts.large,
        letterSpacing: 1,
        fontWeight: 'bold'
    },
    content: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between'
    },
    subtitle: {
        fontSize: fonts.medium,
        fontWeight: 'bold',
        color: colors.white,
        letterSpacing: 1
    },
    text: {
        fontSize: fonts.small,
        color: colors.lightGray,
        letterSpacing: 1,
        marginTop: 3
    },
    biography: {
        marginTop: 12,
        paddingTop: 10,
        paddingBottom: 20,
        borderTopColor: colors.darkGray,
        borderTopWidth: 1
    },
    bio: {
        color: colors.lightGray,
        fontSize: fonts.large,
        letterSpacing: 1,
        fontWeight: 'bold'
    },
    about: {
        color: colors.lightGray,
        fontSize: fonts.small,
        letterSpacing: 1,
        marginTop: 6, 
        marginLeft: 4, 
        fontFamily: 'roboto'
    }, 
    more: {
        fontSize: fonts.medium, 
        color: 'red'
    }
})

 