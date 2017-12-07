import React, { Component } from 'react'
import Expo from 'expo'
import { Text, View, Image } from 'react-native'
import axios from 'axios'

import { mainStyle, tripStyles, cameraStyles } from '../Styles/Styles'
import CustomButton from './CustomButton'

class ApproveSelfie extends Component {
  constructor() {
    super()
    this.state = {
      selfie: {},
      userId: 0,
      userType: ''
    }
  }
  componentWillMount() {
    const { state } = this.props.navigation
    this.setState({
      selfie: state.params.selfie,
      userId: state.params.userId,
      userType: state.params.userType
    })
  }
  _approvePhoto = () => {
    console.log('selfie.uri: ', this.state.selfie.uri)
    console.log('userType: ', this.state.userType)
    if (this.state.userType === 'user') {
      axios.put('https://wemove-184522.appspot.com/api/users/signup', {
        id: this.state.userId,
        width: this.state.selfie.width,
        height: this.state.selfie.height,
        picture: this.state.selfie.uri
      })
        .then(() => {
          this.props.navigation.navigate('Map', {
            userId: this.state.userId
          })
        })
        .catch(console.error)
    } else if (this.state.userType === 'driver') {
      axios.put('https://wemove-184522.appspot.com/api/drivers/signup', {
        id: this.state.userId,
        width: this.state.selfie.width,
        height: this.state.selfie.height,
        picture: this.state.selfie.uri
      })
        .then(res => {
          this.props.navigation.navigate('DriverHome', {
            name: res.data.name,
            rating: res.data.rating,
            width: res.data.width,
            height: res.data.height,
            picture: res.data.uri
          })
        })
        .catch(console.error)
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
