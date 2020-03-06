import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const screen = Dimensions.get('screen');

export default class Hotel_1_Homepage extends Component {
  constructor(props) {
    super(props);
    console.log(JSON.stringify(props));
  }
  onPlaceClick = props => {
    console.log(props);
  };

  onDealClick = props => {
    console.log(props);
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View>
          <View style={{height: 30}} />
          <TopSection />
          <SearchBar />
        </View>
        <View
          style={{
            paddingBottom: 0,
            flex: 1,
          }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <PopularPlaces
              deals={true}
              data={data}
              deal={deal}
              _onPlaceClick={this.onPlaceClick}
              _onDealClick={this.onDealClick}
              _viewAll={() =>
                navigate('SearchPage', {
                  PopularPlace: true,
                })
              }
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const deal = {
  deal_name: 'Summer Fun Deal',
  deal_description: '30% off until april 31st',
};

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

const PopularPlaces = props => {
  return (
    <View style={{padding: 20}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 30,
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Popular Places</Text>
        <TouchableOpacity onPress={props._viewAll}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#000',
              opacity: 0.2,
            }}>
            View all
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{marginBottom: 10}}>
          {props.data.slice(0, 3).map(place => (
            <TouchableOpacity
              key={place.id}
              onPress={() => props._onPlaceClick(place.id)}>
              <HotelViewCard
                image={place.image}
                placename={place.place_name}
                propertiesCount={place.properties_count}
              />
            </TouchableOpacity>
          ))}
        </View>
        <View style={{marginBottom: 10}}>
          {props.deals ? (
            <TouchableOpacity onPress={() => props._onDealClick(props.deal)}>
              <HotelDealView deal={props.deal} />
            </TouchableOpacity>
          ) : (
            <HotelViewCard
              image={require('../images/singapore.jpg')}
              placename="Singapore"
              propertiesCount="1300"
            />
          )}
          {props.data.slice(3, 5).map(place => (
            <TouchableOpacity
              key={place.id}
              onPress={() => props._onPlaceClick(place.id)}>
              <HotelViewCard
                image={place.image}
                placename={place.place_name}
                propertiesCount={place.properties_count}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const HotelViewCard = props => {
  return (
    <View
      style={{
        height: screen.width / 2 - 30,
        width: screen.width / 2 - 30,
        borderRadius: 20,
        marginBottom: 15,
        borderRadius: 10,
      }}>
      <ImageBackground
        source={props.image}
        style={{width: '100%', height: '100%', borderRadius: 20}}
        imageStyle={{borderRadius: 20}}
        resizeMode="stretch">
        <View
          style={{
            backgroundColor: 'rgba(0,0,0, 0.4)',
            flex: 1,
            borderRadius: 20,
            justifyContent: 'flex-end',
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              marginStart: 10,
              fontWeight: 'bold',
            }}>
            {props.placename}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              paddingStart: 10,
              paddingBottom: 10,
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                fontWeight: '600',
              }}>
              {props.propertiesCount}
            </Text>
            <Text style={{color: '#fff', fontWeight: '400'}}> Properties</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const HotelDealView = props => {
  return (
    <View
      style={{
        height: (screen.width / 2 - 30) / 1.5,
        width: screen.width / 2 - 30,
        borderRadius: 20,
        backgroundColor: '#5948F6',
        marginBottom: 15,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          marginStart: 10,
          marginEnd: 10,
          textAlign: 'center',
          fontSize: 16,
          fontWeight: '900',
          color: '#fff',
        }}>
        {props.deal.deal_name}
      </Text>
      <Text
        style={{
          marginStart: 10,
          marginEnd: 10,
          textAlign: 'center',
          fontWeight: '400',
          color: '#fff',
        }}>
        {' '}
        {props.deal.deal_description}{' '}
      </Text>
    </View>
  );
};

const SearchBar = () => {
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

const TopSection = () => {
  return (
    <View style={styles.topSection}>
      <View>
        <Text style={styles.userNameView}>Hello, Alex</Text>
        <Text style={styles.header}>Find Deals</Text>
      </View>
      <View>
        <Image
          source={require('../images/user.png')}
          style={styles.userImage}
        />
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
  },
  searchbarInput: {
    flex: 1,
    height: 55,
    paddingStart: 10,
    fontSize: 20,
  },
  searchbarOutline: {
    height: 65,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0, 0.2)',
    borderRadius: 10,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
