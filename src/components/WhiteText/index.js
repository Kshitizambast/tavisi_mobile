import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native';


const WhiteText = (props) => {

    return (
        <Text style={{color:'#fff', fontSize:props.size, letterSpacing:1.5}}>{props.text}</Text>
    )

}

export default WhiteText;