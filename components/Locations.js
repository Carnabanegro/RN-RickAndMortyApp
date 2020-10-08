import React from 'react';
import EntityCard from './EntityCard';
import { connect } from 'react-redux';
import {getLocationsAction} from '../redux/locDuck'
import { View, StyleSheet, FlatList,StatusBar } from 'react-native';
import LoadingScreen from '../screens/LoadingScreen';

const Locations = ({
    locs,
    getLocationsAction,
    nextPage,
    locCurrentSearch,
    locTypeSearch,
    fetching
}) => {

    const loading = () =>{
        if (fetching){
            return(
                <LoadingScreen/>
            )
            
        }
        return null
    }

    const loadMore = () =>{
        if ((nextPage) && (!fetching)) {
        getLocationsAction(locCurrentSearch,locTypeSearch)
        }    
    }
        return (
            <View style={styles.locsContainer}>
                <FlatList
                    keyExtractor={(item) =>item.id.toString()}
                    data={locs}
                    renderItem={({item})=>(
                        <EntityCard  
                        name={item.name} 
                        dataInfo={item.type} 
                        dataInfo2={item.dimension}
                        tittle1="Type"
                        tittle2="Dimesion"
                        chars={item.residents}
                    />
                    )}
                    onEndReached={loadMore}
                    onEndReachedThreshold={10}
                    ListFooterComponent={loading}
                />    
            </View> 
                  
        )
}
function mapState(state){
        return{
            locs:state.locations.array,
            nextPage:state.locations.nextPage,
            locCurrentSearch: state.search.locCurrentSearch,
            locTypeSearch: state.search.locTypeSearch,
            fetching:state.locations.fetching
        }
    }
export default connect(mapState,{getLocationsAction})(Locations) 

const styles = StyleSheet.create({
    locsContainer: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#222f3e'
       
    },
    
});

