import React from  'react';
import { connect } from 'react-redux';
import {removeCharactersAction,getCharactersAction} from '../redux/charDuck';
import {removeEpisodesAction,getEpisodesAction} from '../redux/epiDuck';
import {removeLocationsAction,getLocationsAction} from '../redux/locDuck';
import {
    updateCharacterCurrentSearchAction,
    updateEpisodeCurrentSearchAction,
    updateLocationCurrentSearchAction,
    updateCharacterBySearchAction,
    updateLocationBySearchAction,
} from '../redux/searchDuck';
import {StyleSheet,View, Button } from 'react-native';
import {Picker} from '@react-native-community/picker'
import { TextInput } from 'react-native-gesture-handler';


function Searcher({
    /////////CHARACTERS//////
    updateCharacterCurrentSearchAction,
    updateCharacterBySearchAction,
    getCharactersAction,
    removeCharactersAction,
    charCurrentSearch,
    charTypeSearch,
    ////////LOCATIONS/////
    updateLocationCurrentSearchAction,
    updateLocationBySearchAction,
    getLocationsAction,
    removeLocationsAction,
    locCurrentSearch,
    locTypeSearch,
    ///////EPISODES///////
    updateEpisodeCurrentSearchAction,
    getEpisodesAction,
    removeEpisodesAction,
    epiCurrentSearch,
    ////////OTHERS ACTION///////
    filterSearch
}) {

    const [selectedValue, setSelectedValue] = React.useState("name");
    const [text, onChangeText] = React.useState('');
    const [buttonEnabled,setButtonEnabled] = React.useState(false)

    //This function manage the input state 

    function inputHandler(text){
        setButtonEnabled(false)
        onChangeText(text);
        if (filterSearch === "characters"){
            updateCharacterCurrentSearchAction(text);
        }
        if (filterSearch === "episodes"){
            updateEpisodeCurrentSearchAction(text);
        }
        if (filterSearch === "locations"){
            updateLocationCurrentSearchAction(text);
        }
    }

    //this function manage the search of elements calling a action from CharDuck

    function searchHandler() {
        setButtonEnabled(true);
        if (filterSearch === "characters"){
            removeCharactersAction();
            updateCharacterCurrentSearchAction(charCurrentSearch);
            searchCharactersHandler(charCurrentSearch);
        }
        if (filterSearch === "episodes"){
            removeEpisodesAction();
            updateEpisodeCurrentSearchAction(epiCurrentSearch);
            searchEpisodesHandler(epiCurrentSearch);
        }
        if (filterSearch === "locations"){
            removeLocationsAction();
            updateLocationCurrentSearchAction(locCurrentSearch);
            searchLocationsHandler(locCurrentSearch);
        }

    }

    //Function using for searchHandler for call action from charDuck

    function searchCharactersHandler(charCurrentSearch) {
        if (charCurrentSearch.trim() === ""){
            removeCharactersAction();
        }
        if (charCurrentSearch.trim().length >2) {
                getCharactersAction(charCurrentSearch,charTypeSearch);
                
        }
    }

    //Function using for searchHandler for call action from LocDuck

    function searchLocationsHandler(locCurrentSearch) {
        if (locCurrentSearch.trim() === ""){
            removeLocationsAction();
        }
        if (locCurrentSearch.trim().length >2) {
                getLocationsAction(locCurrentSearch,locTypeSearch);
        }
    }

     //Function using for searchHandler for call action from EpiDuck

    function searchEpisodesHandler(epiCurrentSearch) {
        if (epiCurrentSearch.trim() === ""){
            removeEpisodesAction();
        }
        if (epiCurrentSearch.trim().length >2) {
                getEpisodesAction(epiCurrentSearch);
        }
    }

    //This function clean searcher screen and search state when button is press

    function cleanHandler(){
        onChangeText('')
    
        if (filterSearch === "characters") {
            updateCharacterCurrentSearchAction('')
            removeCharactersAction();
        }
        if (filterSearch === "episodes") {
            updateEpisodeCurrentSearchAction('')
            removeEpisodesAction();
           
        }
        if (filterSearch === "locations") {
            updateLocationCurrentSearchAction('')
            removeLocationsAction();
          
        }
    }

    //This function manage the type of search 

    function handleSelect(itemValue, itemIndex){
        setSelectedValue(itemValue)
        if (filterSearch === "characters") {
            updateCharacterBySearchAction(itemValue);
            
        }
        if (filterSearch === "locations") {
            updateLocationBySearchAction(itemValue);
            
        }
       
    }


    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
            <TextInput
                value={text}
                placeholder= "Search"
                style={ styles.inputContainer }
                onChangeText={(text)=>inputHandler(text)}
            />
            <Picker
                prompt="Options"
                selectedValue={selectedValue}
                style={styles.pickerContainer}
                onValueChange={handleSelect}
                enabled={!(filterSearch === "episodes")}
            >
                <Picker.Item  label="Name" value="name" />
                <Picker.Item label="Type" value="type" />
            </Picker>
            </View>
            <View style={styles.buttonContainer}>
                <Button style={styles.buttonContainerClear} title="Clear" color="#0abde3"  onPress={cleanHandler}/>  
                <Button style={styles.buttonContainerSearch} disabled={buttonEnabled} title="Search" color="#0abde3"  onPress={searchHandler}/> 
            </View> 
        </View>
    )    
        
       
}

//This function get data from the state to be use in the searcher

function mapState({search}){
    return {
        charTypeSearch:search.charTypeSearch,
        locTypeSearch:search.locTypeSearch,
        charCurrentSearch:search.charCurrentSearch,
        locCurrentSearch:search.locCurrentSearch,
        epiCurrentSearch:search.epiCurrentSearch,
    }
}

export default connect(mapState, {
    /////////CurrentSearch//////
    updateCharacterCurrentSearchAction,
    updateEpisodeCurrentSearchAction,
    updateLocationCurrentSearchAction,
    ////////TYPE SEARCH/////
    updateCharacterBySearchAction,
    updateLocationBySearchAction,
    ////////OTHERS ACTION//////
    removeEpisodesAction,
    getEpisodesAction,
    getCharactersAction,
    removeCharactersAction,
    getLocationsAction,
    removeLocationsAction
})(Searcher);


const styles = StyleSheet.create({
    container: {

        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    searchContainer:{
        flexDirection:'row',
        width:'100%',
        marginVertical:10,
    },
    buttonContainer:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-around',
        width:'80%',
    },
    buttonContainerClear: {
        width:'40%',
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:25,    
        alignItems:'center'
             
    },
    buttonContainerSearch: {
        width:'40%',
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:25,    
        alignItems:'center'
    },
    inputContainer:{
        flex:4,
        height: 35, 
        borderBottomColor: '#0abde3', 
        borderBottomWidth: 1,
    },
    pickerContainer:{
        flex:2,
        height: 35,
        color: "black"
    }
    
});