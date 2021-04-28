import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import WhiteText from '../WhiteText';


import styles from './styles';


const Header = (props) => {

    return (
        <View>
             <View style={styles.navbarContainer} >
                <View>
                    <Image 
                        style={styles.logo}
                        source={require('../../../assets/images/markoLogoMini2.png')}
                    />
                </View>
                <View style={{flexDirection:'row'}}>
                <Pressable onPress={() => alert('Hello') } style={styles.arrowDown}>
                    <View style={styles.loginButtonInside}> 
                       <Icon name="angle-down" size={50}  color="#E9EBED" />
                    </View>
                </Pressable>
                <Pressable onPress={() => alert('Hello') } style={styles.loginButton}>
                    <View style={styles.loginButtonInside}> 
                       <Icon name="sign-in" size={20}  color="black"  style={styles.loginIcon}/>
                        <Text style={styles.buttonText}>Log in</Text>
                    </View>
                </Pressable>
                </View>
            </View>
            <View style={{backgroundColor:'#272B31',flexDirection:'row', justifyContent:'space-between'}}>
                <Pressable onPress={() => alert('Hello Back!')}>
                    <View style={{flexDirection:'row', paddingVertical:20}}>
                        <Icon name='arrow-left' size={15} color='#fff' style={{marginHorizontal:10, marginTop:3}}/>
                        <WhiteText text='Back' size={15}/>
                    </View>
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

export default Header;