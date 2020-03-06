import React, {Component} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default class HotelBooking_1_First extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ImageBackground
        source={require('../images/hotel.jpg')}
        style={{width: null, height: null, flex: 1}}>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="light-content" />
          <View style={styles.contentHolder}>
            <Text style={styles.header}>Are you ready ?</Text>
            <Text style={styles.content}>
              Find your hotel easily and travel anywhere you want with us
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Hotel1Tabs')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Let's start</Text>
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0, 0.4)',
  },
  contentHolder: {
    padding: 30,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    marginTop: 20,
    fontSize: 20,
    color: '#fff',
  },
  button: {
    marginTop: 20,
    marginBottom: 0,
    height: 56,
    width: '100%',
    backgroundColor: '#5948F6',
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'center',
    color: '#fff',
  },
});
