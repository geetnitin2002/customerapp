import React from 'react'
import { Dimensions } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Provider } from 'react-redux';
import configureStore from '../src/redux/Store';
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
import subCategoryList from '../src/screen/newscreen/SubCategoryList'
import BookingHistory from '../src/screen/Public/BookingHistory/BookingHistory'
import BookingDetails from '../src/screen/Public/BookingHistory/BookingDetails'
import modelList from '../src/screen/newscreen/ModelList'


/* Navigation */

import { navigationRef } from '@utility/navigation'
import { setDefaultLocale } from '@utility/translation'
import { notUndefinedAndNull } from '../src/component/utils/Validation'

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


export default function AppContainer(){



    return (
      
        <Stack.Navigator initialRouteName='PublicHome' headerMode='none'>
            <Stack.Screen name='PublicLanguage' component={PublicLanguage} options={options} />
            <Stack.Screen name='PublicHome' component={PublicHome} options={options} />
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
          </Stack.Navigator>
       
      
    )
  
    }
