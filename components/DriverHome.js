import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import StarRating from 'react-native-star-rating'

import { tripStyles } from '../Styles/Styles'

import CustomButton from './CustomButton'

class DriverHome extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      rating: 0,
      picture: '',
      picWidth: 0,
      picHeight: 0
    }
    this._goHome = this._goHome.bind(this)
  }
  _goHome() {
    this.props.navigation.navigate('Home')
  }
  componentWillMount() {
    const { state } = this.props.navigation
    this.setState({
      name: state.params.name,
      rating: state.params.rating,
      picture: state.params.picture,
      picWidth: state.params.width,
      picHeight: state.params.height
    })
  }
  render() {
    console.log('picture: ', this.state.picture)
    return (
      <View style={tripStyles.container}>
        <Text style={tripStyles.sectionHeading}>Welcome, {this.state.name}!</Text>

        {
          this.state.picture.length > 0 ? (
            <View style={tripStyles.centeredContainer}>
              <Image
                source={{ uri: `${this.state.picture}` }}
                style={tripStyles.bigImage}
                width={200}
                height={200}
              />
            </View>
          ) : null
        }

        <StarRating
          disabled={true}
          maxStars={5}
          rating={this.state.rating}
        />

        <CustomButton
          _onButtonPress={this._goHome}
          text="HOME"
          inverse={false}
        />

      </View>
    )
  }
}

export default DriverHome
