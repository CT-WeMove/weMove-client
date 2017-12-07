import { StyleSheet, Dimensions, Platform } from 'react-native'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const viewPadding = viewportHeight * 0.2;
const colors = {
  black: '#1a1917',
  gray: '#888888',
  background1: '#ffffff',
  background2: '#21D4FD'
};

export const mainStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: viewportHeight
  },
  dimContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: viewportHeight
  },
  backgroundImageContainer: {
    opacity: 0.7,
  },
  accentButtonView: {
    position: 'relative',
    backgroundColor: '#50A7A0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: viewportWidth * 0.75,
    borderRadius: 10,
  },
  accentButtonText: {
    color: '#ffffff',
    padding: 10,
    fontSize: 18
  },
  inverseButtonView: {
    position: 'relative',
    backgroundColor: 'rgba(255,255,255,0)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: viewportWidth * 0.75,
    borderColor: '#50A7A0',
    borderRadius: 10,
    borderWidth: 1
  },
  inverseButtonText: {
    color: '#50A7A0',
    padding: 10,
    fontSize: 18
  },
  sectionHeading: {
    color: 'darkslategray',
    fontSize: 20,
    paddingTop: viewPadding,
    paddingBottom: viewPadding * 0.25
  }
})

export const mapStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  destination: {
    backgroundColor: '#ffffff',
    fontSize: Number(15),
    padding: 15,
    textAlign: 'center',
    width: '70%',
    position: 'absolute',
    top: '30%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export const logoStyle = StyleSheet.create({
  container: {
    height: viewportHeight,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    paddingBottom: 25
  },
  wordmark: {
    color: 'white',
    fontSize: Number(30),
    backgroundColor: 'rgba(255,255,255, 0)',
    marginBottom: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export const tripStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: viewportWidth,
    height: viewportHeight,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: viewportHeight * 0.1,
    paddingBottom: viewportHeight * 0.1
  },
  bigImage: {
    height: 200,
    width: 200,
    borderRadius: 100,
    resizeMode: 'cover',
    borderColor: 'darkslategray',
    borderWidth: 1
  },
  smallImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    resizeMode: 'cover',
    borderColor: 'darkslategray',
    borderWidth: 1
  },
  sectionHeading: {
    color: 'darkslategray',
    fontSize: 20,
  },
  titleTop: {
    fontSize: Number(20),
    paddingBottom: '5%'
  },
  titleBottom: {
    fontSize: Number(20),
    paddingTop: '5%'
  },
  centeredContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: viewportWidth * 0.75
  },
  imageDescriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
    width: viewportWidth * 0.75,
  },
})

export const cameraStyles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  buttonRow: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: viewportWidth * 0.8,
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center'
  },
  photoContainer: {
    // flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center'
  },
  flipContainer: {
    // flex: 0.1,
    alignSelf: 'flex-start',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 20,
    marginBottom: 10,
    color: 'white',
  },
  imageDisplay: {
    resizeMode: 'contain',
    width: viewportWidth * 0.8,
    height: viewportWidth * 0.8
  }
})

export const accountStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: viewportWidth,
    height: viewportHeight,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: viewportHeight * 0.3,
    paddingBottom: viewportHeight * 0.3
  },
  input: {
    fontSize: Number(20),
    width: viewportWidth * 0.8,
    textAlign: 'center',
  }
})
