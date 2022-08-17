import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text, View } from 'native-base'

import styles from '../styles'

import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'

export default class extends React.Component {
  render () {
    const item = this.props.item

    return (
      <>
        <View style={styles.sessionItem}>
          <TouchableOpacity style={[styles.timeBtn, item.sessionActive]} onPress={() => { navigate('') }}>
            <Text style={styles.timeBtnText}>{item.time}</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }
}
