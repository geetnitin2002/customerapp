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

        <View style={styles.sessionItem}>
          <View style={styles.timeBtn}>
            <PlaceholderLine width={20} />
          </View>
        </View>

      </Placeholder>
    )
  }
}
