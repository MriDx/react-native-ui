import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {data} from '../const';

export default class Favorites extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.mainView}>
          <Text style={styles.header}>My Favorite Places</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({item}) => (
              <TouchableOpacity>
                <Place data={item} />
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const Place = props => {
  return (
    <View style={styles.placeView}>
      <ImageBackground
        source={props.data.image}
        style={{
          width: null,
          height: null,
          flex: 1,
          borderRadius: 20,
        }}
        imageStyle={{borderRadius: 20}}>
        <View
          style={{
            justifyContent: 'flex-end',
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            padding: 10,
            borderRadius: 20,
          }}>
          <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>
            {props.data.place_name}
          </Text>
          <Text style={{color: '#fff', fontWeight: '600'}}>
            <Text style={{fontSize: 16, color: '#fff', fontWeight: 'bold'}}>
              {props.data.properties_count}
            </Text>{' '}
            Properties{' '}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    padding: 20,
    paddingStart: 0,
    paddingEnd: 0,
  },
  placeView: {
    height: 150,
    borderRadius: 20,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    margin: 5,
  },
});
