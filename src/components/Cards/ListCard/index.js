import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native';
import {Video, AVPlaybackStatus} from 'expo-av'
import Icon from 'react-native-vector-icons/FontAwesome';



import styles from './styles'



const ListCard = (props) => {

    const video = React.useRef(null)
    const [status, setStatus] = React.useState({})

    return (
        <View>
            <View style={styles.container}>
                <Video 
                    style={styles.listImage}
                    ref={video}
                    source={{
                      uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                    }}
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
                <View style={styles.contentText}>
                    <Text style={{color:'#ddd', fontSize:12, letterSpacing:0.8, marginBottom:5 }}>Category</Text>
                    <Text style={{color:'#fff', fontSize:18, letterSpacing:0.8 }}>Text of the {"\n"}printing and  {"\n"}typesetting.  </Text>
                </View>
            </View>
        </View>
    )
}

export default ListCard