import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity,Image  } from 'react-native';

const StartGameScreen = ({navigation}) =>{
    

    return(
    <View style={styles.container}>
        <View style={styles.containerScreen}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                style={styles.button}
                onPress={() =>navigation.navigate("Characters",{filterSearch:"characters"})}
                >
                <Text>Characters</Text>
                </TouchableOpacity>
            </View>
            <View  style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>navigation.navigate("Locations",{filterSearch:"locations"})}
                >
                <Text>Locations</Text>
                </TouchableOpacity>
            </View>
            <View  style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>navigation.navigate("Episodes",{filterSearch:"episodes"})}
                >
                <Text>Episodes</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.screenStart}>
                <Text style={styles.title}>Welcome to my Rick And Morty App</Text>
                <Image style={styles.img} source={require('../assets/rickandmorty.png')}/>
                <Text style={styles.title}>Wubba Lubba dub-dub!!!</Text>
        </View>
    </View>
    )
} 

const styles = StyleSheet.create({
    container:{
        flex:1,
    },  
    containerScreen: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'flex-start',
        backgroundColor: '#222f3e'
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
           backgroundColor: '#0abde3'
    },
    buttonContainer:{
        flex:1
    },
    screenStart:{
        flex:1,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#222f3e'
    },
    img:{
        backgroundColor:'#222f3e',
        width:256,
        height:256,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10,
        
    },
    title:{
        fontFamily:'Secular-One',
        fontSize:20,
        color:'#10ac84'
    }
    
});

export default (StartGameScreen); 
