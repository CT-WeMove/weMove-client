import React, { Component } from 'react'
import Expo, { Constants, Location, Permissions } from 'expo'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import SimplePicker from 'react-native-simple-picker'
import Geocoder from 'react-native-geocoding'
import axios from 'axios'

import { Geocoding_API_Key } from '../secrets'

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

import { mainStyle, tripStyles, cameraStyles } from '../Styles/Styles'
import CustomButton from './CustomButton'

class ApproveSelfie extends Component {
  constructor() {
    super()
    this.state = {
      selfie: {},
      userId: 0,
      userType: '',
      location: {
        coords: {
          latitude: 0,
          longitude: 0
        }
      },
    }
  }
  componentWillMount() {
    const { state } = this.props.navigation
    this.setState({
      selfie: state.params.selfie,
      userId: state.params.userId,
      userType: state.params.userType
    })
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
  _approvePhoto = () => {
    console.log('selfie.uri: ', this.state.selfie.uri)
    console.log('userType: ', this.state.userType)
    console.log('userId: ', this.state.userId)
    if (this.state.userType === 'user') {
      axios.put('https://wemove-184522.appspot.com/api/users/signup', {
        id: this.state.userId,
        width: this.state.selfie.width,
        height: this.state.selfie.height,
        picture: this.state.selfie.uri,
      })
        .then(() => {
          this.props.navigation.navigate('Map', {
            userId: this.state.userId
          })
        })
        .catch(console.error)
    } else if (this.state.userType === 'driver') {
      console.log('id', this.state.userId)
      axios.put('https://wemove-184522.appspot.com/api/drivers/signup', {
        id: this.state.userId,
        width: this.state.selfie.width,
        height: this.state.selfie.height,
        picture: this.state.selfie.uri,
        location: {
          latitude: 40.755111,
          longitude: -73.955452
        }
      })
        .then(res => {
          console.log("res", res.data)
          this.props.navigation.navigate('DriverHome', {
            name: res.data.name,
            rating: res.data.rating,
            width: res.data.width,
            height: res.data.height,
            picture: res.data.picture
          })
        })
        .catch(err => {
          this.props.navigation.navigate('DriverHome', {
            name: 'Marcus',
            rating: 5,
            width: this.state.selfie.width,
            height: this.state.selfie.height,
            picture: this.state.selfie.uri
          })
        })
    }
  }
  _takeAnother = () => {
    this.props.navigation.navigate('TakeSelfie')
  }
  render() {
    return (
      <View style={mainStyle.container}>
        {
          this.state.selfie.uri ? (
            <Image
              source={{ uri: this.state.selfie.uri }}
              style={cameraStyles.imageDisplay}
            />
          ) : (
              null
            )
        }
        <View style={tripStyles.centeredContainer}>
          <CustomButton
            _onButtonPress={this._approvePhoto}
            text="CREATE ACCOUNT"
            inverse={false}
          />
          {/*<CustomButton
            _onButtonPress={this._takeAnother}
            text="TAKE ANOTHER"
            inverse={true}
          />*/}
        </View>
      </View>
    )
  }
}

export default ApproveSelfie
