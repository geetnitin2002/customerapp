import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { View, Icon, Text } from 'native-base'

import styles from '../styles'
import Item from './Item'
import Placeholder from './Placeholder'

import theme from '@theme/styles'
import { __ } from '@utility/translation'

export default class extends React.Component {
  constructor (props) {
    super(props)

    this.renderTemplate = this.renderTemplate.bind(this)
    this.renderItem = this.renderItem.bind(this)
  }

  renderTemplate () {
    return <Placeholder />
  }

  renderItem ({ item }) {
    return (
      <Item
        language={this.props.language}
        item={item}
      />
    )
  }

  render () {
    return (
      <>
        <View style={styles.homeHeader2}>
          <Text style={styles.homeHeaderTitle}>{__('MEMBERSHIP')}</Text>
          <Text style={styles.homeHeaderText}>{__('Our Customers Feedback')}</Text>
          <FlatList
            data={this.props.fetching ? [1, 2] : this.props.list}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={this.props.fetching ? this.renderTemplate : this.renderItem}
          />
        </View>
      </>
    )
  }
}
