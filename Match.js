import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Alert, Linking,Button } from 'react-native';
import './global.js'
import Icon from 'react-native-vector-icons/Ionicons';  

export default class Match extends React.Component
{
    constructor() {
        super();
        let i=0;
        let count=0;
        for(i=0;i<global.users.length;i++)
        {
            //let j=0;
            //for(j=0;j<global.users[i].prefs1.length;j++)
            //{
                let count=(global.prefs.filter(Set.prototype.has, new Set(global.users[i].prefs1))).length;
           // } 
           console.log(count);
           console.log(global.users[i].prefs1);
           console.log(global.prefs);
           console.log(global.res);  
            if(count>=4)
            {
                global.res.push(global.users[i]);
            }
        }
        this.state={
            refresh : 'a'
        };
    
    }

    rerenderforce = (e) =>
    {
        let i=0;
        let count=0;
        for(i=0;i<global.users.length;i++)
        {
            //let j=0;
            //for(j=0;j<global.users[i].prefs1.length;j++)
            //{
                let count=(global.prefs.filter(Set.prototype.has, new Set(global.users[i].prefs1))).length;
           // } 
           console.log(count);
           console.log(global.users[i].prefs1);
           console.log(global.prefs);
           console.log(global.res);  
            if(count>=4)
            {
                global.res.push(global.users[i]);
            }
        }
        console.log("refresh");
        this.setState({refresh:'b'});
    }
        render(){
            
            if(!global.res.length>0)
            {
                return (
                    <View style={styles.match}>
                        {/* <Text onPress={this.setState({refresh:'b'})}> */}
                            <Text>
                            Sorry No Matches Yet! Tap to Check Again!
                        </Text>
                        <Button onPress={this.rerenderforce} title="Refresh" style={styles.buttonst}></Button>
                    </View>
                );
            }
            else{
        return (
            <View style={styles.container}>
                <Text>
                    These are your matches:
                </Text>
                { global.res.map((item)=>(
         <Text key={item.id} style={styles.match}> { item.name } has similair interests to you! Connect with {item.name} on  <Icon onPress={() => Linking.openURL('https://www.facebook.com/venkatsrinivasan033/') } size   ={25} name={'logo-facebook'}/>  </Text>)
         )}
            <Button onPress={this.rerenderforce} title="Refresh" style={styles.buttonst}></Button>
        
            </View>
        );
        }}
}


const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  
  match: { 
      paddingTop:100,
      paddingLeft:20,
      alignItems:'center',
    fontSize: 25
  },
  buttonst: {
    paddingTop:50,
    alignItems: 'center'
  }
});
