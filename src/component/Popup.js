import React, { Fragment } from 'react';
import {Modal, StyleSheet, View,Animated,Dimensions,Image ,Platform} from 'react-native';
import QText from './QText';
import Colors from '../constants/Colors';
import { Icon } from 'native-base'
import { notUndefinedAndNull, undefinedOrNull } from './utils/Validation';
import {Overlay} from 'react-native-elements'
import theme from '@theme/styles'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
import SuccessImage from '../../assets/images/success.png';



export default function Popup(props){ 


  function getImage(){

    if(notUndefinedAndNull(props.success) && props.success){
        return (
          <Image source={require('../../assets/Logo/logo.jpg')} style={{width:100,height:100}}/>
        )
      
    }else{
        return null;
    }

  }

  function returnOverlay(){
    if(props.show){
      if(Platform.OS==="android"){
        return(
          <Fragment>
                <Overlay 
                    fullScreen={false}
                    isVisible={props.show}
                    overlayBackgroundColor='rgba(44,53,126,.69)'
                    windowBackgroundColor='rgba(0,0,0,0)'>
                </Overlay>
                <View>{modalView()}</View>
        </Fragment>
        )
      }else{
        return (
            <Overlay 
                fullScreen={false}
                isVisible={props.show}
                overlayBackgroundColor='rgba(44,53,126,.69)'
                windowBackgroundColor='rgba(0,0,0,0)'>
              <View>{modalView()}</View>
            </Overlay>
        );
      }
    }
  }

  


  function modalView(){
    return(
      <Animated.View
      style={[StyleSheet.absoluteFill, popupStyles.modalWrapper, props.show?popupStyles.modalWrapperActive:null]}
      role="button"
      // onPress={props.onClose}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={notUndefinedAndNull(props.showLoader) ? props.showLoader : true}
        // Loader={true}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
        }}>

          <View style={popupStyles.popupContainer}>
            <View style={popupStyles.headerView}>
                <QText fontWeight='bold' style={popupStyles.headerTitle}> {props.header}</QText>
                <Icon name='close' type='AntDesign' style={[theme.huge, theme.smokeDark]} onPress={props.closePopup}/>
            </View>
              {!props.onlyBody && 
              <Fragment>
                <View style ={popupStyles.imageView}>
                  {getImage()}
                </View>
                <QText style={popupStyles.textStyle}  fontWeight='bold' > {props.title}</QText>
                
              </Fragment>
              }
              {props.children}
          </View>

      </Modal>
    </Animated.View>
    )
  }
  if (!props.show) {
      return null;
  }else {
    return (    
      <View>
        {returnOverlay()}        
      </View>

    )
  }
}

const popupStyles = StyleSheet.create({
   
    popupContainer: {
      flex: 1,
      bottom: 0,
      left: 0,
      right: 0,
      marginTop: 380,
      backgroundColor: 'white',
      borderWidth:1,
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      borderColor:Colors.blackColor,
      padding:10
    },
    modalWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: width,
        height: height,
        zIndex: 1500,
        alignItems: 'flex-end',
        display: 'flex',
        opacity: 0
    },
    modalWrapperActive: {
        opacity: 1
    },
    imageSize:{
        width:50,
        height:50
     },

     image:{
      fontSize : 35,
      alignSelf:'flex-end',
      marginRight: 10,
      marginTop: 20
   },
    imageView:{
      justifyContent:"center",
      alignContent:"center",
      alignItems:'center',
      marginBottom:30,
      marginTop:40
    },
    textStyle:{
      paddingHorizontal: 20,
      justifyContent: 'center',
      textAlign: 'center'
    },
    buttonStyle:{
      width:150
    },
    headerView:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    headerTitle:{
      marginTop:20,
      marginLeft:18,
      fontSize:21,
    },
    buttonView: {
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 30,
      position: "absolute",
      bottom: 0,
      alignSelf: "center"
  },
  })