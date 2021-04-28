import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import WhiteText from '../../components/WhiteText';
import {Picker} from '@react-native-picker/picker';

import styles from './styles'
import ListCard from '../../components/Cards/ListCard';

const Search = (props) => {
    const [selectedLanguage, setSelectedLanguage] = React.useState();

    return (

        <View>
            <View style={styles.searchBoxContainer}>

                <Pressable onPress={() => alert('Hello') } style={styles.arrowDown}>
                            <View style={{marginHorizontal:10}}> 
                            <Icon name="filter" size={20}  color="#E9EBED" />
                            </View>
                </Pressable>
                <View style={styles.searchBox}>
                    <Text style={{color:'#F9BE70', fontWeight:'bold', letterSpacing:0.7, marginHorizontal:15}}>Type to search..</Text>
                    <TextInput style={styles.inputField}/>
                </View> 
                <Pressable onPress={() => alert('Hello') } style={{...styles.arrowDown, backgroundColor:'#F9BE70'}}>
                            <View style={{marginHorizontal:10}}> 
                            <Icon name="search" size={20}  color="black" />
                            </View>
                </Pressable>
            </View>
            <View style={{paddingHorizontal:10}}>
               <Text style={{marginTop:18, color:'#fff', fontSize:30}}>
                   4 Results in Cat
               </Text>
               <View style={{flexDirection:'row', marginVertical:15}}>
                    <Text style={{marginTop:10, fontSize:15, color:'#D9DADE'}}>Sort by : </Text>
                    <View style={styles.pickerBox}>
                    <Picker
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }
                        style={styles.pickerStyle}
                        >
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js"/>
                    </Picker>
                    </View>
               </View>
               
               <View>
                   <ListCard />
                   <ListCard />
                   <ListCard />
                   <ListCard />
               </View>

            </View>    
        </View>

    )

}

export default Search