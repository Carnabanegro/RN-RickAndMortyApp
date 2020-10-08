import React from 'react';
import { StyleSheet, View} from 'react-native';
import Searcher from '../components/Searcher';
import Characters from '../components/Characters';
import ErrorScreen from './ErrorScreen';
import {connect} from 'react-redux';

const CharacterSearchScreen = ({fetching,error,route}) =>{

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
                <Characters/>
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
function mapState({characters}){
    return {
        error:characters.error,
        fetching:characters.fetching
    }
}
export default connect(mapState)(CharacterSearchScreen);
