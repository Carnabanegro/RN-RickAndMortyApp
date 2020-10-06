import React from 'react';
import { StyleSheet, View } from 'react-native';
import Searcher from '../components/Searcher';
import Episodes from '../components/Episodes';
import ErrorScreen from './ErrorScreen';
import {connect} from 'react-redux';

const EpisodesSearchScreen = ({fetching,error,route}) =>{
    
    const {filterSearch} = route.params

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
            <Episodes/>
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
    
    
});
function mapState({episodes}){
    return {
        error:episodes.error,
        fetching:episodes.fetching
    }
}
export default connect(mapState)(EpisodesSearchScreen);