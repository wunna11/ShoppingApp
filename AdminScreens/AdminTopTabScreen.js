import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Accessories from '../TabScreens/Accessories';
import MenClothing from '../TabScreens/MenClothing';
import WomanClothing from '../TabScreens/WomanClothing';
import Shoes from '../TabScreens/Shoes';


const Tab = createMaterialTopTabNavigator();

const AdminTopTabScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Man' component={MenClothing} />
      <Tab.Screen name='Woman' component={WomanClothing} />
      <Tab.Screen name='Shoe' component={Shoes} />
      <Tab.Screen name='Accessory' component={Accessories} />
    </Tab.Navigator>
  )
}

export default AdminTopTabScreen

const styles = StyleSheet.create({})