import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import {Card, Title} from 'react-native-paper';
import CharacterView from './CharacterView';

const CharCard = ({name, image,type,genre,species}) => {
  return(
      <View style={styles.cardContainer}>
        <Card style={styles.itemContainer} >
          <Card.Content>
            <Title style={styles.title}>{name}</Title>
          </Card.Content>
          <Card.Cover source={{uri: image}} style={styles.cardImg}/>
          <Card.Actions >
            <CharacterView className="characterView-class" name={name} image={image} type={type} genre={genre} species={species}/>
          </Card.Actions>
        </Card>
      </View>
  )
};

export default CharCard;

const styles = StyleSheet.create({
  cardContainer:{
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  cardImg:{
    width:'100%',
    height:256,
    marginVertical:15,
    borderTopWidth:5,
    borderBottomWidth:5,
    borderColor:'#0abde3',
    
  },
  title:{
    fontFamily:'Secular-One'
  },
  itemContainer:{
    borderWidth:5,
    borderColor:'#0abde3',
    backgroundColor:'#576574'
}
  
});