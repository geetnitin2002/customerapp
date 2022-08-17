import React, { useEffect, useState } from 'react'
import Header from '@component/Header'
import { Image } from 'react-native'
import { Container, Content, Icon, View, Text } from 'native-base'
import Footer from '@component/Footer'
import axios from 'axios'
import { deleteUser, getUser, getUser_data } from '../../services/Session';
import { FlatList, ScrollView } from 'react-native-gesture-handler'
function index() {
    const [userdata, setdata] = useState();

  //  useEffect(async()=>{
  //   let user = await getUser();
  //   console.log(user);
  //  setdata(user);
  //  }, []) 
 
  return (
    <Container>
     <Header navLeftType='back' statusBarType='dark' />
     <View>
       <ScrollView>
        { [1, ,1 ,1 ,1 ,1].map((index)=>{
          return <View key={index} style={{margin: 10}}>
          <Text>Golf cart</Text>
          <Image source={require('../../../../assets/images/golf/4seater-golf.jpg')} style={{ height: 200, width: '100%', resizeMode: 'contain'}} />
          </View>
        })
        }
       </ScrollView>
     </View>
     {/* <Footer currentScreen='Profile' /> */}
    </Container>
  )
}

export default index;