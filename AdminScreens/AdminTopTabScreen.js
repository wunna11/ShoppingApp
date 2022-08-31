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
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#174fe8',
      tabBarInactiveTintColor: '#848554',
      tabBarLabelStyle: { fontSize: 12, fontWeight: '900', },
      tabBarItemStyle: { width: 100 },
      tabBarStyle: { backgroundColor: '#f7d081' },
    }}>
      <Tab.Screen name='Man' component={MenClothing} />
      <Tab.Screen name='Woman' component={WomanClothing} />
      <Tab.Screen name='Shoe' component={Shoes} />
      <Tab.Screen name='Accessory' component={Accessories} />
    </Tab.Navigator>
  )
}

export default AdminTopTabScreen

const styles = StyleSheet.create({})
