import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import PublicHome from '@screen/Public/Home'
import PublicPackage from '@screen/Public/Package'
import PublicBooking from '@screen/Public/Booking'
import AddVehicle from '@screen/Public/Vehicle/AddVehicle'
import { deleteUser } from '../../services/Session'

import Test from './Test'
const Drawer = createDrawerNavigator();
//need to replace test with actual components
const Sidebar = () => {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={PublicHome}/>
        <Drawer.Screen name='Packages' component={PublicPackage}/>
        <Drawer.Screen name='Appointment' component={PublicBooking}/>
        <Drawer.Screen name='Add Vehicle' component={AddVehicle}/>
        <Drawer.Screen name='Signout' component={Test}/> 
      </Drawer.Navigator>
  )
}

export default Sidebar