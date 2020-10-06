import React, {useState} from 'react';
import { StyleSheet, View, Text,} from 'react-native';

const ErrorScreen = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Sorry, any result founded</Text>
        </View>
        
    )
} 
  

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#222f3e'
    },
    text:{
        fontFamily:'Secular-One',
        fontSize:20,
        color:'#10ac84'
    }
    
    
});

export default ErrorScreen;