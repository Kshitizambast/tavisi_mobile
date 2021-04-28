import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import WhiteText from '../WhiteText';


import styles from './styles';


const Footer = (props) => {

    return (
        <View>
            <View style={styles.navbarContainer} >
                <View>
                    <Image 
                        style={styles.logo}
                        source={require('../../../assets/images/markoLogoMini2.png')}
                    />
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
                    <Pressable onPress={() => alert('Hello') } style={styles.arrowDown}>
                        <View style={{...styles.loginButtonInside, paddingHorizontal:15}}> 
                        <Icon name="facebook" size={30}  color="#D9DADE" />
                        </View>
                    </Pressable>
                    <Pressable onPress={() => alert('Hello') } style={styles.arrowDown}>
                        <View style={styles.loginButtonInside}> 
                        <Icon name="instagram" size={30}  color="#D9DADE" />
                        </View>
                    </Pressable>
                    <Pressable onPress={() => alert('Hello') } style={styles.arrowDown}>
                        <View style={styles.loginButtonInside}> 
                        <Icon name="twitter" size={30}  color="#D9DADE" />
                        </View>
                    </Pressable>
                </View>
            </View>
            <View style={{alignItems:'center', marginVertical:10}}>
                <WhiteText text="Copyright of tavisi tech. @ 2021" size={15}/>
            </View>
      </View>
    )
}

export default Footer;