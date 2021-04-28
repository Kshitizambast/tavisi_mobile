import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    
    navbarContainer : {
        backgroundColor: '#202226',
        marginTop:30,
        justifyContent: 'space-between',
        padding:10,
        flex: 1,
        flexDirection: 'row'
    },

    logo:{
        height: 50,
        width: 50,
        borderRadius:5
    },
    loginButtonInside:{
        flexDirection:'row',
        justifyContent:'center',
        padding:10
    },

    loginIcon:{
        margin:5
    },

    arrowDown:{
        backgroundColor:'#202226',
        borderRadius:5,
        borderWidth:0.5,
        borderColor:'#3B3F43',
        marginHorizontal:5,
    },

    loginButton:{
        backgroundColor: '#F9BE70',
        justifyContent:'center',
        paddingHorizontal:5,
        borderRadius: 5,
        height:40,
        marginVertical:5
    },

    buttonsBelowNav:{
        backgroundColor: '#F9BE70',
    },

    whiteText:{
        color: 'white',
        fontSize:  15,
        margin: 5
    },

    buttonText:{
        fontSize: 15,
        fontWeight: 'bold',
        margin: 5
    }


})

export default styles;