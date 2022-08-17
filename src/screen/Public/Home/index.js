
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Container, Content, Icon, Text, View } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import { } from 'rn-placeholder'

import DateTimePicker from '@react-native-community/datetimepicker'

import styles from './styles'

import Featured from './Featured'
import Package from './Package'
import Membership from './Membership'
import Review from './Review'

import Header from '@component/Header'
import Footer from '@component/Footer'
import theme from '@theme/styles'
import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'
import request from '@utility/request'
import { bind } from '@utility/component'


import featuredList from './data/featured'
import packageList from './data/package'
import membershipList from './data/membership'
import reviewList from './data/review'
import Leftmenu from '../../../component/Menu/Left/index'
import { Drawer } from 'react-native-paper'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: '',
      visibleDailyReminder: false,
      isDisabled: false,
      isOpen: false
    }

    this.state = {
      language: 'en',

      featuredList: [],
      fetchingFeaturedList: true,

      packageList: [],
      fetchingPackageList: true,

      membershipList: [],
      fetchingMembershipList: true,

      reviewList: [],
      fetchingReviewList: true
    }

    bind(this)

    this.fetchFeaturedList = this.fetchFeaturedList.bind(this)
    this.fetchPackageList = this.fetchPackageList.bind(this)
    this.fetchMembershipList = this.fetchMembershipList.bind(this)
    this.fetchReviewList = this.fetchReviewList.bind(this)

    this.showDailyReminder = this.showDailyReminder.bind(this)
    this.onChangeDailyReminder = this.onChangeDailyReminder.bind(this)
  }

  showDailyReminder () {
    this.setState({
      visibleDailyReminder: true
    })
  }

  onChangeDailyReminder () {
    this.setState({
      visibleDailyReminder: false
    })
  }

  onValueChange () {
    this.setState({
      selected: ''
    })
  }

  async componentDidMount () {
    const language = await AsyncStorage.getItem('language')
    await this.promisedSetState({
      language
    })

    await this.fetchFeaturedList()
    await this.fetchPackageList()
    await this.fetchMembershipList()
    await this.fetchReviewList()
  }

  async fetchFeaturedList () {
    await this.promisedSetState({
      fetchingFeaturedList: true
    })
    const list = await request(featuredList)
    await this.promisedSetState({
      featuredList: list,
      fetchingFeaturedList: false
    })
  }

  async fetchPackageList () {
    await this.promisedSetState({
      fetchingPackageList: true
    })
    const list = await request(packageList)
    await this.promisedSetState({
      packageList: list,
      fetchingPackageList: false
    })
  }

  async fetchMembershipList () {
    await this.promisedSetState({
      fetchingMembershipList: true
    })
    const list = await request(membershipList)
    await this.promisedSetState({
      membershipList: list,
      fetchingMembershipList: false
    })
  }

  async fetchReviewList () {
    await this.promisedSetState({
      fetchingReviewList: true
    })
    const list = await request(reviewList)
    await this.promisedSetState({
      reviewList: list,
      fetchingReviewList: false
    })
  }

  render () {
    return <Container>
      <Header navLeftType='menu' navMiddleType='medium' title='T G E' statusBarType='dark' />
      
      <Content contentContainerStyle={theme.layoutDf}>
        

        <Featured
          language={this.state.language}
          list={this.state.featuredList}
          fetching={this.state.fetchingFeaturedList}
        />

        <View style={styles.bookNowBtnInfo}>
          <TouchableOpacity style={styles.bookNowBtn} onPress={() => { navigate('PublicBooking') }}>
            <Text style={styles.bookNowBtnText}>{__('BOOK A SERVICE')}</Text>
            <Icon name='calendar' type='AntDesign' style={[theme.extraHuge, theme.light]} />
          </TouchableOpacity>
        </View>

        {/* <Package
          language={this.state.language}
          list={this.state.packageList}
          fetching={this.state.fetchingPackageList}
        />

        <Membership
          language={this.state.language}
          list={this.state.membershipList}
          fetching={this.state.fetchingMembershipList}
        /> */}
        

        <Review
          language={this.state.language}
          list={this.state.reviewList}
          fetching={this.state.fetchingReviewList}
        />

      </Content>
      {
        this.state.visibleDailyReminder
          ? <DateTimePicker
            value={new Date('2020-06-12T14:42:42')}
            mode={'time'}
            display='spinner'
            onChange={this.onChangeDailyReminder}
          />
          : null
      }
      <Footer currentScreen='Home' />
    </Container>
  }
}
