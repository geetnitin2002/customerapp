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
        <TouchableOpacity style={styles.actBarInfo} onPress={() => { navigate('PublicHome') }}>
          <Icon name='arrowleft' type='AntDesign' style={[theme.huge, theme.light]} />
        </TouchableOpacity>
        <Content contentContainerStyle={theme.layoutDf}>
          <View style={styles.rateContainer}>
            <Text style={styles.rateTitle}>{__('Rate this App')}</Text>
            <Text style={styles.rateText}>{__('Please support us by leaving a review on the app store')}</Text>
            <TouchableOpacity style={styles.rateBtn} onPress={() => { navigate('PublicIntro') }}>
              <Text style={styles.rateBtnText}>{__('RATE APP NOW')}</Text>
              <Icon name='arrowright' type='AntDesign' style={[theme.huge, theme.light]} />
            </TouchableOpacity>
          </View>
          <Image source={require('@asset/images/car.png')} style={styles.bgImg} />
        </Content>
      </View>
    </Container>
  }
}
