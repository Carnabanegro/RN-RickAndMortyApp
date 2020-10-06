import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import {Card, Title} from 'react-native-paper';
import EntityView from './EntityView';

const CharCard = ({chars,name,dataInfo,dataInfo2,tittle1,tittle2}) => {
  return(
      <View style={styles.epiContainer}>
        <Card style={styles.itemContainer} >
          <Card.Content style={styles.content}>
            <Title style={styles.title}>{name}</Title>
          </Card.Content>
          <Card.Actions style={styles.actions}>
            <EntityView  
                data1={name} 
                data2={dataInfo} 
                data3={dataInfo2} 
                tittle1={tittle1}
                tittle2={tittle2}
                chars={chars}/>
          </Card.Actions>
        </Card>
      </View>
  )
};

export default CharCard;

const styles = StyleSheet.create({
  epiContainer:{
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title:{
    fontFamily: 'Secular-One'
  },
  itemContainer:{
    borderWidth:5,
    borderColor:'#0abde3',
    backgroundColor:'#576574'
  }
  
});