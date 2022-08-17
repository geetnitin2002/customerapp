import React from 'react'
import { Text } from 'react-native'
import { Container, Content, View } from 'native-base'

import styles from './styles'
import theme from '@theme/styles'

import Header from '@component/Header'
import Footer from '@component/Footer'

import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'
import request from '@utility/request'
import { bind } from '@utility/component'

export default class extends React.Component {
  render () {
    return <Container>
      <Header navLeftType='back' statusBarType='dark' />
      <Content contentContainerStyle={theme.layoutDf}>
        <View style={styles.membershipContainer}>
          <View style={styles.membershipContent}>
            <Text style={styles.membershipTitle}>{__('Membership')}</Text>
            <View>
              <View style={[styles.membershipItem, styles.bgColor]}>
                <View>
                  <Text style={styles.membershipText}>{__('Exterior Only')}</Text>
                  <Text style={styles.washText}>{__('180 WASH')}</Text>
                  <Text style={styles.washLabel}>{__('Single Wash')}</Text>
                </View>
                <View style={styles.membershipInfo}>
                  <Text style={styles.memberText}>{__(' ')}</Text>
                  <Text style={styles.memberLabel}>{__('12')}</Text>
                </View>
              </View>
              <View style={styles.memberInfo}>
                <View style={styles.currencyInfo}>
                  <Text style={styles.currencyText}>{__(' ')}</Text>
                  <Text style={styles.serviceText}>{__('29.99')}</Text>
                  <Text style={styles.currencyTextSm}>{__('/ mo')}</Text>
                </View>
                <Text style={styles.serviceLabel}>{__('UNLIMITED MEMBERSHIP')}</Text>
              </View>
              <View style={[styles.membershipItem, styles.bgColor2]}>
                <View>
                  <Text style={styles.membershipText}>{__('Full service')}</Text>
                  <Text style={styles.washText}>{__('360 WASH')}</Text>
                  <Text style={styles.washLabel}>{__('Single wash')}</Text>
                </View>
                <View style={styles.membershipInfo}>
                  <Text style={styles.memberText}>{__(' ')}</Text>
                  <Text style={styles.memberLabel}>{__('24')}</Text>
                </View>
              </View>
              <View style={styles.memberInfo}>
                <View style={styles.currencyInfo}>
                  <Text style={styles.currencyText}>{__('')}</Text>
                  <Text style={styles.serviceText}>{__('49.99')}</Text>
                  <Text style={styles.currencyTextSm}>{__('/ mo')}</Text>
                </View>
                <Text style={styles.serviceLabel}>{__('UNLIMITED MEMBERSHIP')}</Text>
              </View>
              <View style={[styles.membershipItem, styles.bgColor3]}>
                <View>
                  <Text style={styles.membershipText}>{__('Full service')}</Text>
                  <Text style={styles.washText}>{__('ELITE WASH')}</Text>
                  <Text style={styles.washLabel}>{__('Single wash')}</Text>
                </View>
                <View style={styles.membershipInfo}>
                  <Text style={styles.memberText}>{__(' ')}</Text>
                  <Text style={styles.memberLabel}>{__('36')}</Text>
                </View>
              </View>
              <View style={styles.memberInfo}>
                <View style={styles.currencyInfo}>
                  <Text style={styles.currencyText}> {__('CVV')}</Text>
                  <Text style={styles.serviceText}>{__('69.99')}</Text>
                  <Text style={styles.currencyTextSm}>{__('/ mo')}</Text>
                </View>
                <Text style={styles.serviceLabel}>{__('UNLIMITED MEMBERSHIP')}</Text>
              </View>
            </View>
          </View>
        </View>
      </Content>
      <Footer currentScreen='MemberShip' />
    </Container>
  }
}
