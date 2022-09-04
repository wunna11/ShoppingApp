import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AdminShoes from './AdminShoe';
import AdminMen from './AdminMen';
import AdminWomen from './AdminWomen';
import AdminAccessories from './AdminAccessory';
<<<<<<< HEAD
import AdminTrendList from './AdminTrendList';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native';
=======
>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8

const Tab = createMaterialTopTabNavigator();

const AdminTopTabScreen = () => {
<<<<<<< HEAD
    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1, marginTop: "9%" }}>
                <Tab.Navigator screenOptions={{
                    tabBarActiveTintColor: '#174fe8',
                    tabBarInactiveTintColor: '#848554',
                    tabBarLabelStyle: { fontSize: 10, fontWeight: '900' },

                    tabBarStyle: { backgroundColor: '#f7d081' },
                    tabBarShowLabel: false,

                }}>
                    <Tab.Screen name='Man' component={AdminMen}

                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="man" color={'#000'} size={28} />
                            ),
                        }} />
                    <Tab.Screen name='Woman' component={AdminWomen}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="woman" color={'#000'} size={28} />
                            ),
                        }}
                    />
                    <Tab.Screen name='Shoe' component={AdminShoes}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="shoe-heel" color={'#000'} size={28} />
                            ),
                        }}
                    />
                    <Tab.Screen name='Accessory' component={AdminAccessories}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="necklace" color={'#000'} size={28} />
                            ),
                        }} />
                    <Tab.Screen name='TrendList' component={AdminTrendList}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="basket" color={'#000'} size={28} />
                            ),
                        }} />

                </Tab.Navigator>
            </SafeAreaView>
        </View>
    )
}
=======
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#174fe8',
      tabBarInactiveTintColor: '#848554',
      tabBarLabelStyle: { fontSize: 12, fontWeight: '900', },
      tabBarItemStyle: { width: 100 },
      tabBarStyle: { backgroundColor: '#f7d081' },
    }}>
      <Tab.Screen name='Man' component={AdminMen} />
      <Tab.Screen name='Woman' component={AdminWomen} />
      <Tab.Screen name='Shoe' component={AdminShoes} />
      <Tab.Screen name='Accessory' component={AdminAccessories} />

    </Tab.Navigator>
  )
}

>>>>>>> cd3fd4401b451391b896efd9d80a80684a6605c8
export default AdminTopTabScreen

const styles = StyleSheet.create({})
