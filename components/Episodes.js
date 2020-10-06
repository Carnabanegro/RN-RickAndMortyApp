import React from 'react';
import EntityCard from './EntityCard';
import { connect } from 'react-redux';
import { View, FlatList, StyleSheet, StatusBar } from 'react-native';
import {getEpisodesAction} from '../redux/epiDuck'

const Episodes = ({
    epis,
    getEpisodesAction,
    nextPage,
    epiCurrentSearch,
    fetching
}) => {
    
    const loadMore = () =>{
        if ((nextPage) && (!fetching)) {
        getEpisodesAction(epiCurrentSearch)
        }    
    }
        return (
            <View style={styles.epiContainer}>
                <FlatList
                    keyExtractor={(item) =>item.id.toString()}
                    data={epis}
                    renderItem={({item})=>(
                        <EntityCard  
                            name={item.name} 
                                dataInfo={item.episode} 
                                dataInfo2={item.air_date} 
                                tittle1="Episode" 
                                tittle2="Release Date"
                                chars= {item.characters}
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
            epis:state.episodes.array,
            nextPage:state.episodes.nextPage,
            epiCurrentSearch: state.search.epiCurrentSearch,
            fetching:state.episodes.fetching
        }
    }
export default connect(mapState,{getEpisodesAction})(Episodes) 


const styles = StyleSheet.create({
    epiContainer: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#222f3e'
    },
    
});