import React from 'react'
import { TouchableOpacity, Text, TextInput, Image } from 'react-native'
import { Container, Content, Icon, View } from 'native-base'
import { getUser, deleteUser } from '../../services/Session';
import styles from './styles'
import theme from '@theme/styles'
import { connect } from "react-redux";
import * as userAction from '../../../redux/action/UserAction';
import Header from '@component/Header'

import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'
import request from '@utility/request'
import { bind } from '@utility/component'

class mycomponent extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      userdata: '',
      updateuser: {
        username: '',
        email: '',
        phone: ''
      }
    }
  }
  async componentDidMount () {
    await this.getUserData()
  }

  async getUserData () {
    let user = await getUser();
     this.setState({userdata: user })
     this.setState({updateuser: {
       username: user.username,
       email: user.email,
       phone: user.phone
     }})
  }

   _updateUser= async()=>{
     console.log("wait.....");
     console.log(this.state.updateuser);
    await this.props.dispatch(userAction.update(this.state.updateuser, this.state.userdata.id));
    await deleteUser();
    await  this.props.dispatch(userAction.resetActions());
    navigate('PublicSignIn')
  }

  render () {
    return <Container>
      <Header navLeftType='back' statusBarType='dark' />
      <Content contentContainerStyle={theme.layoutDf}>

        <View style={styles.profileContainer}>

          <View style={styles.profileDetail}>
            <View style={styles.profileHeader}>
              <Icon name='user' type='FontAwesome' style={[theme.extraHigantic, theme.dark]} />
              <View style={styles.profileHeaderInfo}>
                <Text style={styles.profileHeaderTitle}>{__('Profile')}</Text>
                <Text style={styles.profileHeaderText}>{__('Manage your profile informations')}</Text>
              </View>
            </View>
            <View style={styles.sectionWhite}>
              <View style={styles.editImg}>
                <View style={styles.bgImg}>
                  <Image source={{ uri: 'https://serviceappimages.s3.us-west-1.amazonaws.com/profile/WhatsApp+Image+2022-05-11+at+12.43.18+PM.jpeg' }} style={styles.avatarImg} />
                  <TouchableOpacity style={styles.editBtn}>
                    <Icon name='pencil' type='EvilIcons' style={[theme.large, theme.greyDark]} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.profileForm}>
              <View>
                <View style={styles.formRow}>
                  <Text style={styles.formText}>{__('NAME')}</Text>
                  <View style={styles.formInfo}>
                    <TextInput
                      placeholder='Salma Hayeke'
                      placeholderTextColor='rgba(0,0,0,0.9)'
                      style={styles.formInput}
                      onChangeText={(val)=> this.setState({updateuser: { ...this.state.updateuser, username: val }})}
                      defaultValue= {this.state.userdata.username}
                      editable= {true}
                    />
                    <Icon name='user' type='FontAwesome' style={[theme.extraHuge, theme.smoke]} />
                  </View>
                </View>
                <View style={styles.formRow}>
                  <Text style={styles.formText}>{__('EMAIL')}</Text>
                  <View style={styles.formInfo}>
                    <TextInput
                      placeholder='salma.hayeke125@gmail.com'
                      placeholderTextColor='rgba(0,0,0,0.9)'
                      style={styles.formInput}
                      onChangeText={(val)=> this.setState({updateuser: { ...this.state.updateuser, email: val }})}
                      defaultValue= {this.state.userdata.email}
                      editable= {true}
                    />
                    <Icon name='mail' type='Entypo' style={[theme.extraHuge, theme.smoke]} />
                  </View>
                </View>
                <View style={styles.formRow}>
                  <Text style={styles.formText}>{__('MOBILE NUMBER')}</Text>
                  <View style={styles.formInfo}>
                    <TextInput
                      placeholder='+91 954354248'
                      placeholderTextColor='rgba(0,0,0,0.9)'
                      keyboardType={'numeric'}
                      style={styles.formInput}
                      onChangeText={(val)=> this.setState({updateuser: { ...this.state.updateuser, phone: val }})}
                      defaultValue= {this.state.userdata.phone}
                      editable= {true}
                    />
                    <Icon name='mobile' type='Entypo' style={[theme.extraHuge, theme.smoke]} />
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.saveBtn} onPress={() => {  this._updateUser(); console.log(this.state.updateuser); 
              // navigate('') 
              }}>
                <Text style={styles.saveBtnText}>{__('SAVE')}</Text>
                <Icon name='arrowright' type='AntDesign' style={[theme.extraLarge, theme.light]} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Content>
    </Container>
  }
}

export default  connect()(mycomponent);