import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, Image, TextInput } from 'react-native';

import WhiteText from '../../../components/WhiteText'
import Checkbox from 'expo-checkbox'
import Icon from 'react-native-vector-icons/FontAwesome'



import styles from './styles';

const Login = (props) => {
    const [isChecked, setChecked] = React.useState(false)
    return (
        <View>
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

            <View style={{backgroundColor:'#202226', padding:20}}>
                <WhiteText text='Login' size={50} />
                <View style = {{marginTop:15}}></View>
                <WhiteText text='Welcome back. Login your account' style={{margin:10}}/>
                <View style={{marginVertical:50}}>
                    <View style={{borderWidth:0.3, borderColor:'#fff', borderRadius:5, marginBottom:15}}>
                      <Text style={{color:'#F9BE70', fontWeight:'bold', letterSpacing:0.7, marginHorizontal:8}}>Phone Number</Text>
                      <TextInput style={styles.inputField}/>
                    </View>      
                    <View style={{borderWidth:0.3, borderColor:'#fff', borderRadius:5}}>
                      <Text style={{color:'#F9BE70', fontWeight:'bold', letterSpacing:0.7, marginHorizontal:8}}>Password</Text>
                      <TextInput style={styles.inputField}/>
                    </View>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
                    <Checkbox
                        style={{marginVertical:-6}}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#F9BE70' : undefined}
                        />
                    <WhiteText text='Remember Me' size={12}/>
                    </View>
                    <WhiteText text='Forgot Password?' size={12}/>
                </View>
                <Pressable onPress={() => alert('Hello')} style={styles.loginButton}>
                        <Text style={{fontSize:20}}>Login</Text>
                </Pressable>
                <View style={{alignItems:'center'}}>
                     <WhiteText text='OR' size={18}/>
                </View>
                <Pressable onPress={() => alert('Hello')} style={{...styles.loginButton, backgroundColor:'#2A2F33'}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <Icon name='facebook' color='#F0F3F4' size={20} style={{marginHorizontal:25, marginTop:3}} />
                            <WhiteText text='Login With Facebook' size={15} />
                        </View>
                </Pressable>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:5}}>
                    <WhiteText text="Don't have an account?" size={13}/>
                    <Pressable onPress={() => alert('Hello')}>
                    <Text style={{color:'#F9BE70', fontSize:15, fontWeight:'bold', letterSpacing:0.7}}>Sign Up Now</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Login