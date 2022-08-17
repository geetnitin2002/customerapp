import React from 'react'
import { Text } from 'react-native'
import { Container, Content, Icon, View, Accordion } from 'native-base'

import styles from './styles'
import theme from '@theme/styles'

import Header from '@component/Header'

import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'
import request from '@utility/request'
import { bind } from '@utility/component'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isDisabled: false,
      isOpen: false
    },
    this.renderAccordionHeader = this.renderAccordionHeader.bind(this)
    this.renderAccordionContent = this.renderAccordionContent.bind(this)
    this.renderAccordionContentExterior = this.renderAccordionContentExterior.bind(this)
    this.renderAccordionContentFullService = this.renderAccordionContentFullService.bind(this)
    this.renderAccordionContentInterior = this.renderAccordionContentInterior.bind(this)
    this.renderAccordionContentInteriorFullService = this.renderAccordionContentInteriorFullService.bind(this)
  }
  onValueChange (value) {
    this.setState({
      selected: value
    })
  }

  renderAccordionHeader (item, expanded) {
    return (
      <View style={styles.accordionTab}>
        <View>
          <Text style={styles.accordionTitle}>{item.title}</Text>
        </View>
        {expanded
          ? <Icon name='caret-down' type='FontAwesome' style={[theme.extraLarge, theme.lightViolet]} />
          : <Icon name='caret-right' type='FontAwesome' style={[theme.extraLarge, theme.lightViolet]} />}
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
    return <View style={styles.accordionItem}>
      <View style={styles.accInfo}>
        <Text style={styles.accTitle}>{__('180 Car Wash')}</Text>
        <Text style={styles.accTitle}>{__('$12')}</Text>
      </View>
      <View style={styles.accDetail}>
        <View>
          <Text style={styles.accText}>{__('DATE')}</Text>
          <Text style={styles.accText}>{__('TIME')}</Text>
          <Text style={styles.accText}>{__('PAYMENT MODE')}</Text>
        </View>
        <View>
          <Text style={styles.accText}>{__(':')}</Text>
          <Text style={styles.accText}>{__(':')}</Text>
          <Text style={styles.accText}>{__(':')}</Text>
        </View>
        <View>
          <Text style={styles.accText}>{__('08-24-2019')}</Text>
          <Text style={styles.accText}>{__('10.30 AM - 11.30 AM')}</Text>
          <Text style={styles.accText}>{__('CREDIT CARD')}</Text>
        </View>
      </View>
      <View style={styles.invoiceBtn}>
        <Icon name='download' type='AntDesign' style={[theme.large, theme.light]} />
        <Text style={styles.invoiceBtnText}>{__('INVOICE')}</Text>
      </View>

    </View>
  }
  renderAccordionContentFullService () {
    return <View style={styles.accordionItem}>
      <View style={styles.accInfo}>
        <Text style={styles.accTitle}>{__('180 Car Wash')}</Text>
        <Text style={styles.accTitle}>{__('$12')}</Text>
      </View>
      <View style={styles.accDetail}>
        <View>
          <Text style={styles.accText}>{__('DATE')}</Text>
          <Text style={styles.accText}>{__('TIME')}</Text>
          <Text style={styles.accText}>{__('PAYMENT MODE')}</Text>
        </View>
        <View>
          <Text style={styles.accText}>{__(':')}</Text>
          <Text style={styles.accText}>{__(':')}</Text>
          <Text style={styles.accText}>{__(':')}</Text>
        </View>
        <View>
          <Text style={styles.accText}>{__('08-24-2019')}</Text>
          <Text style={styles.accText}>{__('10.30 AM - 11.30 AM')}</Text>
          <Text style={styles.accText}>{__('CREDIT CARD')}</Text>
        </View>
      </View>
      <View style={styles.invoiceBtn}>
        <Icon name='download' type='AntDesign' style={[theme.large, theme.light]} />
        <Text style={styles.invoiceBtnText}>{__('INVOICE')}</Text>
      </View>
    </View>
  }
  renderAccordionContentInterior () {
    return <View style={styles.accordionItem}>
      <View style={styles.accInfo}>
        <Text style={styles.accTitle}>{__('180 Car Wash')}</Text>
        <Text style={styles.accTitle}>{__('$12')}</Text>
      </View>
      <View style={styles.accDetail}>
        <View>
          <Text style={styles.accText}>{__('DATE')}</Text>
          <Text style={styles.accText}>{__('TIME')}</Text>
          <Text style={styles.accText}>{__('PAYMENT MODE')}</Text>
        </View>
        <View>
          <Text style={styles.accText}>{__(':')}</Text>
          <Text style={styles.accText}>{__(':')}</Text>
          <Text style={styles.accText}>{__(':')}</Text>
        </View>
        <View>
          <Text style={styles.accText}>{__('08-24-2019')}</Text>
          <Text style={styles.accText}>{__('10.30 AM - 11.30 AM')}</Text>
          <Text style={styles.accText}>{__('CREDIT CARD')}</Text>
        </View>
      </View>
      <View style={styles.invoiceBtn}>
        <Icon name='download' type='AntDesign' style={[theme.large, theme.light]} />
        <Text style={styles.invoiceBtnText}>{__('INVOICE')}</Text>
      </View>
    </View>
  }
  renderAccordionContentInteriorFullService () {
    return <View style={styles.accordionItem}>
      <View style={styles.accInfo}>
        <Text style={styles.accTitle}>{__('180 Car Wash')}</Text>
        <Text style={styles.accTitle}>{__('$12')}</Text>
      </View>
      <View style={styles.accDetail}>
        <View>
          <Text style={styles.accText}>{__('DATE')}</Text>
          <Text style={styles.accText}>{__('TIME')}</Text>
          <Text style={styles.accText}>{__('PAYMENT MODE')}</Text>
        </View>
        <View>
          <Text style={styles.accText}>{__(':')}</Text>
          <Text style={styles.accText}>{__(':')}</Text>
          <Text style={styles.accText}>{__(':')}</Text>
        </View>
        <View>
          <Text style={styles.accText}>{__('08-24-2019')}</Text>
          <Text style={styles.accText}>{__('10.30 AM - 11.30 AM')}</Text>
          <Text style={styles.accText}>{__('CREDIT CARD')}</Text>
        </View>
      </View>
      <View style={styles.invoiceBtn}>
        <Icon name='download' type='AntDesign' style={[theme.large, theme.light]} />
        <Text style={styles.invoiceBtnText}>{__('INVOICE')}</Text>
      </View>
    </View>
  }
  render () {
    return <Container>

      <Header navLeftType='back' statusBarType='dark' />
      <Content contentContainerStyle={theme.layoutDf}>
        <View style={styles.orderContainer}>
          <View style={styles.orderHeader}>
            <View style={styles.orderHeaderInfo}>
              <Icon name='file-invoice-dollar' type='FontAwesome5' style={[theme.extraHigantic, theme.dark]} />
              <View style={styles.orderHeaderDetail}>
                <Text style={styles.orderHeaderTitle}>{__('Orders')}</Text>
                <Text style={styles.orderHeaderText}>{__('Check your orders & invoices')}</Text>
              </View>
            </View>
          </View>
          <View style={styles.accordionLayout}>
            <Accordion
              style={styles.accordion}
              dataArray={[
                {
                  type: 'exterior',
                  title: '#WCC010'
                },
                {
                  type: 'fullService',
                  title: '#WCC005'
                },
                {
                  type: 'interior',
                  title: '#WCC003'
                },
                {
                  type: 'interiorFullService',
                  title: '#WCC001'
                }
              ]}
              expanded={1}
              renderHeader={this.renderAccordionHeader}
              renderContent={this.renderAccordionContent}
            />
          </View>

        </View>
      </Content>
    </Container>
  }
}
