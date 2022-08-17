import React from 'react'
import { StatusBar, TouchableOpacity, Image } from 'react-native'
import { Container, Content, Text, View } from 'native-base'

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
        <Content contentContainerStyle={theme.layoutDf}>
          <View style={styles.introContainer}>
            <View style={styles.imgBg}>
              <Image source={require('@asset/images/logo.png')} style={styles.introImg} resizeMode='contain' />
            </View>
            <View style={styles.btnInfo}>
              <TouchableOpacity style={styles.loginBtn} onPress={() => { navigate('PublicSignIn') }}>
                <Text style={styles.loginBtnText}>{__('LOGIN')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.createBtn} onPress={() => { navigate('PublicCreateAccount') }}>
                <Text style={styles.loginBtnText}>{__('CREATE ACCOUNT')}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Image source={require('@asset/images/car.png')} style={styles.bgImg} />
        </Content>
      </View>
    </Container>
  }
}
