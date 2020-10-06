import React, { useState } from "react";
import {Alert,Modal,StyleSheet,Text,TouchableHighlight,View} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {Card,Paragraph} from 'react-native-paper';

const EntityView = ({chars,data1,data2,data3, tittle1, tittle2}) => {
  
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
            <View style={styles.entityContainer}>
                <Card >
                    <Card.Title style={styles.title} title={data1} />
                    <Card.Content style={styles.dataContainer}>
                        <Paragraph style={styles.data}>{tittle1} : {data2}</Paragraph>
                        <Paragraph style={styles.data}>{tittle2} : {data3}</Paragraph>
                    </Card.Content>
                </Card>
                <ScrollView>
                    {chars.slice(0, 5).map((value)=>
                        <Card style={styles.cardContainer}>
                            <Card.Title title={value.name}/>
                            <Card.Cover style={styles.cardImg} source={{uri:value.image}}/>
                        </Card> 
                    )
                }     
                </ScrollView>
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
    flex:1,
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
    justifyContent:'center',
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
    borderRadius: 5,
    padding: 10,
    elevation: 2
  },
  closeButton:{
    backgroundColor: "#0abde3",
    borderRadius: 5,
    padding: 10,
    elevation: 2
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center"
  },
  entityContainer: {
    flex:1,
    width:'100%',
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
  dataContainer:{
    backgroundColor:'#576574',
    borderBottomWidth:5,
    borderColor:'#0abde3'
  },
  cardContainer:{
    backgroundColor:'#576574',
  },
  cardImg:{
    borderTopWidth:5,
    borderBottomWidth:5,
    borderColor:'#0abde3'
  }
});

export default  EntityView;

