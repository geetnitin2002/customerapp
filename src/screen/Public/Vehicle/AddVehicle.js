import React, { useEffect, useState } from 'react'
import { TouchableOpacity, Image, ScrollView, TextInput, FlatList, Alert , StyleSheet} from 'react-native'
import { Button, Container, Content, Icon, Row, Text, View } from 'native-base'
import { COLOR, FAMILY, SIZE } from '@theme/typography'
import AsyncStorage from '@react-native-community/async-storage'
import { } from 'rn-placeholder'
import Modal from 'react-native-modalbox'
import DropDownPicker from 'react-native-dropdown-picker'
import DateTimePicker from '@react-native-community/datetimepicker'

import theme from '@theme/styles'
import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'
import request from '@utility/request'
import { bind } from '@utility/component'
import Session from '../../services/Session'
import Header from '@component/Header'
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import Select from '../../../component/Select'
import { empty, notUndefinedAndNull, undefinedOrNull, undefinedOrZero } from "../../../component/utils/Validation";
import { ColorPropType } from 'react-native'
import SuccessPopup from '../../../component/Popup';
import { getUser , getCategory, clearCategory} from '../../services/Session'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import * as bookingAction from '../../../redux/action/BookingAction';
import styles from '../../Public/Package/styles'
import bookingStyle from '../../Public/Booking/styles';

