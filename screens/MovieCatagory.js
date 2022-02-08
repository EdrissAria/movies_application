import React, { useState, useEffect } from 'react'
import { StyleSheet, View, SafeAreaView, Text,TouchableOpacity, Image, ScrollView} from 'react-native'
import { windowHeight } from '../globals/Dimension';
import Constants from 'expo-constants'

export default function MovieCatagory({ navigation, route }) {
    
    return (
        <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
            <Text>this is movies catagory page</Text>
        </SafeAreaView>
    )
}

