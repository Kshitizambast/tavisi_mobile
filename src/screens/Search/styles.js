import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({

    searchBoxContainer:{
        flexDirection:'row', 
        justifyContent:'center', 
        paddingHorizontal:10,
        marginTop:30
    },

    pickerBox:{borderRadius:5,
         borderWidth:0.5,
         borderColor:'#D9DADE',
         marginHorizontal:20  
    },


    pickerStyle:{
        backgroundColor:'#202226', 
        width:120, 
        height:40, 
        color:'#fff', 
        alignItems:'center' , 
        margin:1
    },

    searchBox:{
        borderWidth:0.3,
        width:200,
        marginHorizontal:10, 
        borderColor:'#fff', 
        borderRadius:5,
        
    },
    inputField: {
        fontSize:20,
        height:45,
        paddingHorizontal: 10, 
        color: '#fff'
    },

    arrowDown:{
        backgroundColor:'#3B3F43',
        borderRadius:3,
        justifyContent:'center',
        paddingHorizontal: 8,
        marginTop:0,
        height:60,
        alignItems:'center'
    },

    loginButton:{
        backgroundColor: '#F9BE70',
        justifyContent:'center',
        padding:10,
        borderRadius: 5,
        height:40
    },

})


export default styles;