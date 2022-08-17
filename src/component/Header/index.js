import React from 'react'
import PropTypes from 'prop-types'
import { StatusBar, View, TouchableOpacity, Image, Button } from 'react-native'
import { Header as HeaderNB, Icon, Text } from 'native-base'

import theme from '@theme/styles'
import { openDrawer, back, navigate , navigation} from '@utility/navigation'
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class Header extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = {
      selected: ''
    }

    this.renderStatusBar = this.renderStatusBar.bind(this)
    this.renderNavLeft = this.renderNavLeft.bind(this)
    this.renderNavMiddle = this.renderNavMiddle.bind(this)
    this.renderNavRight = this.renderNavRight.bind(this)
    
   
  }

  renderStatusBar () {
    if (this.props.showStatusBar) {
      if (this.props.statusBarType === 'light') {
        return <StatusBar backgroundColor='rgba(52, 51, 86, 1)' barStyle='dark-content' />
      } else if (this.props.statusBarType === 'dark') {
        return <StatusBar backgroundColor='rgba(52, 51, 86, 1)' barStyle='light-content' />
      }
    }

    return null
  }

  renderNavLeft () {
    
    if (!this.props.showNavLeft) {
      return null
    }

    let icon
    if (this.props.navLeftContent) {
      icon = this.props.navLeftContent
    } else if (this.props.navLeftType === 'back') {
      icon = <TouchableOpacity style={theme.btnTransparent} onPress={back}>
        <Icon name='arrow-left' type='Feather' style={[theme.huge, theme.light]} />
      </TouchableOpacity>
    } else if (this.props.navLeftType === 'menu') {
      icon = <TouchableOpacity style={theme.btnTransparent} onPress={openDrawer}>
        <Icon name='menu' type='Entypo' style={[theme.huge, theme.light]} />
      </TouchableOpacity>
    }

    return (
      <View style={this.props.navLeftStyle}>
        {icon}
      </View>
    )
  }

  renderNavMiddle () {
    if (!this.props.showNavMiddle) {
      return null
    }

    const titleStyle = []
    if (this.props.navMiddleType === 'tiny') {
      titleStyle.push(theme.tiny)
    } else if (this.props.navMiddleType === 'small') {
      titleStyle.push(theme.small)
    } else if (this.props.navMiddleType === 'medium') {
      titleStyle.push(theme.medium)
    } else if (this.props.navMiddleType === 'large') {
      titleStyle.push(theme.large)
    } else if (this.props.navMiddleType === 'huge') {
      titleStyle.push(theme.huge)
    }

    if (this.props.theme === 'light') {
      titleStyle.push(theme.light)
    } else if (this.props.theme === 'dark') {
      titleStyle.push(theme.dark)
    }

    if (this.props.navTextColor) {
      titleStyle.push({
        color: this.props.navTextColor
      })
    }

    if (this.props.navTextWeight) {
      titleStyle.push({
        weight: this.props.navTextWeight
      })
    }

    return (
      <View style={this.props.navMiddleStyle}>
        {
          this.props.navMiddleContent
            ? this.props.navMiddleContent
            : <Text style={titleStyle}>{this.props.title}</Text>
        }
      </View>
    )
  }

  renderNavRight () {
    if (!this.props.showNavRight) {
      return null
    }

    let icon
    if (this.props.navRightContent) {
       icon = this.props.navRightContent
     
    }
    return (
      <View style={this.props.navRightStyle}>
        {/* {icon} */}
        <Image style={{width: 40, height: 40, marginRight: 10, marginTop: 8,  alignSelf: 'center'}} source={ require('../../../assets/Logo/logonew.png') } />
      </View>
    )
  }

  render () {
    let headerStyle
    if (this.props.theme === 'light') {
      headerStyle = theme.headerLight
    } else if (this.props.theme === 'dark') {
      headerStyle = theme.headerDark
    } else {
      headerStyle = theme.headerTransparent
    }

    return (
      <HeaderNB style={headerStyle}>
        {this.renderStatusBar()}
        <View style={this.props.navStyle}>
          {this.renderNavLeft()}
          {this.renderNavMiddle()}
          {this.renderNavRight()}
        </View>
      </HeaderNB>
    )
  }
}

Header.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']),

  showStatusBar: PropTypes.bool,
  statusBarType: PropTypes.oneOf(['light', 'dark']),

  navStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),

  showNavLeft: PropTypes.bool,
  navLeftStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  navLeftType: PropTypes.oneOf(['home', 'back']),
  navLeftContent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func
  ]),

  showNavMiddle: PropTypes.bool,
  navMiddleStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  navMiddleType: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  title: PropTypes.string,
  navMiddleContent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func
  ]),
  navTextColor: PropTypes.string,
  navTextWeight: PropTypes.string,

  showNavRight: PropTypes.bool,
  navRightStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  navRightType: PropTypes.oneOf(['share']),
  navRightContent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func
  ])

}

Header.defaultProps = {
  theme: 'light',

  showStatusBar: true,
  statusBarType: 'light',
  navStyle: theme.nav,

  showNavLeft: true,
  navLeftStyle: theme.navLeft,
  navLeftType: 'back',
  navLeftContent: null,

  showNavMiddle: true,
  navMiddleStyle: theme.navMiddle,
  navMiddleType: 'small',
  title: '',
  navMiddleContent: null,
  navTextColor: null,
  navTextWeight: theme.bold,

  showNavRight: true,
  navRightStyle: theme.navRight,
  navRightContent: null
}

export default Header
