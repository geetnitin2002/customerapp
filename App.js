import React from 'react'
import { Alert, Dimensions,StyleSheet,View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Provider } from 'react-redux';
import configureStore from './src/redux/Store';
/* Drawer Menu */

import DrawerContent from '@component/Menu/Left'

import PublicLanguage from '@screen/Public/Language'


/** Public **/

import PublicHome from '@screen/Public/Home'
import PublicMyAccount from '@screen/Public/MyAccount'
import PublicOrder from '@screen/Public/Order'
import PublicProfile from '@screen/Public/Profile'
import PublicPackage from '@screen/Public/Package'
import PublicMemberShip from '@screen/Public/MemberShip'
import PublicBooking from '@screen/Public/Booking'
import PublicVerifyEmail from '@screen/Public/VerifyEmail'
import PublicVerifyCode from '@screen/Public/VerifyCode'
import PublicSignIn from '@screen/Public/SignIn'
import PublicResetPassword from '@screen/Public/ResetPassword'
import PublicRateApp from '@screen/Public/RateApp'
import PublicIntro from '@screen/Public/Intro'
import PublicForgotPassword from '@screen/Public/ForgotPassword'
import PublicCreateAccount from '@screen/Public/CreateAccount'
import PublicChangePassword from '@screen/Public/ChangePassword'
import PublicPasswordSuccess from '@screen/Public/PasswordSuccess'
import PublicConfirmation from '@screen/Public/Confirmation'
import PublicAboutUs from '@screen/Public/AboutUs'
import subCategoryList from './src/screen/newscreen/SubCategoryList'
import BookingHistory from './src/screen/Public/BookingHistory/BookingHistory'
import BookingDetails from './src/screen/Public/BookingHistory/BookingDetails'
import modelList from './src/screen/newscreen/ModelList'
import AddVehicle from './src/screen/Public/Vehicle/AddVehicle'
import AllVehicle from './src/screen/Public/AllVehicles/index'

import { getUser } from './src/screen/services/Session'
/* Navigation */

import { navigationRef } from '@utility/navigation'
import { setDefaultLocale } from '@utility/translation'
import { notUndefinedAndNull, undefinedOrNull } from './src/component/utils/Validation'
import AppContainer from './src/AppContainer'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Sidebar from './src/screen/Public/Drawer/Sidebar'


const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const { width } = Dimensions.get('window')
const store = configureStore();
const forFade = ({ current, closing }) => ({
  cardStyle: {
    opacity: current.progress
  }
})

