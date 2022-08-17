import React, { useEffect, useState } from 'react'
import { TouchableOpacity, Image, ScrollView, TextInput, FlatList, Alert , StyleSheet} from 'react-native'
import { Button, Container, Content, Icon, Row, Text, View } from 'native-base'
import { COLOR, FAMILY, SIZE } from '@theme/typography'
import AsyncStorage from '@react-native-community/async-storage'
import { } from 'rn-placeholder'
import Modal from 'react-native-modalbox'
import DropDownPicker from 'react-native-dropdown-picker'
import DateTimePicker from '@react-native-community/datetimepicker'
import styles from './styles'
import theme from '@theme/styles'
import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'
import request from '@utility/request'
import { bind } from '@utility/component'
import Session from './Session'
import sessionList from './data/session'
import Header from '@component/Header'
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import Select from '../../../component/Select'
import { empty, notUndefinedAndNull, undefinedOrNull, undefinedOrZero } from "../../../component/utils/Validation";
import { ColorPropType } from 'react-native'
import SuccessPopup from '../../../component/Popup';
import { getUser , getCategory, clearCategory} from '../../services/Session'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import * as bookingAction from '../../../redux/action/BookingAction';
import * as categoryAction from '../../../redux/action/CategoryAction';
import tabstyles from '../Booking/styles'

