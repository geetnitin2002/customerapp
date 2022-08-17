import React, { useEffect , useState} from 'react'
import { StatusBar, TouchableOpacity, Image, TextInput } from 'react-native'
import { Container, Content, Icon, Text, View } from 'native-base'
import { setUser , getUser} from '../../services/Session';
import styles from './styles'
import theme from '@theme/styles'
import { COLOR, FAMILY, SIZE } from '@theme/typography'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'
import request from '@utility/request'
import { bind } from '@utility/component'
import * as userAction from '../../../redux/action/UserAction';
import { notUndefinedAndNull, undefinedOrNull } from '../../../component/utils/Validation'
import Loader from '../../../component/Loader';
import { Alert } from 'react-native'
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import tabstyles from '../Booking/styles'
import decode from 'jwt-decode'
export default function SignIn(props) {

   let dispatch = useDispatch();
   let store = useSelector(connectToStore, shallowEqual);

   let username = useInput('Username','none', 'default','Please enter username')
   let password = useInput('Password','password', 'default','Please enter password')
   let [loginType,setLoginType] = useState('PASSWORD') 
   let [tabSelected,setTabSelected] = useState('Password')
   const [count, setCount] = useState(0);
    const countDown = 120;


     useEffect(() => {
      getUserData()
      onRadioSelect(1,'PASSWORD')
     },[])

     useEffect(() => {
      if (!count) return;
      const intervalId = setInterval(() => {
          setCount(count - 1);
      }, 1000);
      return () => clearInterval(intervalId);
  }, [count]);





    useEffect(() => {
      if(notUndefinedAndNull(store.signInError)){
        Alert.alert(store.signInError)
      }
   },[store.signInError])

   useEffect(() => {
    if(notUndefinedAndNull(store.signIn)){
      let { signIn } = store;
       if(!undefinedOrNull(signIn.id)){
         setUser(signIn)
         navigate('PublicHome')
       }
     }
   },[store.signIn])

   async function getUserData(){
    let user = await getUser();
    const {exp} = decode(user.accessToken)
    if(Date.now() >= exp*1000)
    {
       console.log("....................................token............................")     
        console.log("true")
    }
     if(notUndefinedAndNull(user)){
      dispatch(userAction.getdata(user.id))
      navigate('PublicHome')
     }
  }

  function onRadioSelect(index,value){
    setLoginType(value)
  }
  function format() {
    let seconds = count % 60;
    let minutes = Math.floor(count / 60);
    minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
    seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
    return minutes + ':' + seconds;
}


    function onSignIn(){
      let valid = username.valid && password.valid ;
      if(!valid){
        Alert.alert('Plaese fill all the details')
      }
      else{
        dispatch(userAction.resetActions())
        
          let request = {
             "username" : username.value,
             "password": password.value
          }
          dispatch(userAction.login(request))
      }
      
   }


   function renderMobileView(){
     if(tabSelected === 'Mobile'){
      return(
        <View>
           <Text style={styles.formText}>{__('MOBILE NO.')}</Text>
               <View style={styles.formRow}>
                 <TextInput
                   placeholder='Mobile number'
                   
                   placeholderTextColor='rgba(211, 211, 217, 1)'
                   style={styles.formInput}
                 />
                 <Icon name='mobile' type='Foundation' style={[theme.huge, theme.smoke]} />
               </View>

               <Text style={styles.formText}>{__('OTP NUMBER')}</Text>
               <View style={styles.formRow}>
                 <TextInput
                   placeholder='Otp Number'
                   
                   placeholderTextColor='rgba(211, 211, 217, 1)'
                   style={styles.formInput}
                 />
                 <Icon name='mobile' type='Foundation' style={[theme.huge, theme.smoke]} />
               </View>

               <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center',marginBottom:5}}>
                {count !== 0 && ( <Text style={styles.formText}>Expires in {format()} mins</Text> )}
               </View>
               <TouchableOpacity onPress={() => { navigate('PublicForgotPassword') }}>
                <Text style={styles.forgotText}>{__('Forgot your password?')}</Text>
              </TouchableOpacity>
               <TouchableOpacity style={styles.loginBtn} onPress={() => setCount(countDown)}>
                <Text style={styles.loginBtnText}>{__('GET OTP')}</Text>
                <Icon name='arrowright' type='AntDesign' style={[theme.huge, theme.light]} />
              </TouchableOpacity>
        </View>
      )
     }
     
   }

  
    return <Container>
      <Loader show={store.showPageLoader}/>
      <StatusBar backgroundColor='rgba(51, 50, 85, 1)' barStyle='light-content' />
      <View style={styles.bgCover} />
      <View style={styles.bgMainLayout} />
      <View style={styles.bgLayout}>
        <TouchableOpacity style={styles.actBarBtn} onPress={() => { navigate('PublicIntro') }}>
          <Icon name='arrowleft' type='AntDesign' style={[theme.huge, theme.light]} />
        </TouchableOpacity>
        <Content contentContainerStyle={styles.layoutDf}>
          <View style={styles.signInForm}>
            <Text style={styles.signInTitle}>{__('Login with')}</Text>

            <View style={tabstyles.tabInfo}>
              <TouchableOpacity style={tabSelected === 'Password' ? tabstyles.tabActive : tabstyles.tab} onPress={() => setTabSelected('Password')}>
                <Text style={tabSelected === 'Password' ? tabstyles.tabTextActive : tabstyles.tabText}>{__('PASSWORD')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={tabSelected === 'Mobile' ? tabstyles.tabActive : tabstyles.tab} onPress={() => setTabSelected('Mobile')}>
                <Text style={tabSelected === 'Mobile' ? tabstyles.tabTextActive : tabstyles.tabText}>{__('OTP')}</Text>
              </TouchableOpacity>
            </View>
        
            <View style={{marginTop:30}}>
             {tabSelected === 'Password' && ( <View>
              <Text style={styles.formText}>{__('USERNAME')}</Text>
              <View style={styles.formRow}>
                <TextInput
                  placeholder='Username'
                  {...username}
                  placeholderTextColor='rgba(211, 211, 217, 1)'
                  style={styles.formInput}
                />
                <Icon name='mail' type='Foundation' style={[theme.huge, theme.smoke]} />
              </View>
              <Text style={styles.formText}>{__('PASSWORD')}</Text>
              <View style={styles.formRow}>
                <TextInput
                  placeholder='* * * * * * * * * *'
                  secureTextEntry={true}
                  {...password}
                  placeholderTextColor='rgba(211, 211, 217, 1)'
                  style={styles.formInput}
                />
                <Icon name='lock' type='FontAwesome' style={[theme.huge, theme.smoke]} />
              </View>
              <TouchableOpacity onPress={() => { navigate('PublicForgotPassword') }}>
                <Text style={styles.forgotText}>{__('Forgot your password?')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.loginBtn} onPress={() => onSignIn()}>
                <Text style={styles.loginBtnText}>{__('LOGIN')}</Text>
                <Icon name='arrowright' type='AntDesign' style={[theme.huge, theme.light]} />
              </TouchableOpacity>
              </View> )}
              {renderMobileView()}
              <View style={styles.createAccountInfo}>
                <Text style={styles.customerText}>{__('New Customer?')}</Text>
                <TouchableOpacity onPress={() => { navigate('PublicCreateAccount') }}>
                  <Text style={styles.createBtnText}>{__('Create Account')}</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
          <Image source={require('@asset/images/new_car_img.jpeg')} style={styles.bgImg} />

        </Content>

      </View>
    </Container>
  
}

function connectToStore(store){
  return{
    showPageLoader: store.user.showPageLoader,
    signInError: store.user.signInError,
    signIn: store.user.signIn
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