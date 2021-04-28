import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#272B31',
        borderRadius:5,
        marginVertical:10,
        flexDirection:'row',
        overflow:'hidden'
    },

    contentText:{
        margin:10,     
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },

    listImage:{
        height:120,
        width:180,
        margin:5,
        borderRadius:3
    }
})


export default styles;