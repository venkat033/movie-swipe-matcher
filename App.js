import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Alert,ImageBackground } from 'react-native';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
import Swipe from './Swipe';
import Match from './Match';
import './global.js'

class App extends React.Component{
  // state={
  //    : []

  render(){
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('./pictures/bg.jpg')} style={{width: '100%', height: '100%', flex:1}}>
        <Text style={styles.text2}>Swipe Movie Match!</Text><Text style={styles.text2}>
          Click on cards and Start Finding People in your WaveLength!
          </Text>   
    </ImageBackground>    
    </View>
  );
}
} 

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    flex: 1,
    fontSize:30,
    fontWeight:'bold',
    alignItems: 'center',
    //justifyContent: 'center',
  
  },
  text:{
    paddingTop:100,
    alignSelf:'center',
    fontSize:40,
    fontWeight:'bold',
    justifyContent:'center',
    color:'white'
  },
  text2:{
    paddingTop:100,
    alignSelf:'center',
    fontSize:30,
    fontWeight:'bold',
    justifyContent:'center',
    paddingLeft:40,
    color:'white'
  },
  image:
  {
    resizeMode:"cover"
  }
});


const TabNavigator = createMaterialBottomTabNavigator(  
  {  
      Home: { screen: App,  
          navigationOptions:{  
              tabBarLabel:'Home',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                  </View>),  
          }  
      },   
      Swipe: { screen: Swipe,  
          navigationOptions:{  
              tabBarLabel:'Cards',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-images'}/>  
                  </View>),  
              activeColor: '#615af6',  
              inactiveColor: '#46f6d7',  
              barStyle: { backgroundColor: '#67baf6' },  
          }  
      },  
      Match: {  
          screen: Match,  
          navigationOptions:{  
              tabBarLabel:'Matches',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-person-add'}/>  
                  </View>),  
          }  
      },  
  },  
  {  
    initialRouteName: "Home",  
    activeColor: '#f0edf6',  
    inactiveColor: '#226557',  
    barStyle: { backgroundColor: '#3BAD87' },  
  },  
);  

export default createAppContainer(TabNavigator);