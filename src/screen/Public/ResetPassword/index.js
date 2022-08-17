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
        <TouchableOpacity style={styles.actBarBtn} onPress={() => { navigate('PublicForgotPassword') }}>
          <Icon name='arrowleft' type='AntDesign' style={[theme.huge, theme.light]} />
        </TouchableOpacity>
        <Content contentContainerStyle={styles.layoutDf}>
          <View style={styles.resetForm}>
            <Text style={styles.resetTitle}>{__('Reset')}</Text>
            <Text style={styles.resetText}>{__('Enter your new password')}</Text>
            <View>
              <Text style={styles.formText}>{__('NEW PASSWORD')}</Text>
              <View style={styles.formRow}>
                <TextInput
                  placeholder='* * * * * * * * * *'
                  placeholderTextColor='rgba(211, 211, 217, 1)'
                  style={styles.formInput}
                />
                <Icon name='lock' type='FontAwesome' style={[theme.huge, theme.smoke]} />
              </View>
              <Text style={styles.formText}>{__('PASSWORD')}</Text>
              <View style={styles.formRow}>
                <TextInput
                  placeholder='* * * * * * * * * *'
                  placeholderTextColor='rgba(211, 211, 217, 1)'
                  style={styles.formInput}
                />
                <Icon name='lock' type='FontAwesome' style={[theme.huge, theme.smoke]} />
              </View>
              <TouchableOpacity style={styles.resetBtn} onPress={() => { navigate('PublicPasswordSuccess') }}>
                <Text style={styles.resetBtnText}>{__('RESET')}</Text>
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
