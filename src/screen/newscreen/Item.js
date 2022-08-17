import React, { useEffect } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { Icon, Text, View } from 'native-base'

import styles from '../Public/Home/styles'


import LinearGradient from 'react-native-linear-gradient'

import theme from '@theme/styles'
import { navigate } from '@utility/navigation'
import { __ } from '@utility/translation'
import { setCategory } from '../services/Session'

export default function Item(props){
  
    const item = props.item
    const data = props.data

  

    

      async function onPressItem(){
        // let category = await getCategory();
        // let value = {
        //     'categoryId': category.categoryId,
        //     'categoryName': category.categoryName,
        //     'sub_category': {
        //       'id':'',
        //       'name': ''
        //     }
        //   }
        //   setCategory(value)

        // navigate('ModelList',{item:item,data:data})
        console.log(item)
    }


    return (
      <>
        <View style={styles.featureContainer}>
          <TouchableOpacity style={styles.featureContent} >
            <Image source={item.image_url} style={styles.featureImg} />
            <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,0.1)']} style={styles.linearGradient} />
            <View style={styles.featureInfo}>
              <View>
                <Text style={styles.featureText}>{item.name}</Text>
                {/* <Text style={styles.featurePackageText}>{item['descText_' + this.props.language] || item.descText}</Text> */}
              </View>
              <View style={styles.featureIcon}>
                <Icon name='arrowright' type='AntDesign' style={[theme.extraHuge, theme.light]} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </>
    )
  }

