import AsyncStorage from '@react-native-community/async-storage'
import decode from 'jwt-decode'
let USER = "user";
let USER_DATA = "user_data";
let CATEGORY_DATA = "category_data"


export async function setUser(user){
    await AsyncStorage.setItem(USER, JSON.stringify(user));
  }

export async function getUser(){
    try{
        let user = await AsyncStorage.getItem(USER);
        const {exp} = decode((JSON.parse(user)).accessToken);
    if(Date.now() >= exp*1000)
    { 
        await AsyncStorage.clear();
        return null;
    }

        return JSON.parse(user);
    }catch(e){
        return null;
    }
}  

export async function setUser_data(userdata){
    await AsyncStorage.setItem(USER_DATA, JSON.stringify(userdata));
  }

export async function getUser_data(){
    try{
        let userdata = await AsyncStorage.getItem(USER_DATA);
        return JSON.parse(userdata);
    }catch(e){
        return null;
    }
}  

export async function deleteUser(){
    await AsyncStorage.clear();
  }


 

export async function setCategory(category){
    await AsyncStorage.setItem(CATEGORY_DATA, JSON.stringify(category));
  }


export async function getCategory(){
    try{
        let category = await AsyncStorage.getItem(CATEGORY_DATA);
        return JSON.parse(category);
    }catch(e){
        return null;
    }
}

export async function clearCategory(){
    await AsyncStorage.removeItem(CATEGORY_DATA);
}