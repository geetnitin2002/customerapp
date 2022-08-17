import React from 'react'
import { FlatList, TouchableOpacity, I18nManager } from 'react-native'
import { Icon, Text, View } from 'native-base'

import Item from './Item'
import styles from './../styles'
import Placeholder from './Placeholder'
import theme from '@theme/styles'
import { __ } from '@utility/translation'

export default class extends React.Component {
  constructor (props) {
    super(props)

    this.renderTemplate = this.renderTemplate.bind(this)
    this.renderItem = this.renderItem.bind(this)
    this.renderList = this.renderList.bind(this)
  }

  renderTemplate () {
    return <Placeholder />
  }

  renderItem (item) {
    return (
      <Item
        language={this.props.language}
        item={item}
      />
    )
  }

  renderList () {
    if (this.props.fetching) {
      return [1, 2].map(this.renderTemplate)
    }

    return this.props.list.map(this.renderItem)
  }

  render () {
    return (
      <>

        <View style={styles.homeHeader}>
          <Text style={styles.homeHeaderTitle}>{__('PACKAGES')}</Text>
          <Text style={styles.homeHeaderText}>{__('Packages for Car wash & Services')}</Text>
          {this.renderList()}
        </View>
      </>
    )
  }
}
