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
        <View style={styles.featureContainer}>
          <View style={styles.featureContent}>
            <PlaceholderLine style={styles.featureImg} />
            <PlaceholderLine style={styles.linearGradient} />
            <View style={styles.featureInfo}>
              <View>
                <PlaceholderLine width={20} />
                <PlaceholderLine width={20} />
              </View>
              <PlaceholderLine width={20} />
            </View>
          </View>
        </View>

      </Placeholder>
    )
  }
}
