import React from 'react';
import { StyleSheet, View} from 'react-native';
import Searcher from '../components/Searcher';
import Locations from '../components/Locations';
import { connect } from 'react-redux';
import ErrorScreen from './ErrorScreen'


const LocationsSearchScreen = ({fetching,error,route}) =>{
    
    const {filterSearch} = route.params;

    if (error && !fetching) {
        return(
        <View style={styles.container}> 
            <Searcher filterSearch={filterSearch} />
            <ErrorScreen error={error}/>
        </View>)
    }else{
        return(
        <View style={styles.container}> 
            <Searcher filterSearch={filterSearch} />
            <Locations/>
        </View>)
    }
} 

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
        backgroundColor: '#222f3e'
    },
    
}) 

function mapState({locations}){
    return {
        error:locations.error,
        fetching:locations.fetching
    }
}
export default connect(mapState)(LocationsSearchScreen);