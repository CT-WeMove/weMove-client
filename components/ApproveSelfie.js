import React, { Component } from 'react'
import Expo from 'expo'
import { Text, View, Image } from 'react-native'

import { mainStyle, tripStyles, cameraStyles } from '../Styles/Styles'
import CustomButton from './CustomButton'

class ApproveSelfie extends Component {
  constructor() {
    super()
    this.state = {
      selfie: {}
    }
  }
  componentWillMount() {
    const { state } = this.props.navigation
    this.setState({
      selfie: state.params.selfie
    })
  }
  _approvePhoto = () => {
    //backend logic to send photo TK
    this.props.navigation.navigate('Map')
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
            text="APPROVE + CREATE ACCOUNT"
            inverse={false}
          />
          <CustomButton
            _onButtonPress={this._approvePhoto}
            text="TAKE ANOTHER"
            inverse={true}
          />
        </View>
      </View>
    )
  }
}

export default ApproveSelfie
