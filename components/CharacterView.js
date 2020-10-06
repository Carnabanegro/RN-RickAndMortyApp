import React, { useState } from "react";
import {Alert,Modal,StyleSheet,Text,TouchableHighlight,View} from "react-native";
import {Card,Paragraph} from 'react-native-paper';

const CharacterView = ({image,name,type,genre,species}) => {
  
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      > 
        <View style={styles.modalView}>
            <View style={styles.cardContainer}>
              <Card>
                  <Card.Title style={styles.title} title={name}  />
                  <Card.Content style={styles.dataContainer} >
                    <Paragraph style={styles.data}>TYPE: {type}</Paragraph>
                    <Paragraph style={styles.data}>GENDER: {genre}</Paragraph>
                    <Paragraph style={styles.data}>SPECIES: {species}</Paragraph>
                  </Card.Content>
                  <Card.Cover style={styles.cardImg} source={{uri: image}}/>
              </Card> 
            </View>
            <TouchableHighlight
              style={styles.closeButton}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableHighlight>
      </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.buttonText}>More Info</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    flex:1,
    margin: 20,
    borderRadius: 20,
    padding: 50,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    backgroundColor:'#576574', 
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth:5,
    borderColor:'#0abde3',
  },
  openButton: {
    backgroundColor: "#0abde3",
    color: '#000',
    borderRadius: 5,
    padding: 10,
    elevation: 2
  },
  closeButton:{
    backgroundColor: "#0abde3",
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    marginVertical:10
  },
  buttonText: {
    color: '#000',
    fontWeight: "bold",
    textAlign: "center"
  },
  cardContainer: {
    flex:1,
    width:'100%',
    justifyContent:'flex-start',
    borderWidth:5,
    borderColor:'#0abde3',
    borderRadius:10,
    backgroundColor:'#576574'
  },
  data:{
    fontFamily:'Josefin-Sans-Regular',
    backgroundColor:'#576574'

  },
  title:{
    fontFamily:'Secular-One',
    backgroundColor:'#576574',
    borderBottomWidth:5,
    borderColor:'#0abde3',
  },
  cardImg:{
    borderTopWidth:5,
    borderBottomWidth:5,
    borderColor:'#0abde3',
  },
  dataContainer:{
    backgroundColor:'#576574'
  }

});

export default  CharacterView;

