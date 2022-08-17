import React, { Fragment, useEffect, useState } from 'react'
import { Text,FlatList ,TouchableOpacity, StyleSheet} from 'react-native'
import { Container, Content, Icon, View, Accordion} from 'native-base'
import { getUser } from '../../services/Session'
import styles from '../../Public/Package/styles'
import theme from '@theme/styles'
import viewStyles from '../../Public/MyAccount/styles'
import Header from '@component/Header'
import Footer from '@component/Footer'
import { notUndefinedAndNull, undefinedOrNull } from '../../../component/utils/Validation'
import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'
import request from '@utility/request'
import { bind } from '@utility/component'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import * as userAction from '../../../redux/action/HistoryAction';

export default function BookingHistory(props){

  
  let dispatch = useDispatch();
  let store = useSelector(connectToStore, shallowEqual);
 // console.log(store.bookinghistory.bookinghistory.bookinghistory.response);
    const [bookingList,setBookingList] = useState([]);
  useEffect(()=>{
  fetchbooking();
  },[])

async function fetchbooking(){
const user = await getUser();
if(notUndefinedAndNull(user)){
dispatch(userAction.getbookings(user.id))
}
}

    useEffect(() => {
       setBookingList(store.bookinghistory.bookinghistory.bookinghistory.response
      //    [
      //      {
      //          "name": 'Golf Cart Booking',
      //          "id": "75624422",
      //          "date": "28-10-2020",
      //          "status": "Delivered",
      //          "price" : " 240"
      //      },
      //      {
      //       "name": 'E Sight See Bus Booking',
      //       "id": "565824432",
      //       "date": "29-10-2020",
      //       "status": "Approved",
      //       "price" : " 340"
      //   },
      //   {
      //       "name": 'Two Wheeler Booking',
      //       "id": "578824492",
      //       "date": "30-10-2020",
      //       "status": "Processing",
      //       "price" : " 320"
      //   },
      //   {
      //       "name": 'Electonic Booking',
      //       "id": "675624402",
      //       "date": "31-10-2020",
      //       "status": "Pending",
      //       "price" : " 180"
      //   }
      //  ]
       )
    },[store.bookinghistory.bookinghistory.bookinghistory])

    function renderStatus(item){
             if(item.bookingstatus === 1){
                return(
                    <View style={pageStyle.statusDeliveredView}>
                    <Text style={{fontSize:16,color:"#FFFFFF",marginTop:-5,alignSelf:'center'}}>Delivered</Text>
                  </View>   
                )
             }
             if(item.bookingstatus === 2){
                return(
                    <View style={pageStyle.statusApprovedView}>
                    <Text style={{fontSize:16,color:"#FFFFFF",marginTop:-5,alignSelf:'center'}}>Approved</Text>
                  </View>   
                )
                }  
            if(item.status === 'Processing'){
                    return(
                        <View style={pageStyle.statusProcessingView}>
                        <Text style={{fontSize:16,color:"#FFFFFF",marginTop:-5,alignSelf:'center'}}>{item.bookingstatus}</Text>
                      </View>   
                    )
                }  
            if(item.status === 'Pending'){
                        return(
                            <View style={pageStyle.statusPendingView}>
                            <Text style={{fontSize:16,color:"#FFFFFF",marginTop:-5,alignSelf:'center'}}>{item.bookingstatus}</Text>
                          </View>   
                        )
                }  
    }

    function renderContentView(item){
       return(  
        <View>  
             {renderStatus(item)}
        <TouchableOpacity style={viewStyles.settingInfo} onPress={() => navigate('BookingDetails',{ title : item.name})}>
        <View>
          <Text style={viewStyles.settingTitle}>Booking Id: {item.bookingrefid}</Text>
          {/* <Text style={{fontSize:16,color:"#333333",marginTop:5}}>{item.name}</Text> */}
          <Text style={{fontSize:16,color:"#333333",marginTop:5}}>{item.bookingtype}</Text>

          <Text style={viewStyles.settingText}>Date : {(item.bookingdate).slice(0, 10)}</Text>
        </View>
        <View>
           
           <Text style={{fontSize:16,color:"#333333"}}>₹ {item.servicecharges}</Text>
         </View>
      </TouchableOpacity>
      </View> 
       )
    }

    return(
        <Container>
          <Header navLeftType='back' statusBarType='dark' />
    
          <Content contentContainerStyle={theme.layoutDf}>
            <View style={styles.packageContainer}>
              <View style={styles.packageContent}>
                
                  <FlatList
                  data={bookingList}
                  keyExtractor={(result) => result.id}
                  renderItem={({ item, index } ) => (
                    
                        <View key={index}>
                            {renderContentView(item)}
                        </View>
                    )}
                  />
             </View>
            </View>
          </Content>
     
        </Container>
        )
}

function connectToStore(store){
  return{
    bookinghistory: store,
  }
}

const pageStyle = StyleSheet.create({
    statusView:{
        width:100,
        height:35,
        borderRadius:20,
        padding:10,
        marginBottom:-20,
        marginLeft:10,
        backgroundColor: '#FF0000'
    },
    statusDeliveredView:{
        width:100,
        height:35,
        borderRadius:20,
        padding:10,
        marginBottom:-20,
        marginLeft:10,
        backgroundColor: '#4CAF50'
    },
    statusApprovedView:{
        width:100,
        height:35,
        borderRadius:20,
        padding:10,
        marginBottom:-20,
        marginLeft:10,
        backgroundColor: '#1976D2'
    },
    statusProcessingView:{
        width:100,
        height:35,
        borderRadius:20,
        padding:10,
        marginBottom:-20,
        marginLeft:10,
        backgroundColor: '#7B1FA2'
    },
    statusPendingView:{
        width:100,
        height:35,
        borderRadius:20,
        padding:10,
        marginBottom:-20,
        marginLeft:10,
        backgroundColor: '#FE9800'
    }
})
