import React from 'react'
import { StatusBar, TouchableOpacity, Image, TextInput } from 'react-native'
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
        <Content contentContainerStyle={styles.layoutDf}>
          <View style={styles.forgotPasswordForm}>
            <Text style={styles.forgotTitle}>{__('Forgot Password?')}</Text>
            <Text style={styles.forgotText}>{__('Enter the email address associated with your account')}</Text>
            <Text style={styles.resetText}>{__('We will email you a link to reset your password')}</Text>
            <Text style={styles.forgotInfo}>{__('EMAIL ADDRESS')}</Text>
            <View style={styles.formRow}>
              <TextInput
                placeholder='someone@hgf.com'
                placeholderTextColor='rgba(0,0,0,0.5)'
                style={styles.formInput}
              />
              <Icon name='mail' type='Foundation' style={[theme.huge, theme.smoke]} />
            </View>
            <TouchableOpacity style={styles.sendBtn} onPress={() => { navigate('PublicSignIn') }}>
              <Text style={styles.sendBtnText}>{__('SEND')}</Text>
              <Icon name='arrowright' type='AntDesign' style={[theme.huge, theme.light]} />
            </TouchableOpacity>
          </View>
          <Image source={require('@asset/images/car.png')} style={styles.bgImg} />
        </Content>
      </View>
    </Container>
  }
}
