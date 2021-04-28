import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from '../Auth/Login'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Search from '../Search'
import styles from './styles';
import WhiteText from '../../components/WhiteText';
import PrimaryCard from '../../components/Cards/primaryCard';


const Home = (props) => {

    return (
        <ScrollView style={{backgroundColor:'#202226'}}>
            <Header homepage={true}/>
            <View style={{padding:10}}>
                <View style={{flexDirection:'row'}}>
                    <WhiteText text='Post List' size={30}/>
                    <View style={{padding:15, marginHorizontal:25}}>
                         <WhiteText text='Newest!' size={15}/>
                    </View>
                </View>

                <PrimaryCard />
                <PrimaryCard />
                <PrimaryCard />
                
            </View>
            {/* <Login />
            <Search /> */}
            <Footer />
        </ScrollView>
    )
}

export default Home;