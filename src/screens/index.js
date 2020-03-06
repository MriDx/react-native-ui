import React, {Component} from 'react';
import {SafeAreaView, FlatList, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const list = [
  {
    id: 1,
    route: 'SigninAnimated',
    title: 'Animated Signin-Sigup',
  },
  {
    id: 2,
    route: 'HotelBooking',
    title: 'Hotel Booking app',
  },
];

export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView>
        <FlatList
          style={{margin: 20}}
          data={list}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate(item.route)}>
              <View style={{padding: 20}}>
                <Text>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(index, item) => index.toString()}
        />
      </SafeAreaView>
    );
  }
}
