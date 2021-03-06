import React, { Component } from 'react'
import Expo from 'expo'
import { Text, View, Image, TextInput } from 'react-native'
import axios from 'axios'

import { accountStyles } from '../Styles/Styles'
import CustomButton from './CustomButton'

class UserSignup extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      phone: '',
    }
  }
  _goToSelfie = () => {
    axios.post('https://wemove-184522.appspot.com/api/users/signup', {
      name: this.state.name
    })
      .then(res => {
        this.props.navigation.navigate('TakeSelfie', {
          userId: res.data,
          userType: 'user'
        })
      })
  }
  _onChangeText = (text, field) => {
    this.setState({
      [field]: text
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
        <TextInput
          style={accountStyles.input}
          onChangeText={(text) => this._onChangeText(text, 'phone')}
          placeholder="Enter your phone number"
          placeholderTextColor="#888888"
          value={this.state.phone}
          autoGrow={true}
          keyboardType="phone-pad"
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

export default UserSignup