export default function AppointmentNew(props){

  const [timingList,setTimingList] = useState([])
  const [pickerValue,setPickerValue] = useState([])
  const [time,setTime] = useState('')
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [timingArray,setTimingArray] = useState([])
  const [show, setShow] = useState(false);
  const [timeSizeValue, setTimeSizeValue] = useState(0);
  const [backgroundColor,setBackgroundColor] = useState(COLOR.smokeGrey)
  const [textColor,setTextColor] = useState(COLOR.violet)
  let [wishlistItem,setWishlistItem] = useState([])
  let [category,setCategory] = useState([])
  let [subCategory,setSubCategory] = useState([])
  let [models,setModels] = useState([])
  let [slot,setSlot] = useState([])
  let [cat,setCat] = useState('');
  let [subCat,setSubCat] = useState('');

  let categorySelect = useSelect('Category', 'name', 'id',subCategory);
  let subCategorySelect = useSelect('Sub Category', 'name', 'id','');
  let modelsSelect = useSelect('Models', 'name', 'id','');
  let slotSelect = useSelect('Slots', 'name', 'id','');
  let [mobileNumber,setMobileNumber] = useState('')
  let [comment,setComment] = useState('')
  let [showPopup,setShowPopup] = useState(false)
  let [user,setUser] = useState('')
  let [radioValue,setRadioValue] = useState('')
  
  let dispatch = useDispatch();
  let store = useSelector(connectToStore, shallowEqual);

  let [slotTimeSelected,setSlotTimeSelected] = useState('')


  useEffect(() => {
     getCategoryData()

     let request = {
      
        "vehiclename":"Tas - 2 mini",
        "description":"tas mini ",
        "vehicletype":" Kinetic",
        "manufacturer":"old",
        "vehicle_image":"",
        "origin":"old",
        "serialno":"43455",
        "purchasedate":"2021-10-09",
        "remarks":"0",
        "model_id":"1",
        "customerid":"1010",
        "totalamount":"4000",
        "invoiceno":""

        
     }
     
     dispatch(bookingAction.addVehicle(request))
     dispatch(bookingAction.resetActions())

     return () =>{
        clearCategory()
     }
  },[])

  

  useEffect(() => {
     let {getAllSlots} = store;
     if(!undefinedOrZero(getAllSlots)){
        console.log("slots...",getAllSlots)
     }
  },[store.getAllSlots])

  async function getCategoryData(){
      let category = await getCategory();
      console.log(category)
      if(notUndefinedAndNull(category)){
        categorySelect.setDefaultSelect(category.categoryId,category.categoryName)
        subCategorySelect.setDefaultSelect(category.sub_category.id,category.sub_category.name)
        modelsSelect.setDefaultSelect(category.sub_category.model.id,category.sub_category.model.name)
        slotSelect.setDefaultSelect()
      }
  }

  useEffect(() => {
 
    setSlot([
      {
        "id":1,
        "name": "Slot 1"
      },
      {
        "id":2,
        "name": "Slot 2"
      },
      {
        "id":3,
        "name": "Slot 3"
      }
    ])
    
    setCategory([
      {
        "name":"Golf Cart",
        "id": 1,
        "image_url":"https://uwrewgr.gmajdbsjf",
        "sub_categories":[
          {
            "name":"Passengers",
            "id": 11,
            "image_url":"https://uwrewgr.gmajdbsjf",
            "category":1,
            "models":[
              {
                "name":"2- Seater",
                "image_url":"https://uwrewgr.gmajdbsjf",
                "id":101,
                "time": [
                  {
                    "timing": "10:00 am",
                    "status": true,
                    "service":true,
                    "bookingId": "20",
                    "serviceHrs": 3
                  },
                  {
                    "timing": "12:00 am",
                    "status": true,
                    "service":true,
                    "bookingId": "21",
                    "serviceHrs": 3
                  },
                  {
                    "timing": "03:00 pm",
                    "status": false,
                    "service":false,
                    "bookingId": "22",
                    "serviceHrs": 3
                  },
                  {
                    "timing": "04:00 pm",
                    "status": false,
                    "service":false,
                    "bookingId": "23",
                    "serviceHrs": 3
                  }
                ]
              },
              {
                "name":"4- Seater",
                "id":102,
                "time": [
                  {
                    "timing": "10:00 am",
                    "status": true,
                    "service":true,
                    "bookingId": "20",
                    "serviceHrs": 3
                  },
                  {
                    "timing": "12:00 am",
                    "status": true,
                    "service":true,
                    "bookingId": "21",
                    "serviceHrs": 3
                  },
                  {
                    "timing": "03:00 pm",
                    "status": false,
                    "service":false,
                    "bookingId": "22",
                    "serviceHrs": 3
                  },
                  {
                    "timing": "04:00 pm",
                    "status": false,
                    "service":false,
                    "bookingId": "23",
                    "serviceHrs": 3
                  }
                ]
              },
              {
                "name":"6- Seater",
                "id":103,
                "time": [
                  {
                    "timing": "10:00 am",
                    "status": true,
                    "service":true,
                    "bookingId": "20",
                    "serviceHrs": 3
                  },
                  {
                    "timing": "12:00 am",
                    "status": true,
                    "service":true,
                    "bookingId": "21",
                    "serviceHrs": 3
                  },
                  {
                    "timing": "03:00 pm",
                    "status": false,
                    "service":false,
                    "bookingId": "22",
                    "serviceHrs": 3
                  },
                  {
                    "timing": "04:00 pm",
                    "status": false,
                    "service":false,
                    "bookingId": "23",
                    "serviceHrs": 3
                  }
                ]
              },
              {
                "name":"8- Seater",
                "id":104,
                "time": [
                  {
                    "timing": "10:00 am",
                    "status": true,
                    "service":true,
                    "bookingId": "20",
                    "serviceHrs": 3
                  },
                  {
                    "timing": "12:00 am",
                    "status": true,
                    "service":true,
                    "bookingId": "21",
                    "serviceHrs": 3
                  },
                  {
                    "timing": "03:00 pm",
                    "status": false,
                    "service":false,
                    "bookingId": "22",
                    "serviceHrs": 3
                  },
                  {
                    "timing": "04:00 pm",
                    "status": false,
                    "service":false,
                    "bookingId": "23",
                    "serviceHrs": 3
                  }
                ]
              },
            ]
          },
          {
            "name":"Cargo",
            "id": 12,
            "category":1,
            "models":[
              {
                "name":"Cargo Open",
                "id":105,
                "time": [
                  {
                    "timing": "10:00 am",
                    "status": false,
                    "service":false,
                    "bookingId": "24",
                    "serviceHrs": 2
                  },
                  {
                    "timing": "01:00 pm",
                    "status": false,
                    "service":false,
                    "bookingId": "25",
                    "serviceHrs": 2
                  }
                ]
              },
              {
                "name":"Cargo Box",
                "id":106,
                "time": [
                  {
                    "timing": "10:00 am",
                    "status": false,
                    "service":false,
                    "bookingId": "24",
                    "serviceHrs": 2
                  },
                  {
                    "timing": "01:00 pm",
                    "status": false,
                    "service":false,
                    "bookingId": "25",
                    "serviceHrs": 2
                  }
                ]
              },
              {
                "name":"Cargo Large",
                "id":107,
                "time": [
                  {
                    "timing": "10:00 am",
                    "status": false,
                    "service":false,
                    "bookingId": "24",
                    "serviceHrs": 2
                  },
                  {
                    "timing": "01:00 pm",
                    "status": false,
                    "service":false,
                    "bookingId": "25",
                    "serviceHrs": 2
                  }
                ]
              },
            ]
          }
        ]
      },
      {
        "name":"Sight Seeing E-Bus",
        "id": 2,
        "sub_categories":[
          {
            "name":"E-Bus",
            "id": 21,
            "category":2,
            "models":[
              {
                "name":"8- Seater E-Bus",
                "id":108,
                "time": [
                  {
                    "timing": "10:00 am",
                    "status":true,
                    "service":true,
                    "bookingId": "26",
                    "serviceHrs": 4
                  },
                  {
                    "timing": "12:00 pm",
                    "status":false,
                    "service":false,
                    "bookingId": "27",
                    "serviceHrs": 4
                  },
                  {
                    "timing": "01:00 pm",
                    "status":false,
                    "service":false,
                    "bookingId": "28",
                    "serviceHrs": 4
                  },
                  {
                    "timing": "07:00 pm",
                    "status":false,
                    "service":false,
                    "bookingId": "29",
                    "serviceHrs": 4
                  },
                  {
                    "timing": "08:00 pm",
                    "status":false,
                    "service":false,
                    "bookingId": "30",
                    "serviceHrs": 4
                  }
                ]
              },
              {
                "name":"11- Seater E-Bus",
                "id":109,
                "time": [
                  {
                    "timing": "10:00 am",
                    "status":true,
                    "service":true,
                    "bookingId": "26",
                    "serviceHrs": 4
                  },
                  {
                    "timing": "12:00 pm",
                    "status":false,
                    "service":false,
                    "bookingId": "27",
                    "serviceHrs": 4
                  },
                  {
                    "timing": "01:00 pm",
                    "status":false,
                    "service":false,
                    "bookingId": "28",
                    "serviceHrs": 4
                  },
                  {
                    "timing": "07:00 pm",
                    "status":false,
                    "service":false,
                    "bookingId": "29",
                    "serviceHrs": 4
                  },
                  {
                    "timing": "08:00 pm",
                    "status":false,
                    "service":false,
                    "bookingId": "30",
                    "serviceHrs": 4
                  }
                ]
              },
              {
                "name":"14- Seater E-Bus",
                "id":110,
                "time": [
                  {
                    "timing": "10:00 am",
                    "status":true,
                    "service":true,
                    "bookingId": "26",
                    "serviceHrs": 4
                  },
                  {
                    "timing": "12:00 pm",
                    "status":false,
                    "service":false,
                    "bookingId": "27",
                    "serviceHrs": 4
                  },
                  {
                    "timing": "01:00 pm",
                    "status":false,
                    "service":false,
                    "bookingId": "28",
                    "serviceHrs": 4
                  },
                  {
                    "timing": "07:00 pm",
                    "status":false,
                    "service":false,
                    "bookingId": "29",
                    "serviceHrs": 4
                  },
                  {
                    "timing": "08:00 pm",
                    "status":false,
                    "service":false,
                    "bookingId": "30",
                    "serviceHrs": 4
                  }
                ]
              },
              {
                "name":"23- Seater E-Bus",
                "id":111,
                "time": [
                  {
                    "timing": "10:00 am",
                    "status":true,
                    "service":true,
                    "bookingId": "26",
                    "serviceHrs": 4
                  },
                  {
                    "timing": "12:00 pm",
                    "status":false,
                    "service":false,
                    "bookingId": "27",
                    "serviceHrs": 4
                  },
                  {
                    "timing": "01:00 pm",
                    "status":false,
                    "service":false,
                    "bookingId": "28",
                    "serviceHrs": 4
                  },
                  {
                    "timing": "07:00 pm",
                    "status":false,
                    "service":false,
                    "bookingId": "29",
                    "serviceHrs": 4
                  },
                  {
                    "timing": "08:00 pm",
                    "status":false,
                    "service":false,
                    "bookingId": "30",
                    "serviceHrs": 4
                  }
                ]
              },
            ]
          },
          {
            "name":"Closed Bus",
            "id": 22,
            "category":2,
            "models":[
              {
                "name":"14- Seater Closed-Bus",
                "id":112,
                "time": [
                  {
                    "timing": "10:00 am",
                    "status":true,
                    "service":true,
                    "bookingId": "26",
                    "serviceHrs": 4
                  },
                  {
                    "timing": "12:00 pm",
                    "status":false,
                    "service":false,
                    "bookingId": "27",
                    "serviceHrs": 4
                  },
                  {
                    "timing": "01:00 pm",
                    "status":false,
                    "service":false,
                    "bookingId": "28",
                    "serviceHrs": 4
                  },
                  {
                    "timing": "07:00 pm",
                    "status":false,
                    "service":false,
                    "bookingId": "29",
                    "serviceHrs": 4
                  },
                  {
                    "timing": "08:00 pm",
                    "status":false,
                    "service":false,
                    "bookingId": "30",
                    "serviceHrs": 4
                  }
                ]
              },
              {
                "name":"23- Seater Closed-Bus",
                "id":113,
                "time": [
                  {
                    "timing": "10:00 am",
                    "status":true,
                    "service":true,
                    "bookingId": "26",
                    "serviceHrs": 4
                  },
                  {
                    "timing": "12:00 pm",
                    "status":false,
                    "service":false,
                    "bookingId": "27",
                    "serviceHrs": 4
                  },
                  {
                    "timing": "01:00 pm",
                    "status":false,
                    "service":false,
                    "bookingId": "28",
                    "serviceHrs": 4
                  },
                  {
                    "timing": "07:00 pm",
                    "status":false,
                    "service":false,
                    "bookingId": "29",
                    "serviceHrs": 4
                  },
                  {
                    "timing": "08:00 pm",
                    "status":false,
                    "service":false,
                    "bookingId": "30",
                    "serviceHrs": 4
                  }
                ]
              },
            ]
          }
        ]
      },
      {
        "name":"Electric Two Wheeler",
        "id": 3,
        "sub_categories":[
          {
            "name":"Bat RE- loev",
            "id": 31,
            "category":3
          },
          {
            "name":"Bat RE- Two",
            "id": 32,
            "category":3
          }
        ]
      },
      {
        "name":"E-Cycles",
        "id": 4,
        "sub_categories":[
          {
            "name":"TGE-EBike",
            "id": 41,
            "category":4
          },
          {
            "name":"Batt RE – NewTron",
            "id": 42,
            "category":4
          },
          {
            "name":"Batt RE – Ebike",
            "id": 43,
            "category":4
          },
          {
            "name":"Batt RE – CROSS",
            "id": 44,
            "category":4
          },
          {
            "name":"Batt RE – Mantra",
            "id": 45,
            "category":4
          }
        ]
      },
      {
        "name":"3- Wheeler",
        "id": 5,
        "sub_categories":[
          {
            "name":"Passengers",
            "id": 51,
            "category":5
          },
          {
            "name":"Loaders",
            "id": 52,
            "category":5
          }
        ]
      }
    ]
    )
  

    setPickerValue([
      
      { label: 'Coupé', value: {
        "time": [
          {
            "timing": "10:00 am",
            "status": true,
            "service":true,
            "bookingId": "20",
            "serviceHrs": 3
          },
          {
            "timing": "12:00 am",
            "status": true,
            "service":true,
            "bookingId": "21",
            "serviceHrs": 3
          },
          {
            "timing": "03:00 pm",
            "status": false,
            "service":false,
            "bookingId": "22",
            "serviceHrs": 3
          },
          {
            "timing": "04:00 pm",
            "status": false,
            "service":false,
            "bookingId": "23",
            "serviceHrs": 3
          }
        ]
      } },
      { label: 'Crossover', value: {
        "time": [
          {
            "timing": "10:00 am",
            "status": false,
            "service":false,
            "bookingId": "24",
            "serviceHrs": 2
          },
          {
            "timing": "01:00 pm",
            "status": false,
            "service":false,
            "bookingId": "25",
            "serviceHrs": 2
          }
        ],
       
       } },
      { label: 'Convertible', value: {
        "time": [
          {
            "timing": "10:00 am",
            "status":true,
            "service":true,
            "bookingId": "26",
            "serviceHrs": 4
          },
          {
            "timing": "12:00 pm",
            "status":false,
            "service":false,
            "bookingId": "27",
            "serviceHrs": 4
          },
          {
            "timing": "01:00 pm",
            "status":false,
            "service":false,
            "bookingId": "28",
            "serviceHrs": 4
          },
          {
            "timing": "07:00 pm",
            "status":false,
            "service":false,
            "bookingId": "29",
            "serviceHrs": 4
          },
          {
            "timing": "08:00 pm",
            "status":false,
            "service":false,
            "bookingId": "30",
            "serviceHrs": 4
          }
        ]
      } }
  
    ])
    getUserData()
  },[])

  useEffect(() => {
    setTimeSizeValue(timingList.length)
  },[timingList.length])

  useEffect(()=>{
    if(notUndefinedAndNull(categorySelect.id)){
        //subCategorySelect.onSelectItem(null);
       // modelsSelect.onSelectItem(null);
        setTimingList([])
        let data = store.getAllCategory.response.filter(item => item.id === categorySelect.id)
        setSubCategory(data[0].sub_categories)
    }
},[categorySelect.id]);

useEffect(()=>{
  if(notUndefinedAndNull(subCategorySelect.id)){
    //  modelsSelect.onSelectItem(null);
      setTimingList([])
      let data = subCategory.filter(item => item.id === subCategorySelect.id)
      setModels(data[0].models)
  }
},[subCategorySelect.id]);

useEffect(()=>{
  if(notUndefinedAndNull(modelsSelect.id)){
      slotSelect.onSelectItem(null);
      console.log(modelsSelect.data)
      setTimingList([])
      setTimingArray([])
      let day = date.getDay();
      dispatch(bookingAction.getSlots(18,3))
      //setTimingList(modelsSelect.data.time)
  }
},[modelsSelect.id]);

  useEffect(() =>{
    if(notUndefinedAndNull(store.bookingAppointment)){
       console.log(store.bookingAppointment)
        setShowPopup(true)
    }
  },[store.bookingAppointment])

  useEffect(() =>{
    if(notUndefinedAndNull(store.bookingAppointmentError)){
       console.log(store.bookingAppointmentError)
    }
  },[store.bookingAppointmentError])

  async function getUserData(){
    let user = await getUser();
    console.log(user)
    setUser(user)
  }

  function onChange(event, selectedDate){
    const currentDate = selectedDate || date;
   
    setDate(currentDate);
    setShow(false)
  };

 function onShow(currentMode){
    
    setMode(currentMode);
  };

  function showDate() {
    setShow(true);
    onShow('date');
  };

   

   function onItemSelect(item){
     setTimingArray([])
     setTimingList(item.value.time)
   }

   function onButtonClick(time,i){
  
    let sum = Number(timeSizeValue) - Number(i+1);
    sum = sum + 1;
    let temp = []
    if(time.serviceHrs <= sum){
      let timeHrs = 0;
      if(i == 0){
         timeHrs = time.serviceHrs 
      }
      else{
        timeHrs = time.serviceHrs + 1;
      }
      for(let j = i; j < timeHrs ; j++){
        let value = timingList[j].timing;
        temp.push(value)
     }
    }
    else{
      Alert.alert('Service hour is greater')
    }
    
    for(let j = i; j < timingList.length ; j++){
       let value = timingList[j].timing;
       temp.push(value)
    }
    
  if(!timingArray.includes(time.timing)){
			setTimingArray([])
			setTimingArray(temp)
			}
			else{
			setTimingArray([])
			setTimingArray(temp)
			}
   }

   function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
 

    function onSubmit(){
      let bookingDate = formatDate(date)

      let request = 
          {
            "customerid": user.id,
            "userid":user.id,
            "guestmobile":"9963124595",
            "bookingdate":bookingDate,
            "bookingtime_from":"11:00:00",
            "bookingtime_to":"",
            "comments":"",
            "bookingstatus":1,
            "modelid":18,
            "modeldetails":"",
            "servicecharges":4000,
            "bookingtype":"NORMAL",
            "created_date":bookingDate,
            "updated_date":bookingDate,
            "created_by":1,
            "updated_by":1
            }
      console.log(request)
      dispatch(bookingAction.resetActions())
      dispatch(bookingAction.bookAppointment(request))

      
   }



   function renderNewButton(item,index){
    
     return(
     
      <TouchableOpacity style={slotTimeSelected === item.slottime ? tabstyles.tabActive : tabstyles.tab} onPress={() => setSlotTimeSelected(item.slottime)}>
        <Text style={slotTimeSelected === item.slottime ? tabstyles.tabTextActive : tabstyles.tabText}>{item.slottime}</Text>
      </TouchableOpacity>
  
     )
   }

   
   function closePopup(){
      setShowPopup(false)
   }
   function onRadioSelect(index,value){
     setRadioValue(value)
   }

   function renderServiceHrs(){
    let {getAllSlots} = store;
    if(!undefinedOrZero(getAllSlots.response)){
     return(
       <Text style={{marginLeft:20,marginBottom:10,color:COLOR.violet}}>This Model take {getAllSlots.response[0].servicehours} Service Hrs </Text>
     )
    }
   }

   function renderFlatlist(){
     let {getAllSlots} = store;
     if(!undefinedOrZero(getAllSlots.response)){
      // let timingSize = timingList.length
      
      return(
        <FlatList
                  data={getAllSlots.response}
                  keyExtractor={(result) => result.slottime}
                  numColumns={3}
                  extraData={getAllSlots.response}
                  renderItem={({ item, index } ) => (
                    
                        <View key={index}>
                            {renderNewButton(item,index)}
                        </View>
                    )}
                  />
            )
     }
   }

   function renderPopupBody(){
     return(
       <View style={{justifyContent:'center',alignItems:"center"}}>
          <Text style={styles.packageTitle}>  Thank you for choosing TGE </Text>
          <Text> Your Booking ID : {store.bookingAppointment}</Text>
       </View>
     )
   }

   function renderPopup(){
    return(
        <SuccessPopup
            show={showPopup} 
            success={true}
            closePopup={()=> {closePopup(); navigate('BookingHistory')}}
            title="">
              {renderPopupBody()}
          </SuccessPopup> 
     );
    }

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
    <View>
      <View>
{/*       
        <Text style={styles.packageTitle}>{__('Select Your Date')}</Text>
        <Text style={styles.dateLabel}>{__('Date')}</Text>
        <View style={styles.dateInfo}>
          <TextInput
            placeholder='Select Date'
            placeholderTextColor='#8e8e8e'
            value={date.toDateString()}
            style={styles.formInput}
          />
          <TouchableOpacity style={styles.timeIcon} onPress={() => showDate()}>
            <Icon name='calendar' type='AntDesign' style={[theme.huge, theme.smokeDark]} />
          </TouchableOpacity>
        </View> */}

        {/* {show && (  <Text style={{alignSelf:'flex-end',flex:1,flexDirection:'row',marginRight:20,color:COLOR.violet}} onPress={()=> setShow(false)}>Done</Text>)} */}
   
        {show && ( 
        <DateTimePicker
          value={date}
          is24Hour={true}
          confirmBtnText='Done'
           
          display="spinner"
          onChange={onChange}
        />
      )}
      
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

      <Text style={styles.packageTitle}>{__('Select Your Date')}</Text>
        <Text style={styles.dateLabel}>{__('Date')}</Text>
        <View style={styles.dateInfo}>
          <TextInput
            placeholder='Select Date'
            placeholderTextColor='#8e8e8e'
            value={date.toDateString()}
            style={styles.formInput}
          />
          <TouchableOpacity style={styles.timeIcon} onPress={() => showDate()}>
            <Icon name='calendar' type='AntDesign' style={[theme.huge, theme.smokeDark]} />
          </TouchableOpacity>
        </View>

      <View style={{marginTop: 20}}>

      </View>

      {notUndefinedAndNull(modelsSelect.id)  &&
      <View style={{marginLeft:10,marginRight:10,marginTop:-30}}>
        <Select 
            items={slot}
            {...slotSelect}  />
      </View>
      } 
      {notUndefinedAndNull(slotSelect.id)  &&
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',marginTop:-30}}>
          <Text style={styles.packageTitle1}>{__('Select Your Timing')}</Text>
          <Text style={styles.packageTitle} onPress={() => setTimingArray([])}>Clear</Text>
        </View>
        } 
        {notUndefinedAndNull(slotSelect.id)  &&
        <View style={styles.sessionLayout}>
          {renderServiceHrs()}
          {renderFlatlist()}
        </View>
       }
   
    {!empty(slotTimeSelected)  && 
    <View>
     <Text style={styles.packageTitle}>Booking Type</Text>
     <RadioGroup onSelect = {(index, value) => onRadioSelect(index, value)} style={{flex:1,flexDirection:'row',marginLeft:10}}
           color={COLOR.violet}>
          <RadioButton value={'AMC'} color={COLOR.violet}>
            <Text>AMC</Text>
          </RadioButton>
  
          <RadioButton value={'ON_CALL'} color={COLOR.violet}>
            <Text>ON_CALL</Text>
          </RadioButton>
        </RadioGroup> 
        <Text style={styles.packageTitle}>Contact Number</Text>
        <TextInput
            placeholder='Contact Number'
            placeholderTextColor='#8e8e8e'
            value={mobileNumber}
            
            maxLength={10}
            keyboardType={'number-pad'}
            style={{marginLeft:20,marginTop:10,padding:5}}
            onChange={(value) => setMobileNumber(value)}
          />

        <TextInput  
          style={newStyles.textInputStyle}  
          onChangeText={(value) => setComment(value)}  
          placeholder="Brief Description of Problem / Requirement Any other specific instructions"  
          placeholderTextColor='#8e8e8e'
          value={comment}
          multiline={true}
        /> 
         <TouchableOpacity style={styles.confirmOrderBtn} onPress={() => onSubmit()}>
            <Text style={styles.confirmBtnText}>{__('Submit')}</Text>
            <Icon name='arrowright' type='AntDesign' style={[theme.extraLarge, theme.light]} />
          </TouchableOpacity>
        </View>}
      
        {renderPopup()}
      </View>
      
    </View>
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

const newStyles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    width: "92%",
    justifyContent: "space-between",
    alignItems: "center"
  },
  itemStyle: {
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    color: "#007aff"
  },
  pickerStyle: {
    width: "100%",
    height: 40,
    color: "#007aff",
    fontSize: 14,
    fontFamily: "Roboto-Regular"
  },
  textStyle: {
    fontSize: 14,
    fontFamily: "Roboto-Regular"
  },
  textInputStyle: {  
    borderColor: COLOR.violet,  
    borderWidth: 1,  
    height: 80,  
    margin: 20,  
    padding: 10,  
    
  }
});