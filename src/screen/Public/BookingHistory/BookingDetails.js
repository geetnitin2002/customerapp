import React, { Fragment, useEffect, useState } from 'react'
import { Text,FlatList ,TouchableOpacity, StyleSheet} from 'react-native'
import { Container, Content, Icon, View, Accordion} from 'native-base'

import styles from '../../Public/Package/styles'
import theme from '@theme/styles'
import viewStyles from '../../Public/MyAccount/styles'
import Header from '@component/Header'
import Footer from '@component/Footer'
import orderStyles from '../Order/styles'
import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'
import request from '@utility/request'
import { bind } from '@utility/component'


export default function BookingDetails(props){

    const { title } = props.route.params
    

    function renderAccordionHeader (item, expanded) {
        return (
          <View style={orderStyles.accordionTab}>
            <View>
              <Text style={orderStyles.accordionTitle}>{item.title}</Text>
            </View>
            {expanded
              ? <Icon name='caret-down' type='FontAwesome' style={[theme.extraLarge, theme.lightViolet]} />
              : <Icon name='caret-right' type='FontAwesome' style={[theme.extraLarge, theme.lightViolet]} />}
          </View>
        )
      }

      function renderAccordionContent (){
          return(
            <View style={orderStyles.accordionItem}>
                <View style={orderStyles.accInfo}>
                    <Text style={orderStyles.accTitle}>{__('180 Car Wash')}</Text>
                    <Text style={orderStyles.accTitle}>{__('$12')}</Text>
                </View>
                <View style={orderStyles.accDetail}>
                    <View>
                    <Text style={orderStyles.accText}>{__('DATE')}</Text>
                    <Text style={orderStyles.accText}>{__('TIME')}</Text>
                    <Text style={orderStyles.accText}>{__('PAYMENT MODE')}</Text>
                    </View>
                    <View>
                    <Text style={orderStyles.accText}>{__(':')}</Text>
                    <Text style={orderStyles.accText}>{__(':')}</Text>
                    <Text style={orderStyles.accText}>{__(':')}</Text>
                    </View>
                    <View>
                    <Text style={orderStyles.accText}>{__('08-24-2019')}</Text>
                    <Text style={orderStyles.accText}>{__('10.30 AM - 11.30 AM')}</Text>
                    <Text style={orderStyles.accText}>{__('CREDIT CARD')}</Text>
                    </View>
                </View>
                <View style={orderStyles.invoiceBtn}>
                    <Icon name='download' type='AntDesign' style={[theme.large, theme.light]} />
                    <Text style={orderStyles.invoiceBtnText}>{__('INVOICE')}</Text>
                </View>

                </View>
          )
      }

    return(
        <Container>
          <Header navLeftType='back' statusBarType='dark' />
    
          <Content contentContainerStyle={theme.layoutDf}>
            <View style={styles.packageContainer}>
              <View style={styles.packageContent}>
              <View style={orderStyles.orderHeader}>
            <View style={orderStyles.orderHeaderInfo}>
              <Icon name='file-invoice-dollar' type='FontAwesome5' style={[theme.extraHigantic, theme.dark]} />
              <View style={orderStyles.orderHeaderDetail}>
                <Text style={orderStyles.orderHeaderTitle}>{title}</Text>
                <Text style={orderStyles.orderHeaderText}>{__('Check your orders & invoices')}</Text>
              </View>
            </View>
            </View>
              <Accordion
              dataArray={[
                {
                  type: 'exterior',
                  title: 'Services'
                },
                {
                  type: 'fullService',
                  title: 'Invoice'
                },
                {
                  type: 'interior',
                  title: 'Payment Details'
                },
                {
                  type: 'interiorFullService',
                  title: 'Shipping Address'
                }
              ]}
              expanded={1}
              renderHeader={renderAccordionHeader}
              renderContent={renderAccordionContent}
            />
              
             </View>
            </View>
          </Content>
     
        </Container>
    )
}