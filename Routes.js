import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartGameScreen from './screens/StartGameScreen';
import LocationsSearchScreen from './screens/LocationsSearchScreen';
import CharacterSearchScreen from './screens/CharacterSearchScreen';
import EpisodesSearchScreen from './screens/EpisodesSearchScreen';
import ErrorScreen from './screens/ErrorScreen';
import * as Font from 'expo-font'
import { AppLoading } from 'expo';


const  fetchFonts = () =>{
  Font.loadAsync({
    'Secular-One': require('./assets/fonts/SecularOne-Regular.ttf'),
    'Josefin-Sans-Italic': require('./assets/fonts/JosefinSans-Italic-VariableFont_wght.ttf'),
    'Josefin-Sans-Regular':require('./assets/fonts/JosefinSans-Regular.ttf')
  })
}

const options={
    headerStyle: {
      backgroundColor: '#10ac84',
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
}

const Routes = () => {

  const [dataLoaded,setDataLoaded] = React.useState(false);
  const Stack = createStackNavigator();

  if (!dataLoaded){
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() =>setDataLoaded(true)}
        onError={(err)=> console.log(err)}
      />
    )
  }

  
    return (
          <NavigationContainer >
            <Stack.Navigator screenOptions={options} initialRouteName="StartGame">
              <Stack.Screen name="StartGame" component={StartGameScreen}  />
              <Stack.Screen name="Characters" component={CharacterSearchScreen} initialParams={{ filterSearch: 'characters' }} />
              <Stack.Screen name="Locations" component={LocationsSearchScreen} initialParams={{ filterSearch: 'locations' }} />
              <Stack.Screen name="Episodes" component={EpisodesSearchScreen} initialParams={{ filterSearch: 'episodes' }} />
              <Stack.Screen name="Error" component={ErrorScreen} />
            </Stack.Navigator>
          </NavigationContainer>
      
    )
}



export default Routes;