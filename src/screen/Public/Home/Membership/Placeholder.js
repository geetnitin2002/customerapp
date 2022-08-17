import React from 'react'
import { View } from 'native-base'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

export default class extends React.Component {
  render () {
    return (
      <Placeholder
        Animation={Fade}
      >

        <View style={styles.membershipContainer}>
          <View style={styles.membershipContent}>
            <View style={styles.membershipHeader}>
              <PlaceholderLine width={20} />
              <PlaceholderLine width={20} />
            </View>
            <PlaceholderLine width={20} />
            <View style={styles.servicePriceInfo}>
              <PlaceholderLine width={20} />
              <PlaceholderLine width={20} />
              <PlaceholderLine width={20} />
            </View>
            <PlaceholderLine width={20} />
          </View>
        </View>

      </Placeholder>
    )
  }
}