const options = {
  cardStyleInterpolator: forFade
}

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isAppInitiated: false,
      isLoggedIn: false
    }

    this.checkIsAppInitiated = this.checkIsAppInitiated.bind(this)
    this.getUserData = this.getUserData.bind(this)
  }

  async componentDidMount () {
    await this.checkIsAppInitiated()
    await this.getUserData()
  }

  async getUserData () {
    let user = await getUser();
    if(undefinedOrNull(user))
    {
    Alert.alert("Please Login Again");
    }
    if(notUndefinedAndNull(user)){
      this.setState({
        isLoggedIn: true
      })
    }
  }

  
  async checkIsAppInitiated () {
    await setDefaultLocale()
    this.setState({
      isAppInitiated: true
    })
  }

  renderDrawer(){
    if (this.state.isLoggedIn) {
      console.log('login successful')
      return(
        
         <Drawer.Navigator
           drawerContent={(props) => <DrawerContent {...props} />}
           drawerStyle={{ width: width - 100 }}
         >
         <Drawer.Screen name='AppContainer' component={AppContainer} />
        </Drawer.Navigator>
      )
    }
  }

  renderStack(){
    if (!this.state.isLoggedIn) {
       return(
        
          <Stack.Navigator initialRouteName='PublicSignIn' headerMode='none'>
            <Stack.Screen name='PublicLanguage' component={PublicLanguage} options={options} />
            <Stack.Screen name='PublicHome' component={Sidebar} options={options} />
            
            <Stack.Screen name='PublicMyAccount' component={PublicMyAccount} options={options} />
            <Stack.Screen name='PublicOrder' component={PublicOrder} options={options} />
            <Stack.Screen name='PublicProfile' component={PublicProfile} options={options} />
            <Stack.Screen name='PublicPackage' component={PublicPackage} options={options} />
            <Stack.Screen name='PublicMemberShip' component={PublicMemberShip} options={options} />
            <Stack.Screen name='PublicBooking' component={PublicBooking} options={options} />
            <Stack.Screen name='PublicVerifyEmail' component={PublicVerifyEmail} options={options} />
            <Stack.Screen name='PublicVerifyCode' component={PublicVerifyCode} options={options} />
            <Stack.Screen name='PublicSignIn' component={PublicSignIn} options={options} />
            <Stack.Screen name='PublicResetPassword' component={PublicResetPassword} options={options} />
            <Stack.Screen name='PublicRateApp' component={PublicRateApp} options={options} />
            <Stack.Screen name='PublicIntro' component={PublicIntro} options={options} />
            <Stack.Screen name='PublicForgotPassword' component={PublicForgotPassword} options={options} />
            <Stack.Screen name='PublicCreateAccount' component={PublicCreateAccount} options={options} />
            <Stack.Screen name='PublicChangePassword' component={PublicChangePassword} options={options} />
            <Stack.Screen name='PublicPasswordSuccess' component={PublicPasswordSuccess} options={options} />
            <Stack.Screen name='PublicConfirmation' component={PublicConfirmation} options={options} />
            <Stack.Screen name='PublicAboutUs' component={PublicAboutUs} options={options} />
            <Stack.Screen name='SubCategoryList' component={subCategoryList} options={options} />
            <Stack.Screen name='BookingHistory' component={BookingHistory} options={options} />
            <Stack.Screen name='BookingDetails' component={BookingDetails} options={options} />
            <Stack.Screen name='ModelList' component={modelList} options={options} />
            <Stack.Screen name='AddVehicle' component={AddVehicle} options={options} />
            <Stack.Screen name='AllVehicle' component={AllVehicle} options={options} />
          </Stack.Navigator>
        
       )
    }
  }

  render () {
    if (!this.state.isAppInitiated) {
      return null
    }

    return (
     
      <Provider store={store}>
      <NavigationContainer ref={navigationRef} >

      <Stack.Navigator initialRouteName='PublicSignIn' headerMode='none'>
           
           
           <Stack.Screen name='PublicLanguage' component={PublicLanguage} options={options} />
           <Stack.Screen name='PublicHome' component={Sidebar} options={options} />
           
           <Stack.Screen name='PublicMyAccount' component={PublicMyAccount} options={options} />
           <Stack.Screen name='PublicOrder' component={PublicOrder} options={options} />
           <Stack.Screen name='PublicProfile' component={PublicProfile} options={options} />
           <Stack.Screen name='PublicPackage' component={PublicPackage} options={options} />
           <Stack.Screen name='PublicMemberShip' component={PublicMemberShip} options={options} />
           <Stack.Screen name='PublicBooking' component={PublicBooking} options={options} />
           <Stack.Screen name='PublicVerifyEmail' component={PublicVerifyEmail} options={options} />
           <Stack.Screen name='PublicVerifyCode' component={PublicVerifyCode} options={options} />
           <Stack.Screen name='PublicSignIn' component={PublicSignIn} options={options} />
           <Stack.Screen name='PublicResetPassword' component={PublicResetPassword} options={options} />
           <Stack.Screen name='PublicRateApp' component={PublicRateApp} options={options} />
           <Stack.Screen name='PublicIntro' component={PublicIntro} options={options} />
           <Stack.Screen name='PublicForgotPassword' component={PublicForgotPassword} options={options} />
           <Stack.Screen name='PublicCreateAccount' component={PublicCreateAccount} options={options} />
           <Stack.Screen name='PublicChangePassword' component={PublicChangePassword} options={options} />
           <Stack.Screen name='PublicPasswordSuccess' component={PublicPasswordSuccess} options={options} />
           <Stack.Screen name='PublicConfirmation' component={PublicConfirmation} options={options} />
           <Stack.Screen name='PublicAboutUs' component={PublicAboutUs} options={options} />
           <Stack.Screen name='SubCategoryList' component={subCategoryList} options={options} />
           <Stack.Screen name='BookingHistory' component={BookingHistory} options={options} />
           <Stack.Screen name='BookingDetails' component={BookingDetails} options={options} />
           <Stack.Screen name='ModelList' component={modelList} options={options} />
           <Stack.Screen name='AddVehicle' component={AddVehicle} options={options} />
           <Stack.Screen name='AllVehicle' component={AllVehicle} options={options} />
         </Stack.Navigator>

         

      </NavigationContainer>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({container: {flex: 1, justifyContent: 'center',
paddingTop: 10,
backgroundColor: '#ecf0f1' }});