export default function AddVehicle(props){

    let dispatch = useDispatch();
    let store = useSelector(connectToStore, shallowEqual);

    let categorySelect = useSelect('Category', 'name', 'id',subCategory);
    let subCategorySelect = useSelect('Sub Category', 'name', 'id','');
    let modelsSelect = useSelect('Models', 'name', 'id','');
    let [category,setCategory] = useState([])
    let [subCategory,setSubCategory] = useState([])
    let [models,setModels] = useState([])
    const [vehicleName,setVehicleName] = useState('')
    const [vehicleType ,setVehicleType] = useState('')
    const [vehicleDesc,setVehicleDesc] = useState('')
    const [vehicleManufacture,setVehicleManufacture] = useState('')
    const [vehicleOrigin,setVehicleOrigin] = useState('')
    const [vehicleSerialNumber,setVehicleSerialNumber] = useState('')
    const [vehiclePurchaseDate,setVehiclePurchaseDate] = useState('')
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    useEffect(()=>{
        if(notUndefinedAndNull(categorySelect.id)){
            let data = store.getAllCategory.response.filter(item => item.id === categorySelect.id)
            setSubCategory(data[0].sub_categories)
        }
    },[categorySelect.id]);
    
    useEffect(()=>{
      if(notUndefinedAndNull(subCategorySelect.id)){
          let data = subCategory.filter(item => item.id === subCategorySelect.id)
          setModels(data[0].models)
      }
    },[subCategorySelect.id]);
    
    useEffect(()=>{
      if(notUndefinedAndNull(modelsSelect.id)){
         
         
      }
    },[modelsSelect.id]);

    function onShow(currentMode){
    
        setMode(currentMode);
      };
    
    function showDate() {
      setShow(true);
        onShow('date');
    };


    function onChange(event, selectedDate){
        const currentDate = selectedDate || date;
       
        setDate(currentDate);
        setShow(false);
      };

    function renderCategorySelect(){
        let {getAllCategory} = store;
        if(!undefinedOrZero(getAllCategory.response)){
          return(
            <View style={{marginLeft:10,marginRight:10}}>
              <Select 
                items={getAllCategory.response}
                
                 {...categorySelect}  />
             </View>
          )
        }
      }

 
    return(
        
        <Container>
          <Header navLeftType='back' statusBarType='dark' />
    
          <Content contentContainerStyle={theme.layoutDf}>
            <View style={styles.packageContainer}>
              <View style={styles.packageContent}>
            {renderCategorySelect()}
            {notUndefinedAndNull(categorySelect.id)  && <View style={{marginLeft:10,marginRight:10,marginTop:-30}}>
             <Select 
                items={subCategory}
                {...subCategorySelect}  />
              </View> }
            {notUndefinedAndNull(subCategorySelect.id)  &&
            <View style={{marginLeft:10,marginRight:10,marginTop:-30}}>
                <Select 
                    items={models}
                    {...modelsSelect}  />
            </View>}
            <Text style={{marginLeft:20,marginRight:10}}>Vehicle Name</Text>
                <TextInput
                    placeholder='TAS 2 MINI'
                    placeholderTextColor='#8e8e8e'
                    value={vehicleName}
                    autoFocus={true}
                    style={{marginLeft:20,marginTop:10,padding:0}}
                    onChange={(value) => setVehicleName(value)}
                />
                <View style={{flexDirection:'row',margin:15,backgroundColor:"#000",height:0.5}}></View>
                <Text style={{marginLeft:20,marginRight:10}}>Vehicle Type</Text>
                <TextInput
                    placeholder='Kinetic'
                    placeholderTextColor='#8e8e8e'
                    value={vehicleType}
                    style={{marginLeft:20,marginTop:10,padding:0}}
                    onChange={(value) => setVehicleType(value)}
                />
                <View style={{flexDirection:'row',margin:15,backgroundColor:"#000",height:0.5}}></View>
                <Text style={{marginLeft:20,marginRight:10}}>Vehicle Description</Text>
                <TextInput
                    placeholder='Description'
                    placeholderTextColor='#8e8e8e'
                    value={vehicleType}
                    style={{marginLeft:20,marginTop:10,padding:0}}
                    onChange={(value) => setVehicleType(value)}
                />
                <View style={{flexDirection:'row',margin:15,backgroundColor:"#000",height:0.5}}></View>
                <Text style={{marginLeft:20,Manufacturer:10}}>Manufacturer</Text>
                <TextInput
                    placeholder='Manufacturer'
                    placeholderTextColor='#8e8e8e'
                    value={vehicleType}
                    style={{marginLeft:20,marginTop:10,padding:0}}
                    onChange={(value) => setVehicleType(value)}
                />
                <View style={{flexDirection:'row',margin:15,backgroundColor:"#000",height:0.5}}></View>
                <Text style={{marginLeft:20,Manufacturer:10}}>Serial Number</Text>
                <TextInput
                    placeholder='Serial Number'
                    placeholderTextColor='#8e8e8e'
                    value={vehicleType}
                    style={{marginLeft:20,marginTop:10,padding:0}}
                    onChange={(value) => setVehicleType(value)}
                />
                <View style={{flexDirection:'row',margin:15,backgroundColor:"#000",height:0.5}}></View>
                <Text style={bookingStyle.packageTitle}>{__('Select Your Date')}</Text>
        <Text style={bookingStyle.dateLabel}>{__('Date')}</Text>
        <View style={bookingStyle.dateInfo}>
          <TextInput
            placeholder='Select Date'
            placeholderTextColor='#8e8e8e'
            value={date.toDateString()}
            style={bookingStyle.formInput}
          />
          <TouchableOpacity style={bookingStyle.timeIcon} onPress={() => showDate()}>
            <Icon name='calendar' type='AntDesign' style={[theme.huge, theme.smokeDark]} />
          </TouchableOpacity>
        </View>

        {/* <Text style={{alignSelf:'flex-end',flex:1,flexDirection:'row',marginRight:20,color:COLOR.violet}} onPress={()=> setShow(false)}>Done</Text>
    */}
        
    {show && ( 
        <DateTimePicker
          value={date}
          is24Hour={true}
          confirmBtnText='Done'
           
          display="spinner"
          onChange={onChange}
        />
      )}
      
          </View>
            </View>
          </Content>
     
        </Container>
    )
  }

  function useSelect(label, valueKey, idKey,subCategory){

    let [value, setValue] = useState('');
    let [id, setId] = useState(null);
    let [data,setData] = useState(null);
  
    function handleSelectItem(item){
  
        if(notUndefinedAndNull(item)){
            let valueId = item[idKey];
            setValue(item[valueKey]) 
            setId(valueId)
            setData(item) 
            
        }else{
            setValue('');
            setId(null);
            setData(null) 
  
        }
    }
  
    function setDefaultSelect(id,value,item){
      setValue(value) 
      setId(id)
      //console.log('item...',item)
    }
  
    return{
        label,
        keyName: valueKey,
        value,
        id,
        data,
        onSelectItem:(item) => {handleSelectItem(item)},
        setDefaultSelect
    }
  }
  

    function connectToStore(store){
        return{
        showPageLoader: store.booking.showPageLoader,
        bookingAppointment: store.booking.bookingAppointment,
        bookingAppointmentError: store.booking.bookingAppointmentError,
        getAllCategory: store.category.getAllCategory,
        getAllSlots: store.booking.getAllSlots
        }
    }
  