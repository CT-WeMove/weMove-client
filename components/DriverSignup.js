import React, { Component } from 'react'
import Expo, { Constants, Location, Permissions } from 'expo'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import SimplePicker from 'react-native-simple-picker'
import Geocoder from 'react-native-geocoding'
import axios from 'axios'

import { Geocoding_API_Key } from '../secrets'
import { accountStyles } from '../Styles/Styles'
import CustomButton from './CustomButton'

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

const options = ['Pickup Truck', 'Cargo Van', 'Box Truck', 'Moving Truck']

class DriverSignup extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      price_base: '',
      price_per_mile: '',
      tier: '',
      location: {
        coords: {
          latitude: 0,
          longitude: 0
        }
      },
    }
  }
  componentWillMount() {
    Location.watchPositionAsync(GEOLOCATION_OPTIONS, this._locationChanged)
  }
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };
  _getTier = (name) => {
    switch (name) {
      case 'Pickup Truck':
        return 'pickup'
      case 'Cargo Van':
        return 'cargo'
      case 'Box Truck':
        return 'box'
      case 'Moving Truck':
        return 'moving'
      default:
        return 'pickup'
    }
  }
  _goToSelfie = () => {
    const tier = this._getTier(this.state.tier)
    console.log(this.state.name, this.state.price_base, this.state.price_per_mile)
    axios.post('https://wemove-184522.appspot.com/api/drivers/signup', {
      'name': this.state.name,
      'price_base': Number(this.state.price_base),
      'price_per_mile': Number(this.state.price_per_mile),
      'tier': tier,
      'location': this.state.location.coords
    })
      .then(res => {
        console.log('post: ', res.data)
        this.props.navigation.navigate('TakeSelfie', {
          userId: res.data,
          userType: 'driver'
        })
      })
  }
  _onChangeText = (text, field) => {
    this.setState({
      [field]: text
    })
  }
  _selectVehicle = (itemValue, itemIndex) => {
    this.setState({
      tier: itemValue
    })
  }
  render() {
    return (
      <View style={accountStyles.container}>
        <TextInput
          style={accountStyles.input}
          onChangeText={(text) => this._onChangeText(text, 'name')}
          placeholder="Enter your name"
          placeholderTextColor="#888888"
          value={this.state.name}
          autoFocus={true}
          autoGrow={true}
        />
        <Text
          onPress={() => this.refs.picker.show()}
          style={{ color: '#888888', fontSize: Number(20) }}
        >
          Select your vehicle
        </Text>
        <Text style={{ color: '#000000', fontSize: Number(20) }}>
          {this.state.tier}
        </Text>
        <SimplePicker
          options={options}
          ref={'picker'}
          onSubmit={this._selectVehicle}
        />
        <TextInput
          style={accountStyles.input}
          onChangeText={(text) => this._onChangeText(text, 'price_base')}
          placeholder="Enter your base price"
          placeholderTextColor="#888888"
          value={this.state.price_base}
          autoGrow={true}
          keyboardType="numeric"
        />
        <TextInput
          style={accountStyles.input}
          onChangeText={(text) => this._onChangeText(text, 'price_per_mile')}
          placeholder="Enter your price per mile"
          placeholderTextColor="#888888"
          value={this.state.price_per_mile}
          autoGrow={true}
          keyboardType="numeric"
        />
        <CustomButton
          _onButtonPress={this._goToSelfie}
          text="TAKE A PHOTO"
          inverse={false}
        />
      </View>
    )
  }
}

export default DriverSignup
