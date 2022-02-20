import React from 'react'; 
import {StyleSheet, View, Text,ScrollView, Image, SafeAreaView} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export const About = ({navigation})=> {
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#000', alignItems: 'center' }}>
            <View style={{ marginTop: 20, paddingHorizontal: 20}}>                 
                <Image source={require('../assets/images/movies.png')} resizeMode="contain" style={{ width: 60, height: 60, marginTop: 20, alignSelf: 'center'}}/>
                <Text style={{ color: '#ddd', fontSize: 16, letterSpacing: 2, lineHeight: 24, marginTop: 16, textAlign: 'center'}}>
                    Movies is an application for showing movie details as well as cast details
                    here you can search movies, see movies by genre lot more ...
                </Text>
                <View style={{ marginTop: 20, flexDirection: 'column', alignItems: 'center'}}>
                    {/* about developer */}
                    <Text style={{ color: '#ccc', fontSize: 20, letterSpacing: 1, fontWeight: 'bold', textAlign: 'center'}}>About Developer</Text>
                    <Image source={require('../assets/images/bishak.png')} resizeMode="cover"
                        style={{ width: 50, height: 50, borderRadius: 25, alignSelf: 'center', marginTop: 20, backgroundColor: '#222'}}
                    />  
                    <Text style={{ color: '#ccc', fontSize: 16, letterSpacing: 1,marginTop: 10}}>M.Edriss Aria</Text>
                    <View
                        style={{ borderColor: '#666', borderWidth: 1, marginTop: 20, backgroundColor: '#ccc', width: '100%', height: 50, borderRadius: 6, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}
                    >
                        <FontAwesome 
                            name="github"
                            size={24}
                            color="#000"
                            style={{ position: 'absolute', right: 16 }}
                        />
                        <Text
                            style={{ fontSize: 18, fontFamily: 'roboto',fontWeight: 'bold', letterSpacing: 2,color: '#222'}}
                        >
                            GitHub
                        </Text>
                    </View>
                    <View
                        style={{ borderColor: '#666', borderWidth: 1, marginTop: 20, backgroundColor: 'orange', width: '100%', height: 50, borderRadius: 6, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}
                    >
                        <FontAwesome 
                            name="envelope"
                            size={24}
                            color="#000"
                            style={{ position: 'absolute', right: 16 }}
                        />
                        <Text
                            style={{ fontSize: 18, fontFamily: 'roboto',fontWeight: 'bold', letterSpacing: 2,color: '#222'}}
                        >
                            E-MAIL
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
