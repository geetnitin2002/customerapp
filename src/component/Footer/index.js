import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Icon, View } from 'native-base'

import { navigate } from '@utility/navigation'

import theme from '@theme/styles'

import { __ } from '@utility/translation'

export default class extends React.Component {
  render () {
    return (
      <View style={theme.footer}>
        <TouchableOpacity style={this.props.currentScreen === 'Home' ? theme.fBtnActive : theme.fBtn} onPress={() => { navigate('PublicHome') }}>
          <Icon name='home' type='AntDesign' style={this.props.currentScreen === 'Home' ? theme.fBtnIconActive : theme.fBtnIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={this.props.currentScreen === 'Package' ? theme.fBtnActive : theme.fBtn} onPress={() => { navigate('PublicPackage') }}>
          <Icon name='package' type='Feather' style={this.props.currentScreen === 'Package' ? theme.fBtnIconActive : theme.fBtnIcon} />
        </TouchableOpacity>
        {/* <View style={theme.botPop}>
          <TouchableOpacity style={this.props.currentScreen === 'Booking' ? theme.botPopBtn : theme.botPopBtn} onPress={() => { navigate('PublicBooking') }}>
            <Text style={theme.botPopText}>{__('BOOK')}</Text>
            <Text style={theme.botPopTextSm}>{__('NOW')}</Text>
          </TouchableOpacity>
        </View> */}
        <TouchableOpacity style={this.props.currentScreen === 'MemberShip' ? theme.fBtnActive : theme.fBtn} onPress={() => { navigate('PublicMemberShip') }}>
          <Icon name='filetext1' type='AntDesign' style={this.props.currentScreen === 'MemberShip' ? theme.fBtnIconActive : theme.fBtnIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={this.props.currentScreen === 'Profile' ? theme.fBtnActive : theme.fBtn} onPress={() => { navigate('PublicMyAccount') }}>
          <Icon name='user' type='Feather' style={this.props.currentScreen === 'Profile' ? theme.fBtnIconActive : theme.fBtnIcon} />
        </TouchableOpacity>
      </View>
    )
  }
}
