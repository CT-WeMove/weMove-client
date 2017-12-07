import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera, Permissions, FileSystem } from 'expo';
import axios from 'axios'

import { cameraStyles } from '../Styles/Styles'

class TakeSelfie extends React.Component {
  constructor() {
    super()
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.front,
      selfie: {},
      userId: 0,
      userType: ''
    }
    this.takePicture = this.takePicture.bind(this)
  }

  componentWillMount() {
    const { state } = this.props.navigation
    Permissions.askAsync(Permissions.CAMERA)
      .then(res => {
        this.setState({
          hasCameraPermission: res.status === 'granted',
          userId: state.params.userId,
          userType: state.params.userType
        })
      })
  }

  takePicture() {
    if (this.camera) {
      this.camera.takePictureAsync({
        quality: 4,
        base64: true
      })
        .then(res => {
          this.props.navigation.navigate('ApproveSelfie', {
            selfie: {
              uri: res.uri,
              width: res.width,
              height: res.height,
              base64: res.base64
            },
            userId: this.state.userId,
            userType: this.state.userType
          })
        })
    }
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={cameraStyles.cameraContainer}
            type={this.state.type}
            ref={ref => { this.camera = ref }}
          />
          <View
            style={cameraStyles.buttonRow}>

            <TouchableOpacity
              style={cameraStyles.flipContainer}
              onPress={() => {
                this.setState({
                  type: this.state.type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back,
                });
              }}>
              <Text style={cameraStyles.buttonText}>Flip</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={cameraStyles.photoContainer}
              onPress={this.takePicture}
            >
              <Text style={cameraStyles.buttonText}>Snap</Text>
            </TouchableOpacity>

          </View>
        </View>
      );
    }
  }
}

export default TakeSelfie
