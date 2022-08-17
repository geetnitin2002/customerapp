import React , { useEffect, useState, Fragment }from 'react'
import { FlatList } from 'react-native'
import { View } from 'native-base'

import Item from './Item'
import Placeholder from './Placeholder'
import { __ } from '@utility/translation'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import * as categoryAction from '../../../../redux/action/CategoryAction';
import { notUndefinedAndNull, undefinedOrZero } from "../../../../component/utils/Validation";

export default function Featured(props){

     let dispatch = useDispatch();
     let store = useSelector(connectToStore, shallowEqual);
     const [data,setData] = useState([])
 

     useEffect(() => {
     dispatch(categoryAction.getAllCategory())
    const images = [
      {
        src : require('../../../../../assets/images/slider/golfcart.jpg')
      },
      {
        src : require('../../../../../assets/images/slider/e-bus.jpg')
      },
      {
        src : require('../../../../../assets/images/slider/2wheeler.jpg')
      },
      {
        src : require('../../../../../assets/images/slider/3wheeler.jpg')
      },
      {
        src : require('../../../../../assets/images/slider/escooter.png')
      }
    ]

    
    
    setData(
       [
        {
          "Text":"Golf Cart",
          "Text_ar":"",
          "descText":"View models",
          "descText_ar":"",
          "image": images[0].src
       },
       {
        "Text":"E-BUS",
        "Text_ar":"",
        "descText":"View models",
        "descText_ar":"",
        "image": images[1].src
     },
     {
      "Text":"E-Cycles",
      "Text_ar":"",
      "descText":"View models",
      "descText_ar":"",
      "image": images[2].src
     },
     {
      "Text":"3-Wheeler",
      "Text_ar":"",
      "descText":"View models",
      "descText_ar":"",
      "image": images[3].src
     },
     {
      "Text":"Electric 2-Wheeler",
      "Text_ar":"",
      "descText":"View models",
      "descText_ar":"",
      "image": images[4].src
     }
     ]
    )
  },[])

  useEffect(() => {
     if(notUndefinedAndNull(store.getAllCategory)){
       console.log(store.getAllCategory.response)
     }
  },[store.getAllCategory])

  function renderTemplate () {
    return <Placeholder />
  }

  

  function renderItem ({ item }) {

    return (
      <Item
        language={''}
        item={item}
      />
    )
  }

  function renderList(){
    let { getAllCategory } = store;
    if(!undefinedOrZero(getAllCategory.response)){
      return(
      <>
        <FlatList
          data={getAllCategory.response}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={props.fetching ? renderTemplate : renderItem}
        />
      </>
    )
    }
  }

  
    return (
      <Fragment>
       {renderList()}
      </Fragment>
    )
  }


function connectToStore(store){
  return{
    showPageLoader: store.category.showPageLoader,
    getAllCategory: store.category.getAllCategory
    
  }
}
