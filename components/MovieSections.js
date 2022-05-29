import { memo, useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Platform, FlatList, ImageBackground, Linking, Alert, TouchableWithoutFeedback } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons'
import { windowHeight } from '../globals/Dimension'
import * as api from '../api/Api'
import { useQuery } from 'react-query'
import  MovieActors  from '../components/MovieActors';
import { MoreActors } from '../components/Layout'

// TODO: remove this file