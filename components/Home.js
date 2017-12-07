import React, { Component } from 'react'
import Expo from 'expo'
import { Text, View, ImageBackground } from 'react-native'

import { mainStyle, logoStyle, tripStyles } from '../Styles/Styles'
import LogoSVG from './LogoSVG'
import Wordmark from './Wordmark'
import CustomButton from './CustomButton'

class HomeScreen extends Component {
  constructor() {
    super()
    this.state = {
      assetsLoaded: false
    }
  }
  loadAssets = () => {
    this.setState({
      assetsLoaded: true
    })
  }
  _onButtonPress = () => {
    this.props.navigation.navigate('Map')
  }
  _createUserAccount = () => {
    this.props.navigation.navigate('UserSignup')
  }
  _createDriverAccount = () => {
    this.props.navigation.navigate('DriverSignup')
  }
  render() {
    return (
      <View style={tripStyles.container}>
        <ImageBackground
          source={{
            uri: 'https://storage.googleapis.com/wemove-184522.appspot.com/background.jpg'}}
          style={tripStyles.container}
          onLoad={this.loadAssets}
        >
          {
            this.state.assetsLoaded ? (
              <View style={logoStyle.container}>
                <LogoSVG />
                <Wordmark />
                <CustomButton
                  text="GET A MOVER"
                  _onButtonPress={this._onButtonPress}
                  inverse={false}
                />
                <View style={{height: 25}} />
                <CustomButton
                  text="CREATE A USER ACCOUNT"
                  _onButtonPress={this._createUserAccount}
                  inverse={false}
                />
                <View style={{height: 25}} />
                <CustomButton
                text="CREATE A DRIVER ACCOUNT"
                _onButtonPress={this._createDriverAccount}
                inverse={false}
              />
              </View>
            ) : (
                <View style={logoStyle.container}>
                  <LogoSVG />
                  <Text>Loading...</Text>
                </View>
              )
          }
        </ImageBackground>
      </View>
    )
  }
}

export default HomeScreen
