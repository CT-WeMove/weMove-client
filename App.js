import { StackNavigator } from 'react-navigation'

import HomeScreen from './components/Home'
import Map from './components/Map'
import PickVehicle from './components/PickVehicle'
import DriverMatched from './components/DriverMatched'
import OnTrip from './components/OnTrip'
import RateDriver from './components/RateDriver'

import CreateAccount from './components/CreateAccount'
import TakeSelfie from './components/TakeSelfie'
import ApproveSelfie from './components/ApproveSelfie'

export default StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Map: {
    screen: Map
  },
  PickVehicle: {
    screen: PickVehicle
  },
  DriverMatched: {
    screen: DriverMatched
  },
  OnTrip: {
    screen: OnTrip
  },
  RateDriver: {
    screen: RateDriver
  },
  CreateAccount: {
    screen: CreateAccount
  },
  TakeSelfie: {
    screen: TakeSelfie
  },
  ApproveSelfie: {
    screen: ApproveSelfie
  }
}, {
    headerMode: 'none'
  })
