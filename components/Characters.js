import React from 'react';
import CharCard from './CharCard';
import { connect } from 'react-redux';
import {getCharactersAction} from '../redux/charDuck'
import { View, StyleSheet, FlatList, StatusBar } from 'react-native';

const Characters = ({
    chars,
    getCharactersAction,
    nextPage,
    charCurrentSearch,
    charTypeSearch,
    fetching
}) => {
        
    const loadMore = () =>{
        if ((nextPage) && (!fetching)) {
        getCharactersAction(charCurrentSearch,charTypeSearch)
        }    
    }
        return (
            <View style={styles.cardsContainer}>
                <FlatList
                    keyExtractor={(item) =>item.id.toString()}
                    data={chars}
                    renderItem={({item})=>(
                    <CharCard
                        name={item.name} 
                        type={item.type} 
                        species={item.species} 
                        image={item.image}
                        genre={item.gender}
                        
                    />
                    )}
                    onEndReached={loadMore}
                    onEndReachedThreshold={10}
                />    
            </View>       
        )
}
function mapState(state){
        return{
            chars:state.characters.array,
            nextPage:state.characters.nextPage,
            charCurrentSearch: state.search.charCurrentSearch,
            charTypeSearch: state.search.charTypeSearch,
            fetching:state.characters.fetching
        }
        
    }
export default connect(mapState,{getCharactersAction})(Characters) //le saca datos a redux o le pasa acciones

const styles = StyleSheet.create({
    cardsContainer: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#222f3e'
    },
    
    
});
