import React from 'react';
import {ActivityIndicator, StyleSheet, View, Text,} from 'react-native';

const LoadingScreen = () =>{
    return(
        <View style={styles.container}>
            <ActivityIndicator size="large" color="'#222f3e'" />
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
    
});

export default LoadingScreen;