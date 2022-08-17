import React, { Fragment, useState, useEffect } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { ListItem, Overlay } from 'react-native-elements';
import SearchBar from './SearchBar';
import { empty, notUndefinedAndNull, undefinedOrZero } from './utils/Validation';
import QInput from './QInput';
import Popup from './Popup';
import { FlatList } from 'react-native-gesture-handler';
import {greyColor} from '../constants/Colors';
import _ from 'lodash';
import QText from './QText';

var height = Dimensions.get('window').height;

export default function Select(props) {

    let [items, setItems] = useState([]);
    let [show, setShow] = useState(false);
    let [searchFilter, setSearchFilter] = useState('');

    useEffect(()=>{
      setItems(props.items);
    },[])
    
    useEffect(()=>{
      setItems(props.items);
    },[props.items])

    useEffect(()=>{
      setItems(props.items);
    },[props.items])

    useEffect(()=>{
      if(!empty(searchFilter) && !undefinedOrZero(props.items)){
        let list = _.filter(props.items, (item) => {
          if(empty(props.keyName)){
            return String(item).toUpperCase().includes(String(searchFilter).toUpperCase())
          }else{
            return String(item[props.keyName]).toUpperCase().includes(String(searchFilter).toUpperCase())
          }
        });
        setItems(list);

      }else{
        setItems(props.items)
      }

    },[searchFilter])

    function renderBody(){
      return(
        <Fragment>
          <SearchBar 
            placeholder='Search'
            value={searchFilter} 
            onChangeText={(text)=>setSearchFilter(text)}
            autoCorrect={false}
            autoFocus={false}/>
        
            <FlatList
              data={items}
              keyExtractor={result => result[props.keyName]}
              keyboardShouldPersistTaps="always"
              renderItem= {({ item, index }) =>{
              return(
                  <TouchableOpacity key={index} onPress={() => {
                      props.onSelectItem(item,index)
                      setShow(false)
                    }}>
                      <View>
                        <Text 
                          style={(index % 2 == 0) ? styles.oddTextRow: styles.evenTextRow}
                        >{!empty(props.keyName) ? item[props.keyName]: item}
                        </Text>
                      </View>
                        
                  </TouchableOpacity>
                );
              }
            }
          />           
        </Fragment>
      )
    }
    
    return(
      
      <Fragment>
          <TouchableOpacity onPress={()=>setShow(true)}> 
              <QInput 
                disabled={true} 
                pointerEvents="none"
                value={props.value} 
                placeholder={props.placeholder} 
                label={props.label} 
                keyboardType={props.keyboardType}
                errorMessage={props.errorMessage}
                />
            
          </TouchableOpacity>
            <Fragment>
              <Popup onlyBody={true}  show={show} closePopup={()=> setShow(false)}>
              {renderBody()}
              </Popup>
            </Fragment>
      </Fragment>
    )
      
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        height:height,
        marginTop:-100
    },

    oddTextRow: {
        padding: 10,
        fontSize: 16
    },
    evenTextRow:{
      padding: 10,
      fontSize: 16,
      backgroundColor: "#f5f5f5"
      
    }
})