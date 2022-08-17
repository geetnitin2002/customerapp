import React from 'react'
import { StatusBar, TouchableOpacity, Image } from 'react-native'
import { Container, Content, Icon, Text, View } from 'native-base'

import styles from './styles'
import theme from '@theme/styles'

import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'
import request from '@utility/request'
import { bind } from '@utility/component'

export default class extends React.Component {
  render () {
    return <Container>
      <StatusBar backgroundColor='rgba(51, 50, 85, 1)' barStyle='light-content' />
      <Content contentContainerStyle={theme.layoutDf}>
        <View style={styles.bgMain}>
          <TouchableOpacity style={styles.navLeftBtn} onPress={() => { navigate('PublicBooking') }}>
            <Icon name='arrowleft' type='AntDesign' style={[theme.huge, theme.light]} />
          </TouchableOpacity>
          <View style={styles.confirmationContainer}>
            <View style={styles.confirmationHeader}>
              <Image source={require('@asset/images/success.png')} style={styles.confirmationImg} />
              <Text style={styles.confirmationTitle}>{__('Thank You!')}</Text>
              <Text style={styles.confirmationText}>{__('Your booking has been confirmed')}</Text>
            </View>
            <View style={styles.bookingInfo}>
              <Text style={styles.bookingText}>{__('BOOKING ID:')}</Text>
              <Text style={styles.bookingNumText}>{__('#WCC0014')}</Text>
            </View>
          </View>
        </View>
        <View style={styles.loginBtnInfo}>
          <TouchableOpacity style={styles.loginBtn} onPress={() => { navigate('PublicHome') }}>
            <Icon name='arrowleft' type='AntDesign' style={[theme.huge, theme.light]} />
            <Text style={styles.loginBtnText}>{__('BACK TO ORDER HISTORY')}</Text>
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  }
}
