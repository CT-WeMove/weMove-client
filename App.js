import { StackNavigator } from 'react-navigation'

import HomeScreen from './components/Home'
import Map from './components/Map'
import PickVehicle from './components/PickVehicle'
import DriverMatched from './components/DriverMatched'
import OnTrip from './components/OnTrip'
import RateDriver from './components/RateDriver'

import UserSignup from './components/UserSignup'
import DriverSignup from './components/DriverSignup'
import TakeSelfie from './components/TakeSelfie'
import ApproveSelfie from './components/ApproveSelfie'

import DriverHome from './components/DriverHome'

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
  UserSignup: {
    screen: UserSignup
  },
  DriverSignup: {
    screen: DriverSignup
  },
  TakeSelfie: {
    screen: TakeSelfie
  },
  ApproveSelfie: {
    screen: ApproveSelfie
  },
  DriverHome: {
    screen: DriverHome
  }
}, {
    headerMode: 'none'
  })
