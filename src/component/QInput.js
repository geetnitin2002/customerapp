import React from "react"
import { StyleSheet, View } from "react-native"
import { Input } from 'react-native-elements'
import Colors from '../constants/Colors'
import { COLOR, FAMILY, SIZE } from '@theme/typography'
/**
 * Input Component uses all the props available to TextInput of React native and Input of react-native-element library
 * Details here - https://react-native-elements.github.io/react-native-elements/docs/input.html
 * If you want to show lable, pass label props.
 * If you want to show error, pass error props.
 * Label, input, error has a default style defined here, but if required they can be overwritten by passing their styles as props - props.inputBoxStyle, props.labelStyle, props.errorStyle and props.inputTextStyle
 * set 'autoFocus' props for an autofocus input
 * set 'hasIcon' props BEFORE using an icon in the input. You can then use your own icon component or one from the library (fontaAwesome/Material etc.) provided by react-native-elements. You also NEED to specify 'iconPosition' props whose values can be 'left' or 'right' and depending on it there are two ways to use an icon in input, either use 'leftIcon' props or 'rightIcon' props.
 * For Possible values of 'dataDetectorTypes', 'keyboardType', 'textContentType' props; visit here- https://facebook.github.io/react-native/docs/textinput.html
 */

export default function QInput(props) {

  return(
    <View style={[styles.inputBox, props.inputBoxStyle]} pointerEvents={props.pointerEvents}>
      <Input
        {...props}
        onChangeText={props.onChangeText}
        onChange={props.onChange}
        value={props.value}
        label={props.label}
        labelStyle={[styles.inputLabel, props.labelStyle]}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        textContentType={props.textContentType}
        keyboardType={props.keyboardType}
        errorMessage={props.errorMessage}
        errorStyle={[styles.errorStyle, props.errorStyle]}
        inputStyle={[styles.inputText, props.inputTextStyle]}
        inputContainerStyle={[styles.inputContainerStyle, props.inputContainerStyle]}
        autoFocus={props.autoFocus}
        leftIcon = {(props.hasIcon && props.iconPosition==='left') ? props.leftIcon : null}
        rightIcon = {(props.hasIcon && props.iconPosition==='right') ? props.rightIcon : null}
        leftIconContainerStyle= {(props.hasIcon && props.iconPosition==='left') ? styles.leftIconContainerStyle : null}
        rightIconContainerStyle= {(props.hasIcon && props.iconPosition==='right') ? styles.rightIconContainerStyle : null}
        disabled={props.disabled}
        disabledInputStyle={props.disabledInputStyle}
        multiline={props.multiline}
        editable={props.editable}
        dataDetectorTypes={props.dataDetectorTypes}
        maxLength={props.maxLength}
        numberOfLines={props.multiline ? props.numberOfLines : null}
        min={props.min}
        max={props.max}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputBox: {
    // flex: 1,
    marginVertical: 10,
    marginBottom: 30
  },
  inputLabel: {
    flex: 1,
    fontSize: 14,
    fontFamily: FAMILY.regular,
    fontWeight: 'normal',
    color: Colors.greyColor
  },
  inputContainerStyle: {
    borderBottomWidth: 0
  },
  inputText: {
    minHeight: 40,
    height: 'auto',
    lineHeight: 20,
    fontFamily: FAMILY.regular,
    fontSize: 16,
    color: Colors.blackColor,
    borderBottomColor: Colors.greyColor,
    borderBottomWidth: 1,
    textAlign: 'left'
  },
  errorStyle: {
    fontFamily: FAMILY.regular,
    color: Colors.errorColor
  },
  disabledInputStyle: {
    
  },
  leftIconContainerStyle: {
    // top: 10,
    left: -10,
    width: 20
  }
})