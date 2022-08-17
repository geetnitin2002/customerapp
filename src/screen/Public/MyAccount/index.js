
import React from 'react'
import { StatusBar, TouchableOpacity, Text } from 'react-native'
import { Container, Content, Icon, View } from 'native-base'
import { connect } from "react-redux";
import * as userAction from '../../../redux/action/UserAction';
import { deleteUser, getUser, getUser_data } from '../../services/Session';
import styles from './styles'
import theme from '@theme/styles'

import Header from '@component/Header'
import Footer from '@component/Footer'

import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'
import request from '@utility/request'
import { bind } from '@utility/component'
import { Button } from 'react-native-elements'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

  class mycomponent extends React.Component {
    constructor(props) {
      super(props);
      this.state ={
        userdata: ''
      }
    }
    async componentDidMount () {
      await this.getUserData()
    }

    async getUserData () {
      let user = await getUser();
       this.setState({userdata: user })
    }
   

  render () {
    console.log(this.state.userdata);
    return <Container>
      <Header navLeftType='back' statusBarType='dark' />

      <Content contentContainerStyle={theme.layoutDf}>
        <View style={styles.myAccountContainer}>
          <View style={styles.myAccountHeader}>
            <View>
              <Text style={styles.myAccountHeaderTitle}>{__('Hi  '+ this.state.userdata.username)}</Text>
              <Text style={styles.myAccountHeaderText}>{__('Welcome to Tejaswi Group')}</Text>
            </View>
            <View style={styles.myAccountContent}>
              <View style={[styles.myAccountInfo, styles.bgBlue]}>
                <View>
                  {/* <Text style={styles.numText}>{__('SPENT')}</Text> */}
                  <Text style={styles.priceText}>{__('AMOUNT PAID ')}</Text>
                </View>
                <View style={styles.priceDetail}>
                  <Text style={styles.dollarText}>{__('₹')}</Text>
                  <Text   style={styles.priceText}>{__('12000')}</Text>
                </View>
              </View>
              <View style={[styles.myAccountInfo, styles.bgYellow]}>
                <View>
                  {/* <Text style={styles.numText}>{__('NO. OF')}</Text> */}
                  <Text style={styles.priceText}>{__('No of Free Services')}</Text>
                </View>
                <View>
                  <Text  style={styles.priceText}>{__('2')}</Text>
                </View>
              </View>
              {/* <View style={[styles.myAccountInfo, styles.bgRed]}>
                <View>
                  <Text style={styles.numText}>{__('NO. OF')}</Text>
                  <Text style={styles.priceText}>{__('SERVICE')}</Text>
                </View>
                <View>
                  <Text style={styles.priceNumText}>{__('07')}</Text>
                </View>
              </View> */}
            </View>
            {/* <TouchableOpacity style={styles.settingInfo} onPress={() => { navigate('PublicOrder') }}>
              <View>
                <Text style={styles.settingTitle}>{__('ORDERS')}</Text>
                <Text style={styles.settingText}>{__('MANAGE TOUR ORDERS')}</Text>
              </View>
              <View>
                <Icon name='file-invoice-dollar' type='FontAwesome5' style={[theme.extraHigantic, theme.dark]} />
              </View>
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.settingInfo} onPress={() => { navigate('BookingHistory') }}>
              <View>
                <Text style={styles.settingTitle}>{__('BOOKING HISTORY')}</Text>
                <Text style={styles.settingText}>{__('VIEW YOUR BOOKING')}</Text>
              </View>
              <View>
                <Icon name='history' type='FontAwesome5' style={[theme.extraHigantic, theme.dark]} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingInfo} onPress={() => { navigate('PublicProfile') }}>
              <View>
                <Text style={styles.settingTitle}>{__('PROFILE')}</Text>
                <Text style={styles.settingText}>{__('MANAGE YOUR PROFILE INFOS')}</Text>
              </View>
              <View>
                <Icon name='user' type='FontAwesome' style={[theme.extraHigantic, theme.dark]} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingInfo} onPress={() => { navigate('AllVehicle') }}>
              <View>
                <Text style={styles.settingTitle}>{__('YOUR VEHICLE')}</Text>
                <Text style={styles.settingText}>{__('SEE YOUR VEHICLE')}</Text>
              </View>
              <View>
                <Icon name='car' type='FontAwesome' style={[theme.extraHigantic, theme.dark]} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingInfo} onPress={() => { navigate('AddVehicle') }}>
              <View>
                <Text style={styles.settingTitle}>{__('ADD VEHICLE')}</Text>
                <Text style={styles.settingText}>{__('ADD YOUR VEHICLE')}</Text>
              </View>
              <View>
                <Icon name='car' type='FontAwesome' style={[theme.extraHigantic, theme.dark]} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingInfo} onPress={() => { navigate('PublicChangePassword') }}>
              <View>
                <Text style={styles.settingTitle}>{__('SETTINGS')}</Text>
                <Text style={styles.settingText}>{__('MANAGE YOUR SETTINGS')}</Text>
              </View>
              <View>
                <Icon name='gears' type='FontAwesome' style={[theme.extraHigantic, theme.dark]} />
              </View>
            </TouchableOpacity>
            <View style={{...styles.settingInfo, justifyContent: 'center' }}>
              <View style={{justifyContent: 'center'}}>
                <Button title="Logout" onPress={async()=> {
                  await deleteUser();
                  await  this.props.dispatch(userAction.resetActions());
                     navigate('PublicSignIn')
                } } /> 
              </View>
            </View>
          </View>
        </View>
      </Content>

      <Footer currentScreen='Profile' />
    </Container>
  }
}

export default connect()(mycomponent);