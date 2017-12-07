import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import StarRating from 'react-native-star-rating'
import axios from 'axios'

import { tripStyles } from '../Styles/Styles'

import CustomButton from './CustomButton'

class RateDriver extends Component {
  constructor() {
    super()
    this.state = {
      driver: {},
      userRating: 5
    }
    this._submitRating = this._submitRating.bind(this)
  }
  _submitRating() {
    console.log('driverid: ', this.state.driver.id)
    axios.post('https://wemove-184522.appspot.com/api/requests', {
      driver: this.state.driver.id,
      id: this.state.userId,
      rating: this.state.userRating
    })
      .then(() => {
        this.props.navigation.navigate('Home')
      })
  }
  _changeRating(rating) {
    this.setState({
      userRating: rating
    })
  }
  componentDidMount() {
    const { state } = this.props.navigation
    this.setState({
      driver: state.params.driver,
    })
  }
  render() {
    return (
      <View style={tripStyles.container}>
        <Text style={tripStyles.sectionHeading}>RATE YOUR DRIVER</Text>

        {
          this.state.driver.name ? (
            <View style={tripStyles.centeredContainer}>
              <Image
                source={{ uri: `${this.state.driver.picture}` }}
                style={tripStyles.image}
              />
              <Text style={tripStyles.titleTop}>{this.state.driver.name}</Text>
            </View>
          ) : null
        }

        <StarRating
          disabled={false}
          maxStars={5}
          rating={this.state.userRating}
          selectedStar={(rating) => this._changeRating(rating)}
        />

        <CustomButton
          _onButtonPress={this._submitRating}
          text="SUBMIT RATING"
          inverse={false}
        />

      </View>
    )
  }
}

export default RateDriver
