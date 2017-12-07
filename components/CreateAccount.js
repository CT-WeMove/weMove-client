import React, { Component } from 'react'
import Expo from 'expo'
import { Text, View, Image } from 'react-native'

import { mainStyle, logoStyle, cameraStyles } from '../Styles/Styles'
import CustomButton from './CustomButton'

class ApproveSelfie extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      phone: '',
    }
  }
  componentWillMount() {
    const { state } = this.props.navigation
    this.setState({
      selfie: state.params.selfie
    })
  }
  _goToSelfie = () => {
    this.props.navigation.navigate('TakeSelfie')
  }
  _onChangeText = (text, field) => {
    this.setState({
      [field]: text
    })
  }
  render() {
    return (
      <View style={mainStyle.container}>
        <TextInput
          onChangeText={(text) => this._onChangeName(text, 'name')}
          placeholder="Enter your name"
          placeholderTextColor="#888888"
          value={this.state.name}
          autofocus={true}
        />
        <TextInput
          onChangeText={(text) => this._onChangeName(text, 'phone')}
          placeholder="Enter your phone number"
          placeholderTextColor="#888888"
          value={this.state.phone}
          autofocus={true}
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

export default ApproveSelfie
