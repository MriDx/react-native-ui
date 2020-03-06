import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  ImageBackground,
  Animated,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
  }

  downAnimation = event => {};

  onScroll = event => {
    var offset = 0;
    var currentOffset = event.nativeEvent.contentOffset.y;
    var direction = currentOffset > this.offset ? 'down' : 'up';
    this.offset = currentOffset;
    console.log(direction);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <BackBar _onBack={() => this.props.navigation.goBack()} />
          <SearchBar />
        </View>
        <View
          style={{
            paddingStart: 20,
            paddingEnd: 20,
            flex: 1,
          }}>
          <Text style={styles.meduimHeader}>Popular Places</Text>
          <FlatList
            onScroll={event => this.onScroll(event)}
            showsVerticalScrollIndicator={false}
            style={{marginBottom: 20}}
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableOpacity>
                <Place data={item} />
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const data = [
  {
    id: 0,
    image: require('../images/brazil.jpg'),
    place_name: 'Brazil',
    properties_count: '4800',
  },
  {
    id: 1,
    image: require('../images/miami.jpg'),
    place_name: 'Miami',
    properties_count: '3700',
  },
  {
    id: 2,
    image: require('../images/newyork.jpg'),
    place_name: 'New York',
    properties_count: '2908',
  },
  {
    id: 3,
    image: require('../images/singapore.jpg'),
    place_name: 'Singapore',
    properties_count: '2700',
  },
  {
    id: 4,
    image: require('../images/switzerland.jpg'),
    place_name: 'Switzerland',
    properties_count: '1490',
  },
  {
    id: 5,
    image: require('../images/brazil.jpg'),
    place_name: 'Brazil',
    properties_count: '3327',
  },
];

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
const BackBar = props => {
  return (
    <View style={{padding: 20}}>
      <TouchableOpacity onPress={props._onBack}>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            width: 50,
            height: 50,
            borderColor: 'rgba(0, 0, 0, 0.2)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="chevron-left" size={35} color="#000" />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const SearchBar = props => {
  return (
    <View style={styles.searchbarContainer}>
      <View style={styles.searchbarOutline}>
        <Icon
          name="magnify"
          size={30}
          color="rgba(0,0,0, 0.2)"
          style={{paddingStart: 10}}
        />
        <TextInput
          style={styles.searchbarInput}
          placeholder="Search city"
          placeholderTextColor="rgba(0,0,0, 0.2)"></TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
  meduimHeader: {
    fontSize: 25,
    fontWeight: '700',
    margin: 5,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  userNameView: {
    opacity: 0.2,
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchbarContainer: {
    padding: 20,
    paddingStart: 0,
    flex: 1,
  },
  searchbarInput: {
    flex: 1,
    height: 55,
    paddingStart: 10,
    fontSize: 20,
  },
  searchbarOutline: {
    height: 50,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0, 0.2)',
    borderRadius: 10,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeView: {
    height: 150,
    borderRadius: 20,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    margin: 5,
  },
});
