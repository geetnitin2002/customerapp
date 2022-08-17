import React, { useEffect, useState } from 'react'
import { StatusBar, TouchableOpacity, Image, TextInput, CheckBox } from 'react-native'
import { Container, Content, Icon, Text, View } from 'native-base'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import styles from './styles'
import theme from '@theme/styles'
import validator from 'validator';
import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'
import request from '@utility/request'
import { bind } from '@utility/component'
import { Alert } from 'react-native'
import * as userAction from '../../../redux/action/UserAction';
import { notUndefinedAndNull, undefinedOrNull } from '../../../component/utils/Validation'
import Loader from '../../../component/Loader';

export default function CreateAccount(props) {

   let dispatch = useDispatch();
   let store = useSelector(connectToStore, shallowEqual);
   const [isSelected, setSelection] = useState(false);
   let username = useInput('Username','none', 'default','Please enter username')
   let email = useInput('Email','none', 'default','Please enter email')
   let password = useInput('Password','password', 'default','Please enter password')
   let phone = useInput('Phone','none', 'default','Please enter mobile number')
  

   useEffect(() => {
      dispatch(userAction.resetActions())
   },[])

   useEffect(() => {
      if(notUndefinedAndNull(store.signUpError)){
        Alert.alert(store.signUpError)
      }
   },[store.signUpError])

   useEffect(() => {
    if(notUndefinedAndNull(store.signUpMessage)){
      Alert.alert(
        "Sign Up",
        store.signUpMessage,
        [
          {
            text: "Ok",
            onPress: () => navigate('PublicSignIn'),
            style: "ok",
          },
        ],
      )
    }
 },[store.signUpMessage])

   function onSignUp(){
      let valid = username.valid && password.valid && email.valid ;
      if(!valid){
        Alert.alert('Plaese fill all the details')
      }
      else if( valid && !isSelected)
      {
       Alert.alert('Plaese accept term and condition')
      }
      else{
        dispatch(userAction.resetActions())
        let emailValid = validator.isEmail(email.value);
        if(emailValid){
          let request = {
             "username" : username.value,
             "email" : email.value,
             "password": password.value,
             "phone" : phone.value,
             "roles": ["user"]
          }

          dispatch(userAction.signUp(request))

        }
        else{
          Alert.alert('Plaese enter valid email address')
        }
      }
      
      //navigate('PublicHome') 
   }

    return  <Container>
       <Loader show={store.showPageLoader}/>
      <StatusBar backgroundColor='rgba(51, 50, 85, 1)' barStyle='light-content' />
      <View style={styles.bg} />
      <View style={styles.bgCover} />
      <View style={styles.bgLayout}>
        <TouchableOpacity style={styles.actBarBtn} onPress={() => { navigate('PublicIntro') }}>
          <Icon name='arrowleft' type='AntDesign' style={[theme.huge, theme.light]} />
        </TouchableOpacity>
        <Content contentContainerStyle={styles.layoutDf}>
          <View style={styles.accountContainer}>
            <Text style={styles.accountTitle}>{__('Create an Account')}</Text>
            <View>
              <Text style={styles.formText}>{__('NAME')}</Text>
              <View style={styles.formRow}>
                <TextInput
                  {...username}
                  placeholderTextColor='rgba(211, 211, 217, 1)'
                  style={styles.formInput}
                />
                <Icon name='user' type='FontAwesome' style={[theme.huge, theme.smoke]} />
              </View>
              <Text style={styles.formText}>{__('EMAIL ADDRESS')}</Text>
              <View style={styles.formRow}>
                <TextInput
                  {...email}
                  placeholderTextColor='rgba(211, 211, 217, 1)'
                  style={styles.formInput}
                />
                <Icon name='mail' type='Foundation' style={[theme.huge, theme.smoke]} />
              </View>
              <Text style={styles.formText}>{__('MOBILE NUMBER')}</Text>
              <View style={styles.formRow}>
                <TextInput
                  {...phone}
                  placeholder='+91 6457689267'
                  placeholderTextColor='rgba(211, 211, 217, 1)'
                  style={styles.formInput}
                />
                <Icon name='mobile1' type='AntDesign' style={[theme.huge, theme.smoke]} />
              </View>
              <Text style={styles.formText}>{__('PASSWORD')}</Text>
              <View style={styles.formRow}>
                <TextInput
                  {...password}
                  secureTextEntry={true}
                  placeholderTextColor='rgba(211, 211, 217, 1)'
                  style={styles.formInput}
                />
                <Icon name='lock' type='FontAwesome' style={[theme.huge, theme.smoke]} />
              </View>
              <View style={styles.conditionInfo}>
                <CheckBox   value={isSelected} onValueChange={setSelection} color='green' />
                <View>
                  <Text style={styles.conditionText}>{__('I Agree Terms & Conditions')}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.createBtn} onPress={() => onSignUp()}>
                <Text style={styles.createBtnText}>{__('CREATE ACCOUNT')}</Text>
                <Icon name='arrowright' type='AntDesign' style={[theme.huge, theme.light]} />
              </TouchableOpacity>
              <View style={styles.signInInfo}>
                <Text style={styles.signInText}>{__('Already a Member?')}</Text>
                <TouchableOpacity onPress={() => { navigate('PublicSignIn') }}>
                  <Text style={styles.signInBtnText}>{__('Sign In')}</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </Content>

      </View>
    </Container>
    
  
}

function connectToStore(store){
  return{
    showPageLoader: store.user.showPageLoader,
    signUpStatus: store.user.signUpStatus,
    signUpMessage: store.user.signUpMessage,
    signUpError: store.user.signUpError
  }
}

function useInput(placeholder, textContentType, keyboardType,error){
  let [value, setValue] = useState('');
  let [errorMessage, setErrorMessage] = useState(null);
  let [valid, setValid] = useState(false);

  function handleValueChange(v){
      if(v === '' || undefinedOrNull(v)){
        setErrorMessage(error)
        setValue('')
        setValid(false)
      }
      else{
        setValue(v)
        setErrorMessage('')
        setValid(true)
      }
     
  }

  return {
      value,
      valid,
      placeholder,
      textContentType, 
      keyboardType,
      errorMessage: errorMessage,
      onChangeText: (v) => handleValueChange(v),
      validate: (v) => handleValueChange(v)
  }
}