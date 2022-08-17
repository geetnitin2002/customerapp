import React from "react";
import { StyleSheet, View } from "react-native";
//import {Icon} from 'react-native-vector-icons';
//import Svg, {G, Path } from "react-native-svg";
import QInput from './QInput';
import { Dimensions } from "react-native";
import Colors from '../constants/Colors'
import { notUndefinedAndNull } from "./utils/Validation";
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
import { COLOR, FAMILY, SIZE } from '@theme/typography'

export default function SearchBar(props) {
  return (
      <QInput
        onChange={props.onChange}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        autoFocus={props.autoFocus}
        inputTextStyle={styles.searchText}
        onEndEditing={props.onSearch}
        hasIcon={true}
        iconPosition='left'
        placeholder={notUndefinedAndNull(props.placeholder) ? props.placeholder : "Search"}
        placeholderTextColor={Colors.greyColor}
        inputContainerStyle={notUndefinedAndNull(props.inputContainerStyle) ?props.inputContainerStyle : styles.searchContainer}
      />
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    height: 50,
    opacity: 1,
    flexDirection: 'row',
    borderRadius: 30,
    borderWidth: 1,
    alignItems: 'center',
    borderBottomWidth: 1
  },
  searchText: {
    paddingLeft: 10,
    bottom: 0,
    height: 20,
    opacity: 1,
    fontSize: 15,
    fontFamily: FAMILY.regular,
    lineHeight: 18,
    letterSpacing: 0.12,
    borderBottomWidth: 0
  }
});