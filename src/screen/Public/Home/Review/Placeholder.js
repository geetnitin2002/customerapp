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

        <View style={styles.reviewContainer}>
          <View style={styles.reviewContent}>
            <PlaceholderLine style={styles.reviewImg} />
            <View style={styles.reviewRattingInfo}>
              <PlaceholderLine width={50} />
            </View>
          </View>
          <View>
            <PlaceholderLine width={50} />
          </View>
        </View>

      </Placeholder>
    )
  }
}
