import React from 'react'
import { TouchableOpacity, TextInput } from 'react-native'
import { Container, Content, Icon, Text, View } from 'native-base'
import { connect } from "react-redux";
import styles from './styles'
import theme from '@theme/styles'
import { getUser, deleteUser } from '../../services/Session';
import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'
import request from '@utility/request'
import { bind } from '@utility/component'
import * as userAction from '../../../redux/action/UserAction';
import Header from '@component/Header'
import { Alert } from 'react-native';
class mycomponent extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
        password: '',
        c_password: '',
        id: ''
      
    }
  }

  async componentDidMount () {
    await this.getUserData()
  }

  async getUserData () {
    let user = await getUser();
     this.setState({id: user.id})  
  }
  

  _changePassword= async()=>{
    console.log("wait.....");
    console.log(this.state.updateuser);
    if(this.state.password != this.state.c_password)
    {
     Alert.alert("Confirm Password didn't match")
    }
    else{
   await this.props.dispatch(userAction.change_password({password : this.state.password}, this.state.id));
   await deleteUser();
   await  this.props.dispatch(userAction.resetActions());
   navigate('PublicSignIn')
    }
 }


  render () {
    return <Container>
      <Header navLeftType='back' statusBarType='dark' />
      <Content contentContainerStyle={styles.layoutDf}>
        <View style={styles.bgLayout}>
          <View style={styles.bgCover}>
            <View style={styles.passwordContainer}>
              <View style={styles.passwordHeader}>
                <Icon name='lock' type='FontAwesome' style={[theme.extraBig, theme.dark]} />
                <View style={styles.changePasswordHeader}>
                  <Text style={styles.passwordHeaderTitle}>{__('Settings')}</Text>
                  <Text style={styles.passwordHeaderText}>{__('Change your password')}</Text>
                </View>
              </View>
              <View>
                <Text style={styles.formText}>{__('NEW PASSWORD')}</Text>
                <View style={styles.formRow}>
                  <TextInput
                    placeholder='* * * * * * * * * *'
                    placeholderTextColor='rgba(211, 211, 217, 1)'
                    style={styles.formInput}
                    onChangeText={(val)=> this.setState({password : val})}
                  />
                  <Icon name='lock' type='FontAwesome' style={[theme.huge, theme.smoke]} />
                </View>
                <Text style={styles.formText}>{__('CONFIRM NEW PASSWORD')}</Text>
                <View style={styles.formRow}>
                  <TextInput
                    placeholder='* * * * * * * * * *'
                    placeholderTextColor='rgba(211, 211, 217, 1)'
                    style={styles.formInput}
                    onChangeText={(val)=> this.setState({c_password : val})}
                  />
                  <Icon name='lock' type='FontAwesome' style={[theme.huge, theme.smoke]} />
                </View>
                <TouchableOpacity style={styles.saveBtn} onPress={()=> { this._changePassword() }}>
                  <Text style={styles.saveBtnText}>{__('SAVE')}</Text>
                  <Icon name='arrowright' type='AntDesign' style={[theme.huge, theme.light]} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Content>

    </Container>
  }
}

export default connect()(mycomponent);