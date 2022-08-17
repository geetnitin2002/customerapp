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
      <View style={styles.packageContainer}>
        <TouchableOpacity style={styles.packageContent} onPress={() => { navigate('PublicPackage') }}>
          <View style={styles.packageInfo}>
            <Text style={styles.packageText}>{item['Text_' + this.props.language] || item.Text}</Text>
            <Text style={styles.packageWashText}>{item['InfoText_' + this.props.language] || item.InfoText}</Text>
            <Text style={styles.packageService}>{item['Service_' + this.props.language] || item.Service}</Text>
          </View>
          <View style={styles.pkgCol}>
            <Text style={styles.packageCurrency}>{__('$ ')}</Text>
            <Text style={styles.packagePrice}>{item['price_' + this.props.language] || item.price}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
