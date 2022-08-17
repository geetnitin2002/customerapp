import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text, View } from 'native-base'

import styles from '../styles'

import theme from '@theme/styles'
import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'

export default class extends React.Component {
  render () {
    const item = this.props.item

    return (
      <>
        <View style={styles.membershipContainer}>
          <TouchableOpacity style={[styles.membershipContent, { backgroundColor: item.color }]} onPress={() => { navigate('PublicMemberShip') }}>
            <View style={styles.membershipHeader}>
              <Text style={styles.membershipHeaderText}>{item['Service_' + this.props.language] || item.Service}</Text>
              <Text style={styles.membershipHeaderText}>{item['Type_' + this.props.language] || item.Type}</Text>
            </View>
            <Text style={styles.membershipText}>{item['Wash_' + this.props.language] || item.Wash}</Text>
            <View style={styles.servicePriceInfo}>
              <Text style={styles.serviceCurrency}>{__(' $')}</Text>
              <Text style={styles.servicePrice}>{item['Price_' + this.props.language] || item.Price}</Text>
              <Text style={styles.serviceData}>{__(' /mo')}</Text>
            </View>
            <Text style={styles.unlimitedText}>{item['MemberShip_' + this.props.language] || item.MemberShip}</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }
}
