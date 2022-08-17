import React, { Fragment, useEffect, useState } from 'react'
import { Text,FlatList,TouchableOpacity,Image } from 'react-native'
import { Container, Content, Icon, View, Accordion} from 'native-base'

import styles from '../Public/Package/styles'
import theme from '@theme/styles'

import Header from '@component/Header'
import Footer from '@component/Footer'

import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'
import request from '@utility/request'
import { bind } from '@utility/component'
import Item from './ModelItem';
import { getCategory , setCategory } from '../services/Session';
import { notUndefinedAndNull } from '../../component/utils/Validation'
import newstyles from '../Public/Home/styles'


import LinearGradient from 'react-native-linear-gradient'
export default function ModelList(props){

    const { item,data } = props.route.params
    const [categoryVal,setCategoryVal] = useState('')
    

    useEffect(() => {
        getCategoryData()
   },[])

   async function getCategoryData(){
     let category = await getCategory();
      if(notUndefinedAndNull(category)){
        setCategoryVal(category)
      }
   }

   function onPressItem(item){
     console.log(categoryVal)
    let value = {
     'categoryId': categoryVal.categoryId,
     'categoryName': categoryVal.categoryName,
     'sub_category': {
       'id':categoryVal.sub_category.id,
       'name': categoryVal.sub_category.name,
       'model':{
           'id': item.id,
           'name': item.name
       }
     }
   }
   setCategory(value)
   
   navigate('PublicBooking',{ selectedCategory:value })
 }

 function renderItem(item){
    return(
      <>
     
      <View style={newstyles.featureContainer}>
        <TouchableOpacity style={newstyles.featureContent} onPress={() => onPressItem(item)}>
          <Image source={{ uri: item.image_url}} style={newstyles.featureImg} />
          <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,0.1)']} style={styles.linearGradient} />
          <View style={newstyles.featureInfo}>
            <View>
              <Text style={newstyles.featureText}>{item.name}</Text>
              {/* <Text style={styles.featurePackageText}>{item['descText_' + this.props.language] || item.descText}</Text> */}
            </View>
            <View style={newstyles.featureIcon}>
              <Icon name='arrowright' type='AntDesign' style={[theme.extraHuge, theme.light]} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
         
        </>  
    )
  }

    function renderProductsLists(){
      console.log('sub',item)
        return(
        <Fragment>
            <FlatList
              data={item.models}
              renderItem={({ item, index } ) => (
                <View key={index}>
                    {renderItem(item)}
                </View>
            )}
            />
         </Fragment>
        )
    }

    return(
    <Container>
      <Header navLeftType='back' statusBarType='dark' />

      <Content contentContainerStyle={theme.layoutDf}>
        <View style={styles.packageContainer}>
          <View style={styles.packageContent}>
            <Text style={styles.packageTitle}>Models</Text>
            <View style={styles.packageItem}>
               {renderProductsLists()}
            </View>
          </View>
        </View>
      </Content>
 
    </Container>
    )
}