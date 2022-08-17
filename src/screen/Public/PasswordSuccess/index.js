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
      <View style={styles.bgCover} />
      <View style={styles.bgMainLayout} />
      <View style={styles.bgLayout}>
        <TouchableOpacity style={styles.actBarBtn} onPress={() => { navigate('PublicSignIn') }}>
          <Icon name='arrowleft' type='AntDesign' style={[theme.huge, theme.light]} />
        </TouchableOpacity>
        <Content contentContainerStyle={theme.layoutDf}>
          <View style={styles.successContainer}>
            <View style={styles.successContent}>
              <Image source={require('@asset/images/success.png')} style={styles.successImg} />
              <Text style={styles.successTitle}>{__('Success')}</Text>
              <Text style={styles.successText}>{__('Congratulations! Your password has been changed successfully.')}</Text>
            </View>
            <View style={styles.loginBtnInfo}>
              <TouchableOpacity style={styles.loginBtn} onPress={() => { navigate('PublicSignIn') }}>
                <Text style={styles.loginBtnText}>{__('LOGIN')}</Text>
                <Icon name='arrowright' type='AntDesign' style={[theme.huge, theme.light]} />
              </TouchableOpacity>
            </View>
          </View>
          <Image source={require('@asset/images/car.png')} style={styles.bgImg} />
        </Content>
      </View>
    </Container>
  }
}
