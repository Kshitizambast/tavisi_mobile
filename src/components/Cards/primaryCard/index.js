import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native';
import {Video, AVPlaybackStatus} from 'expo-av'
import Icon from 'react-native-vector-icons/FontAwesome';



import styles from './styles'
import WhiteText from '../../WhiteText';



const PrimaryCard = (props) => {

    const video = React.useRef(null)
    const [status, setStatus] = React.useState({})

    return (
        <View>
            <View style={styles.container}>

                <View style={styles.header}> 
                    <WhiteText text='FOOD' size={18}/>
                    <WhiteText text='1 hr ago' size={11}/>
                </View>

                <View style={styles.videoContainer}>  
                    <Video 
                        style={styles.listImage}
                        ref={video}
                        source={{
                        uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                        }}
                        height={250}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                    <View style={styles.buttons}>
                        <Pressable
                        title={status.isPlaying ? 'Pause' : 'Play'}
                        onPress={() =>
                            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                        }
                        />
                    </View>
                </View>
                <View style={styles.contentText}>
                    <Text style={{color:'#fff', fontSize:18, letterSpacing:0.8 }}>Text printing and typesetting.  </Text>
                </View>

                <View style={styles.buttonGroups}>
                    <Pressable onPress={() => alert('Hello') } style={styles.buttonOutline}>
                        <View style={styles.loginButtonInside}> 
                        <Icon name="heart" size={25}   color="#E9EBED" style={{marginRight:10}}/>
                            <View style={{padding:1}}>
                               <WhiteText text='15' size={15}/>
                            </View>
                         
                        </View>
                    </Pressable>
                    <View style={styles.likeAndCommentSection}>
                    <View style={{marginRight:35, flexDirection:'row'}}>
                        <Pressable onPress={() => alert('Hello') } style={styles.arrowDown}>
                            <View style={styles.loginButtonInside}> 
                            <Icon name="comment" size={25}   color="#E9EBED" style={{marginRight:10}}/>
                            </View>
                        </Pressable>
                        <View style={{padding:3}}>
                            <WhiteText text='15' size={15}/>
                        </View> 
                    </View>
                    <Pressable onPress={() => alert('Hello') } style={styles.arrowDown}>
                        <View style={styles.loginButtonInside}> 
                         <Icon name="share" size={25}   color="#E9EBED" style={{marginRight:10}}/>
                        </View>
                    </Pressable>
                    <View style={{padding:3}}>
                        <WhiteText text='15' size={15}/>
                    </View> 
                    </View>
                </View>

            </View>
        </View>
    )
}

export default PrimaryCard