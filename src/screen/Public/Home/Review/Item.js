import React from 'react'
import { Image } from 'react-native'
import { Icon, Text, View } from 'native-base'

import styles from '../styles'

import theme from '@theme/styles'
import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'

export default class extends React.Component {
  render () {
    const item = this.props.item

    return (
      <>
        <View style={styles.reviewContainer}>
          <View style={styles.reviewContent}>
            <Image source={{ uri: item.Image }} style={styles.reviewImg} />
            <View style={styles.reviewRattingInfo}>
              <Text style={styles.customerName}>{item['Name_' + this.props.language] || item.Name}</Text>
              <View style={styles.rattingIconInfo}>
                <Icon name='star' type='FontAwesome' style={[theme.extraLarge, theme.yellow]} />
                <Icon name='star' type='FontAwesome' style={[theme.extraLarge, theme.yellow]} />
                <Icon name='star' type='FontAwesome' style={[theme.extraLarge, theme.yellow]} />
                <Icon name='star' type='FontAwesome' style={[theme.extraLarge, theme.yellow]} />
                <Icon name='star-half-full' type='FontAwesome' style={[theme.extraLarge, theme.yellow]} />
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.customerReview}>{item['Review_' + this.props.language] || item.Review}</Text>
          </View>
        </View>
      </>
    )
  }
}
