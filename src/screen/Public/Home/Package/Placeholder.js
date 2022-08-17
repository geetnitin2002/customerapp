import React from 'react'
import { View } from 'native-base'
import { Fade, Placeholder, PlaceholderMedia, PlaceholderLine } from 'rn-placeholder'

import styles from '../styles'

export default class extends React.Component {
  render () {
    return (
      <Placeholder Animation={Fade} >
        <View style={styles.packageContainer}>
          <View style={styles.packageContent}>
            <View style={styles.packageInfo}>
              <PlaceholderLine width={20} />
              <PlaceholderLine width={20} />
              <PlaceholderLine width={20} />
            </View>
            <View style={styles.pkgCol}>
              <PlaceholderLine width={20} />
              <PlaceholderLine width={20} />
            </View>
          </View>
        </View>

      </Placeholder>
    )
  }
}
