import React from 'react'
import { Text } from 'react-native'
import { Container, Content, Icon, View, Accordion } from 'native-base'

import styles from './styles'
import theme from '@theme/styles'

import Header from '@component/Header'
import Footer from '@component/Footer'

import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'
import request from '@utility/request'
import { bind } from '@utility/component'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: '',
      isDisabled: false,
      isOpen: false
    }
    this.renderAccordionHeader = this.renderAccordionHeader.bind(this)
    this.renderAccordionContent = this.renderAccordionContent.bind(this)
    this.renderAccordionContentExterior = this.renderAccordionContentExterior.bind(this)
    this.renderAccordionContentFull = this.renderAccordionContentFull.bind(this)
    this.renderAccordionContentElite = this.renderAccordionContentElite.bind(this)
  }

  onValueChange () {
    this.setState({
      selected: ''
    })
  }
  renderAccordionHeader (item, expanded) {
    return (
      <View style={[{ backgroundColor: item.bgColor }, styles.accordionTab]}>
        <View>
          <Text style={styles.accordionTitle}>{item.title}</Text>
          <Text style={styles.accordionText}>{item.subtitle}</Text>
        </View>
        {expanded
          ? <Icon name='caret-down' type='FontAwesome' style={[theme.extraLarge, theme.light]} />
          : <Icon name='caret-right' type='FontAwesome' style={[theme.extraLarge, theme.light]} />}
      </View>
    )
  }
  renderAccordionContent (item) {
    var fn = 'renderAccordionContent' + (item.type.charAt(0).toUpperCase() + item.type.substr(1))
    return <View style={styles.accordionContent}>
      {this[fn]()}
    </View>
  }
  renderAccordionContentExterior () {
    return <View>
      <View style={styles.packageLayout}>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Complete soft cloth wash')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Wheel Brite')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Hand Applied True Shrine')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Triple Foam Conditioner')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Undercarriage')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Rust inhibitor')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Sealer Wax')}</Text>
        </View>
      </View>
    </View>
  }
  renderAccordionContentFull () {
    return <View>
      <View style={styles.packageLayout}>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Complete soft cloth wash')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Wheel Brite')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Hand Applied True Shrine')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Triple Foam Conditioner')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Undercarriage')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Rust inhibitor')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Sealer Wax')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Total Body Protectent')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Towel Dry')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Interior Vacuum')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Interior window Clean')}</Text>
        </View>
      </View>
    </View>
  }
  renderAccordionContentElite () {
    return <View>
      <View style={styles.packageLayout}>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Complete soft cloth wash')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Wheel Brite')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Hand Applied True Shrine')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Triple Foam Conditioner')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Undercarriage')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Rust inhibitor')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Sealer Wax')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Total Body Protectent')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Towel Dry')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Interior Vacuum')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Interior window Clean')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Dash & Console Wipe')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Door Jams Clean')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('4 Floor Mats Cleaned')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Seats wiped Cleaned')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Carnuba Wax')}</Text>
        </View>
        <View style={styles.packageDetail}>
          <Icon name='check-circle' type='Feather' style={[theme.extraLarge, theme.smokeDark]} />
          <Text style={styles.packageText}>{__('Fragrance')}</Text>
        </View>
      </View>
    </View>
  }
  render () {
    return <Container>
      <Header navLeftType='back' statusBarType='dark' />

      <Content contentContainerStyle={theme.layoutDf}>
        <View style={styles.packageContainer}>
          <View style={styles.packageContent}>
            <Text style={styles.packageTitle}>{__('Package')}</Text>
            <View style={styles.packageItem}>
              <Accordion
                style={styles.accordion}
                dataArray={[
                  {
                    type: 'exterior',
                    title: 'Golf Cart Service/ 4 Wheeler / E-Bus',
                    subtitle: 'Service Items (7500 + 18% GST)',
                    bgColor: 'rgba(95, 207, 221, 1)'
                  },
                  {
                    type: 'full',
                    title: '3 Wheeler Service',
                    subtitle: 'Service Items (3300 + 18%GST)',
                    bgColor: 'rgba(255, 179, 68, 1)'
                  },
                  {
                    type: 'elite',
                    title: '2 Wheeler Service',
                    subtitle: 'Service Items (1750 + 18% GST)',
                    bgColor: 'rgba(234, 93, 100, 1)'
                  }
                ]}
                expanded={1}
                renderHeader={this.renderAccordionHeader}
                renderContent={this.renderAccordionContent}
              />
            </View>
          </View>
        </View>
      </Content>
      <Footer currentScreen='Package' />
    </Container>
  }
}
