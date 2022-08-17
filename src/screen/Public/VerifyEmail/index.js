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
        <TouchableOpacity style={styles.actBarIcon} onPress={() => { navigate('PublicSignIn') }}>
          <Icon name='arrowleft' type='AntDesign' style={[theme.huge, theme.light]} />
        </TouchableOpacity>
        <Content contentContainerStyle={styles.layoutDf}>
          <View style={styles.formVerify}>
            <Text style={styles.verifyTitle}>{__('Verification')}</Text>
            <View>
              <Text style={styles.verifyText}>{__('Enter the verification code we just sent you on your email address')}</Text>
              <View style={styles.formRow}>
                <TextInput placeholder='3' keyboardType='numeric' style={styles.formInput} />
                <TextInput placeholder='3' keyboardType='numeric' style={styles.formInput} />
                <TextInput placeholder='5' keyboardType='numeric' style={styles.formInput} />
                <TextInput placeholder='7' keyboardType='numeric' style={styles.formInput} />
              </View>
              <TouchableOpacity style={styles.verifyBtn}>
                <Text style={styles.verifyBtnText}>{__('VERIFY NOW')}</Text>
                <Icon name='arrowright' type='AntDesign' style={[theme.huge, theme.light]} />
              </TouchableOpacity>
              <View style={styles.resendInfo}>
                <Text style={styles.resendText}>{__('If you did not receive a code!')}</Text>
                <TouchableOpacity>
                  <Text style={styles.resendBtn}>{__('Resend')}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Image source={require('@asset/images/car.png')} style={styles.bgImg} />
        </Content>
      </View>
    </Container>
  }
}
