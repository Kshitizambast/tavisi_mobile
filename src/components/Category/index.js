import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import WhiteText from '../WhiteText';


import styles from './styles';


const Category = (props) => {

    return (
        <View>
            <View style={{backgroundColor:'#272B31',flexDirection:'row', justifyContent:'space-between'}}>
                <Pressable onPress={() => alert('Hello Back!')}>
                   <ImageBackground
                    source={{uri: ''}}
                    style={styles.}
                   >

                   </ImageBackground>
                </Pressable>
                <Pressable onPress={() => alert('Hello Cat!')}>
                <View style={{flexDirection:'row', padding:20, }}>
                    <Icon name='ellipsis-h' size={15} color='#fff' style={{marginHorizontal:10, marginTop:10}}/>
                    <WhiteText text='Categories' size={15}/>
                </View>
                </Pressable>
            </View>
       </View>
    )
}

export default Category;