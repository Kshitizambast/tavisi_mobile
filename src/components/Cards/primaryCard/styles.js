import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#272B31',
        borderRadius:5,
        marginVertical:10,
        overflow:'hidden'
    },

    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
    },

    videoContainer:{
        marginTop:-20
    },

    loginButtonInside:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },



    buttonOutline:{
        borderColor:'#3B3F43',
        borderRadius:5,
        borderWidth:1.5,
        height:35,
        marginHorizontal:10,
        padding: 5,
    },
    likeAndCommentSection:{
        flexDirection:'row',
        justifyContent:'space-around',
        padding:3
    },
    contentText:{
          justifyContent:'center',
          paddingHorizontal:30,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },

      buttonGroups:{
          flexDirection:'row',
          justifyContent:'space-between',
          padding:10
      },

    listImage:{
        height:250,
        width:Dimensions.width,
        margin:5,
        borderRadius:3
    }
})


export default styles;