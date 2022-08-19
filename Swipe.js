import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import CardStack, {Card} from 'react-native-card-stack-swiper'
import './global.js'

export default class Swipe extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     prefs: []
        // };
    }
        // alertDir = (num) => {
        //     //Alert.alert("Direction", "swiped left");
        // };
        alertDir = (num) => {
            //Alert.alert("Direction", "swiped right");
            global.prefs.push(num);
            console.log(global.prefs);
            console.log(num);
        };
        render(){
        
        return (
            <View style={styles.container}>
                <Text>Swipe Right for Positive Response, otherwise Swipe Left </Text>
                <CardStack style={styles.container2} ref={swiper => { this.swiper = swiper; } }>
                    <Card style={[styles.card, styles.card1]} onSwipedRight={this.alertDir.bind(this, 1)}><Image style={styles.card1} source={require('./pictures/titanic.jpg')} /></Card>
                    <Card style={[styles.card, styles.card1]} onSwipedRight={this.alertDir.bind(this, 2)}><Image style={styles.card1} source={require('./pictures/darkknnight.jpg')} /></Card>
                    <Card style={[styles.card, styles.card1]} onSwipedRight={this.alertDir.bind(this, 3)}><Image style={styles.card1} source={require('./pictures/br.jpg')} /></Card>
                    <Card style={[styles.card, styles.card1]} onSwipedRight={this.alertDir.bind(this, 4)}><Image style={styles.card1} source={require('./pictures/bvs.jpg')} /></Card>
                    <Card style={[styles.card, styles.card1]} onSwipedRight={this.alertDir.bind(this, 5)}><Image style={styles.card1} source={require('./pictures/avengers.jpg')} /></Card>
                    <Card style={[styles.card, styles.card1]} onSwipedRight={this.alertDir.bind(this, 6)}><Image style={styles.card1} source={require('./pictures/vivegam.jpg')} /></Card>
                    <Card style={[styles.card, styles.card1]} onSwipedRight={this.alertDir.bind(this, 7)}><Image style={styles.card1} source={require('./pictures/conjuring.jpg')} /></Card>
                    <Card style={[styles.card, styles.card1]} onSwipedRight={this.alertDir.bind(this, 8)}><Image style={styles.card1} source={require('./pictures/aquaman.jpg')} /></Card>
                    <Card style={[styles.card, styles.card1]} onSwipedRight={this.alertDir.bind(this, 9)}><Image style={styles.card1} source={require('./pictures/avatar.jpg')} /></Card>
                    <Card style={[styles.card, styles.card1]} onSwipedRight={this.alertDir.bind(this, 10)}><Image style={styles.card1} source={require('./pictures/joker.jpg')} /></Card>
                    <Card style={[styles.card, styles.card1]} onSwipedRight={this.alertDir.bind(this, 11)}><Image style={styles.card1} source={require('./pictures/parasite.jpg')} /></Card>      
                </CardStack>
                {/* <StatusBar style="auto" /> */}
            </View>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  container2: {
    paddingTop:150,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  card: {
    
    backgroundColor: 'blue',
    height: 600,
    width:280

  },
  card1:{
    height: 600,
    width:280
  }
});
