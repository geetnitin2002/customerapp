
import React from 'react'
import { } from 'react-native'
import { Container, Content, Text, View } from 'native-base'

import styles from './styles'
import theme from '@theme/styles'

import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'
import request from '@utility/request'
import { bind } from '@utility/component'

import Header from '@component/Header'

export default class extends React.Component {
  render () {
    return <Container>
      <Header navLeftType='back' statusBarType='dark' />

      <Content contentContainerStyle={theme.layoutDf}>
        <View style={styles.bgMainLayout}>
          <View style={styles.bgCover}>
            <Text style={styles.aboutTitle}>{__('About Us')}</Text>
            <Text style={styles.aboutText}>{__('  Integer pellentesque enim nec sem aliquam porttitor.  Duis et nunc at est euismod convallis sit amet vitae risus. In non orci eu risus aliquet volutpat ut non erat.')}</Text>
            <Text style={styles.aboutText}>{__('  Aenean sem sapien, vestibulum eu elit dignissim, sodales scelerisque lectus. Duis eu tempor metus. Vivamus luctus erat eget pellentesque rutrum.')}</Text>
            <Text style={styles.aboutText}>{__(' Sed blandit, eros sed cursus tempor, nibh nisi sodales elit, nec consequat nunc quam quis odio. Morbi bibendum mi lobortis luctus placerat. Nulla facilisis metus odio.')}</Text>
          </View>
        </View>
      </Content>

    </Container>
  }
}
