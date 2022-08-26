import React, { useContext, useEffect } from "react";
import { View, Image, Text, TouchableOpacity } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';
import { CommonActions } from '@react-navigation/native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { firebase } from '../config';
import { Restart } from '../components/reload/reload'
const CustomDrawer = (props) => {


  const SignOut = () => {
    firebase.auth().signOut()
    CommonActions.reset({
      index: 0,
      routes: [{ name: 'Login' }]
    })
    Restart()
  }


  return (

    <View style={{ flex: 1 }}>

      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#f7d081" }}
      >
<View style={{borderBottomWidth:2,borderColor:"#fff" }}>
        <Image
          source={require('../assets/logo.png')}
          style={{ height: 100, width: 100, marginLeft: 80, marginTop: 30, marginBottom: 10, borderRadius: 50 }}
        />

        <Text
          style={{ marginLeft: "35%", fontSize: 20, fontWeight: 'bold' }}>
          WTTH
        </Text>
        
        <Text
          style={{ marginLeft: "20%", fontSize: 16, marginTop: 8, paddingBottom: 40}}>
          wtth@brandmail.com
          </Text>
          </View>
        <View style={{ flex: 1, backgroundColor: "#f7d081", paddingBottom: 20, paddingTop: 20 }}>
          <DrawerItemList {...props} />
        </View>
    
      <View style={{backgroundColor:"#f7d081", Width: "70%", borderTopWidth: 2, paddingBottom: 70, paddingLeft: 20, borderTopColor: "#fff" }}>
        <TouchableOpacity
          onPress={SignOut}
          style={{ paddingTop:30}}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialCommunityIcons name="logout" color={"#000"} size={30} />
            <Text style={{ fontSize: 16, marginLeft: 25 }}> Sign Out</Text>
          </View>
        </TouchableOpacity>
        </View>
        </DrawerContentScrollView>
    </View>
  )
}

export default CustomDrawer